import { createFileRoute, notFound } from "@tanstack/react-router";
import { UnitPartLesson } from "@/components/curriculum/UnitPartLesson";
import {
  BEGINNER_UNITS,
  BEGINNER_UNITS_TOTAL,
  getBeginnerUnit,
} from "@/lib/curriculum/beginner-units";
import { PART_LABEL, type UnitPartKey } from "@/lib/curriculum/types";
import { BEGINNER_COURSE_ID } from "@/lib/beginner-course";

export const Route = createFileRoute("/_authenticated/curso-beginner/unidade/$unitCode/$part")({
  loader: ({ params }) => {
    const unit = getBeginnerUnit(params.unitCode);
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
    const nextUnit = BEGINNER_UNITS.find((u) => u.number === unit.number + 1);
    return (
      <UnitPartLesson
        key={`${unit.code}-${part}`}
        unit={unit}
        part={part}
        courseId={BEGINNER_COURSE_ID}
        courseBase="/curso-beginner"
        unitsTotal={BEGINNER_UNITS_TOTAL}
        nextUnit={nextUnit}
        twoVoiceDialogue
      />
    );
  },
});
