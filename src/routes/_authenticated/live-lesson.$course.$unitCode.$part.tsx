import { createFileRoute, notFound } from "@tanstack/react-router";
import { FeatureGate } from "@/components/FeatureGate";
import { LiveLesson } from "@/components/live-lesson/LiveLesson";
import { PART_LABEL } from "@/lib/curriculum/types";
import { findUnit, isCourseLevel, isUnitPart } from "@/lib/live-lesson/units";

export const Route = createFileRoute("/_authenticated/live-lesson/$course/$unitCode/$part")({
  loader: ({ params }) => {
    if (!isCourseLevel(params.course) || !isUnitPart(params.part)) throw notFound();
    const unit = findUnit(params.course, params.unitCode);
    if (!unit) throw notFound();
    return { course: params.course, unit, part: params.part };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Guided Lesson with Gisele indisponível — Speak2Co" }] };
    const { unit, part } = loaderData;
    const title = `Guided Lesson with Gisele · Unit ${unit.number} — ${unit.title} | Speak2Co`;
    const description = `Aula guiada pessoalmente pela Gisele, com apoio de IA, sobre ${unit.title} (${PART_LABEL[part].en}).`;
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
    const { course, unit, part } = Route.useLoaderData();
    return (
      <FeatureGate
        feature="gisele_ai"
        title="Guided Lesson with Gisele"
        benefit="Aula guiada pessoalmente pela Gisele, com apoio de IA: prática de fala, feedback estruturado e desafio final — sobre o mesmo conteúdo do seu curso."
        requiredPlan="Signature"
      >
        <LiveLesson key={`${course}-${unit.code}-${part}`} course={course} unit={unit} part={part} />
      </FeatureGate>
    );
  },
});
