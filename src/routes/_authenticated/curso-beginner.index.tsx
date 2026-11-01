import { createFileRoute } from "@tanstack/react-router";
import { CourseHome } from "@/components/curriculum/CourseHome";
import {
  BEGINNER_COURSE_ID,
  BEGINNER_PARTS_TOTAL,
  BEGINNER_UNITS,
} from "@/lib/beginner-course";
import { BEGINNER_ASSESSMENT_ID, BEGINNER_PASS_SCORE } from "@/lib/beginner-assessment";

export const Route = createFileRoute("/_authenticated/curso-beginner/")({
  head: () => {
    const title = "Curso Beginner — 30 unidades | Speak2Co";
    const description =
      "Currículo oficial Beginner (A1) do Método Speak2Co: 30 unidades com Part 1 — Discover e Part 2 — Communicate, checagem obrigatória e pronúncia com IA.";
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
      courseId={BEGINNER_COURSE_ID}
      courseBase="/curso-beginner"
      title="Beginner English Course"
      planLabel="Speak2Co All Access · CEFR A1"
      units={BEGINNER_UNITS}
      partsTotal={BEGINNER_PARTS_TOTAL}
      assessmentId={BEGINNER_ASSESSMENT_ID}
      passScore={BEGINNER_PASS_SCORE}
      assessmentHref="/curso-beginner/assessment"
      certificateName="Beginner"
      onExportPdf={async () => {
        const { exportBeginnerCourseToPdf } = await import("@/lib/beginner-course-pdf");
        await exportBeginnerCourseToPdf();
      }}
    />
  ),
});
