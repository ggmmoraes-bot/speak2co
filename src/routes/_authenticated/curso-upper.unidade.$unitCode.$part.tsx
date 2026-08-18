import { createFileRoute, notFound } from "@tanstack/react-router";
import { UnitPartLesson } from "@/components/curriculum/UnitPartLesson";
import {
  UPPER_COURSE_ID,
  UPPER_UNITS,
  UPPER_UNITS_TOTAL,
  getUpperUnit,
} from "@/lib/upper-course";
import { PART_LABEL, type UnitPartKey } from "@/lib/curriculum/types";

export const Route = createFileRoute("/_authenticated/curso-upper/unidade/$unitCode/$part")({
  loader: ({ params }) => {
    const unit = getUpperUnit(params.unitCode);
    const part = params.part === "communicate" ? "communicate" : "discover";
    if (!unit || (params.part !== "discover" && params.part !== "communicate")) throw notFound();
    return { unit, part: part as UnitPartKey };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Unidade indisponível — Speak2Co" }] };
    const { unit, part } = loaderData;
    const title = `Unit ${unit.number} · ${PART_LABEL[part].en} — ${unit.title} | Speak2Co`;
    const description = unit.objective.en;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: () => {
    const { unit, part } = Route.useLoaderData();
    const nextUnit = UPPER_UNITS.find((u) => u.number === unit.number + 1);
    return (
      <UnitPartLesson
        key={`${unit.code}-${part}`}
        unit={unit}
        part={part}
        courseId={UPPER_COURSE_ID}
        courseBase="/curso-upper"
        unitsTotal={UPPER_UNITS_TOTAL}
        nextUnit={nextUnit}
      />
    );
  },
});
