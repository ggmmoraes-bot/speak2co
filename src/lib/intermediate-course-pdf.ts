import { jsPDF } from "jspdf";
import { INTERMEDIATE_UNITS } from "@/lib/intermediate-course";
import { unitToPdfLesson } from "@/lib/curriculum/unit-pdf";
import { renderCoursePdf } from "@/lib/beginner-course-pdf";

/** PDF único e completo do Intermediate English Course (Método Speak2Co). */
export async function exportIntermediateCourseToPdf() {
  const doc = new jsPDF({ unit: "pt", format: "a4", orientation: "portrait" });
  await renderCoursePdf(doc, {
    lessons: INTERMEDIATE_UNITS.map(unitToPdfLesson),
    courseTitle: "Intermediate English Course",
    subtitle: "Método Speak2Co · All Access",
    intro:
      `${INTERMEDIATE_UNITS.length} unidades B1 com Part 1 — Discover e Part 2 — Communicate: ` +
      "warm-up, contexto real, vocabulário com IPA, gramática por exemplos, expressões, " +
      "reading/listening, checagem obrigatória e prática de fala com IA.",
  });
  doc.save("speak2co-intermediate-english-course.pdf");
}
