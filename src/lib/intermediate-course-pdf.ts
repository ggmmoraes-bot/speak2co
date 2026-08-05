import { jsPDF } from "jspdf";
import { INTERMEDIATE_LESSONS } from "@/lib/intermediate-course";
import { renderCoursePdf } from "@/lib/beginner-course-pdf";

/** PDF único e completo do Intermediate English Course (Método Speak2Co). */
export async function exportIntermediateCourseToPdf() {
  const doc = new jsPDF({ unit: "pt", format: "a4", orientation: "portrait" });
  await renderCoursePdf(doc, {
    lessons: INTERMEDIATE_LESSONS,
    courseTitle: "Intermediate English Course",
    subtitle: "Método Speak2Co · Plano Essential",
    intro:
      `${INTERMEDIATE_LESSONS.length} lições B1 → B2 com warm-up, vocabulário com IPA, verbos e ` +
      "phrasal verbs, gramática por exemplos, expressões, diálogos, laboratório de pronúncia, " +
      "exercícios escritos e falados, quiz e revisão.",
  });
  doc.save("speak2co-intermediate-english-course.pdf");
}
