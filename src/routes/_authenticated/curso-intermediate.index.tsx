import { createFileRoute } from "@tanstack/react-router";
import { CourseHome } from "@/components/curriculum/CourseHome";
import {
  INTERMEDIATE_COURSE_ID,
  INTERMEDIATE_PARTS_TOTAL,
  INTERMEDIATE_UNITS,
} from "@/lib/intermediate-course";
import { INTERMEDIATE_ASSESSMENT_ID, INTERMEDIATE_PASS_SCORE } from "@/lib/intermediate-assessment";

export const Route = createFileRoute("/_authenticated/curso-intermediate/")({
  head: () => {
    const title = "Curso Intermediate — 40 unidades | Speak2Co";
    const description =
      "Currículo oficial Intermediate (B1) do Método Speak2Co: 40 unidades com Part 1 — Discover e Part 2 — Communicate, checagem obrigatória e pronúncia com IA.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: () => (
    <CourseHome
      courseId={INTERMEDIATE_COURSE_ID}
      courseBase="/curso-intermediate"
      title="Intermediate English Course"
      planLabel="Speak2Co Complete · CEFR B1"
      units={INTERMEDIATE_UNITS}
      partsTotal={INTERMEDIATE_PARTS_TOTAL}
      assessmentId={INTERMEDIATE_ASSESSMENT_ID}
      passScore={INTERMEDIATE_PASS_SCORE}
      assessmentHref="/curso-intermediate/assessment"
      certificateName="Intermediate"
      onExportPdf={async () => {
        const { exportIntermediateCourseToPdf } = await import("@/lib/intermediate-course-pdf");
        await exportIntermediateCourseToPdf();
      }}
    />
  ),
});
