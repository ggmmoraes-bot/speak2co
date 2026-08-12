import { jsPDF } from "jspdf";
import { UPPER_UNITS } from "@/lib/upper-course";
import { unitToPdfLesson } from "@/lib/curriculum/unit-pdf";
import { renderCoursePdf } from "@/lib/beginner-course-pdf";

/** PDF único e completo do Upper-Intermediate English Course (Método Speak2Co). */
export async function exportUpperCourseToPdf() {
  const doc = new jsPDF({ unit: "pt", format: "a4", orientation: "portrait" });
  await renderCoursePdf(doc, {
    lessons: UPPER_UNITS.map(unitToPdfLesson),
    courseTitle: "Upper-Intermediate English Course",
    subtitle: "Método Speak2Co · Plano Premium",
    intro:
      `${UPPER_UNITS.length} unidades B2 com Part 1 — Discover e Part 2 — Communicate: ` +
      "collocations avançadas, gramática complexa, discourse markers, reading/listening, " +
      "checagem obrigatória e prática de fala com IA.",
  });
  doc.save("speak2co-upper-intermediate-english-course.pdf");
}
