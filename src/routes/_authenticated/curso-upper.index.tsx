import { createFileRoute } from "@tanstack/react-router";
import { CourseHome } from "@/components/curriculum/CourseHome";
import { UPPER_COURSE_ID, UPPER_PARTS_TOTAL, UPPER_UNITS } from "@/lib/upper-course";
import { UPPER_ASSESSMENT_ID, UPPER_PASS_SCORE } from "@/lib/upper-assessment";

export const Route = createFileRoute("/_authenticated/curso-upper/")({
  head: () => {
    const title = "Curso Upper-Intermediate — 50 unidades | Speak2Co";
    const description =
      "Currículo oficial Upper-Intermediate (B2) do Método Speak2Co: 50 unidades com Part 1 — Discover e Part 2 — Communicate, checagem obrigatória e pronúncia com IA.";
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
      courseId={UPPER_COURSE_ID}
      courseBase="/curso-upper"
      title="Upper-Intermediate English Course"
      planLabel="Speak2Co Complete · CEFR B2"
      units={UPPER_UNITS}
      partsTotal={UPPER_PARTS_TOTAL}
      assessmentId={UPPER_ASSESSMENT_ID}
      passScore={UPPER_PASS_SCORE}
      assessmentHref="/curso-upper/assessment"
      certificateName="Upper-Intermediate"
      onExportPdf={async () => {
        const { exportUpperCourseToPdf } = await import("@/lib/upper-course-pdf");
        await exportUpperCourseToPdf();
      }}
    />
  ),
});
