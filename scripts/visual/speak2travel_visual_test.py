#!/usr/bin/env python3
"""Testes visuais automatizados do Speak2Travel.

Captura a arte/seção do Speak2Travel em várias larguras e verifica:
  - overflow horizontal (corte lateral da página)
  - proporção da arte (deve continuar quadrada, sem distorção)
  - elementos que ultrapassam a borda do viewport (desalinhamento)
  - diferença visual contra baselines salvas (regressão)

Uso:
  python3 scripts/visual/speak2travel_visual_test.py            # compara com baseline
  python3 scripts/visual/speak2travel_visual_test.py --update   # regrava baselines

Baselines: scripts/visual/baseline/
Saídas:    scripts/visual/output/
"""

from __future__ import annotations

import asyncio
import sys
from pathlib import Path

from PIL import Image, ImageChops
from playwright.async_api import async_playwright

BASE_URL = "http://localhost:8080"
ROOT = Path(__file__).resolve().parent
BASELINE = ROOT / "baseline"
OUTPUT = ROOT / "output"

# Larguras representativas: mobile pequeno, mobile, tablet, laptop, desktop.
WIDTHS = [320, 390, 768, 1024, 1440]

# Tolerância: % máxima de pixels diferentes contra a baseline.
MAX_DIFF_RATIO = 0.02
# Tolerância de proporção da arte (1.0 = quadrada perfeita).
ASPECT_TOLERANCE = 0.02


async def capture(page, width: int) -> list[str]:
    """Captura a seção Speak2Travel e retorna a lista de falhas encontradas."""
    failures: list[str] = []
    await page.set_viewport_size({"width": width, "height": 1400})
    await page.goto(BASE_URL + "/", wait_until="networkidle")

    heading = page.get_by_role("heading", name="Speak2Travel")
    await heading.scroll_into_view_if_needed()
    await page.wait_for_timeout(600)

    card = page.locator("article", has=heading)
    art = card.locator("img")

    # 1. overflow horizontal da página
    overflow = await page.evaluate(
        "() => document.documentElement.scrollWidth - document.documentElement.clientWidth"
    )
    if overflow > 1:
        failures.append(f"[{width}px] overflow horizontal de {overflow}px na página")

    # 2. proporção da arte
    box = await art.bounding_box()
    if not box:
        failures.append(f"[{width}px] arte do Speak2Travel não encontrada")
        return failures
    ratio = box["width"] / box["height"]
    if abs(ratio - 1) > ASPECT_TOLERANCE:
        failures.append(f"[{width}px] arte fora de proporção (ratio {ratio:.3f}, esperado ~1.0)")

    # 3. card dentro do viewport (sem corte lateral)
    card_box = await card.bounding_box()
    if card_box and (card_box["x"] < -1 or card_box["x"] + card_box["width"] > width + 1):
        failures.append(f"[{width}px] card do Speak2Travel ultrapassa a largura do viewport")

    # 4. textos e botão sem corte (scrollWidth > clientWidth)
    clipped = await card.evaluate(
        """(el) => [...el.querySelectorAll('h3, p, a, button')]
             .filter((n) => n.scrollWidth - n.clientWidth > 2)
             .map((n) => (n.textContent || '').trim().slice(0, 40))"""
    )
    for text in clipped:
        failures.append(f'[{width}px] texto cortado: "{text}"')

    OUTPUT.mkdir(parents=True, exist_ok=True)
    await card.screenshot(path=str(OUTPUT / f"speak2travel-{width}.png"))
    return failures


def compare(width: int, update: bool) -> list[str]:
    BASELINE.mkdir(parents=True, exist_ok=True)
    current_path = OUTPUT / f"speak2travel-{width}.png"
    baseline_path = BASELINE / f"speak2travel-{width}.png"

    if update or not baseline_path.exists():
        Image.open(current_path).save(baseline_path)
        return [] if update else [f"[{width}px] baseline criada (primeira execução)"]

    current = Image.open(current_path).convert("RGB")
    baseline = Image.open(baseline_path).convert("RGB")
    if current.size != baseline.size:
        return [f"[{width}px] tamanho mudou: {baseline.size} -> {current.size}"]

    diff = ImageChops.difference(current, baseline).convert("L")
    changed = sum(1 for p in diff.getdata() if p > 20)
    ratio = changed / (current.size[0] * current.size[1])
    if ratio > MAX_DIFF_RATIO:
        diff.save(OUTPUT / f"diff-{width}.png")
        return [f"[{width}px] regressão visual: {ratio:.2%} dos pixels mudaram"]
    return []


async def main() -> int:
    update = "--update" in sys.argv
    failures: list[str] = []

    async with async_playwright() as playwright:
        browser = await playwright.chromium.launch(headless=True)
        context = await browser.new_context()
        page = await context.new_page()
        for width in WIDTHS:
            failures += await capture(page, width)
            failures += compare(width, update)
        await browser.close()

    if failures:
        print("FALHAS ENCONTRADAS:")
        for f in failures:
            print(" -", f)
        return 1

    print(f"OK: Speak2Travel validado em {', '.join(str(w) for w in WIDTHS)}px")
    return 0


if __name__ == "__main__":
    raise SystemExit(asyncio.run(main()))
