/**
 * Imagens de apoio do Warm-up — Unidades 27–30 (bloco final "Ahead").
 * Reaproveita imagens temáticas genéricas já existentes no projeto
 * (nenhum arquivo binário novo foi adicionado nesta etapa).
 */
import travel from "@/assets/warmup/travel.jpg";
import business from "@/assets/warmup/business.jpg";
import social from "@/assets/warmup/social.jpg";
import general from "@/assets/warmup/general.jpg";

export const WARMUP_27_30: Record<string, { src: string; alt: string; altPt: string }> = {
  "BEGINNER-U27": {
    src: travel,
    alt: "A person organizing a trip with a suitcase and a map, planning ahead.",
    altPt: "Uma pessoa organizando uma viagem com uma mala e um mapa, planejando o futuro.",
  },
  "BEGINNER-U28": {
    src: business,
    alt: "A person deciding between two products in a shop.",
    altPt: "Uma pessoa decidindo entre dois produtos em uma loja.",
  },
  "BEGINNER-U29": {
    src: general,
    alt: "A person presenting ideas to a small group, connecting sentences.",
    altPt: "Uma pessoa apresentando ideias para um pequeno grupo, conectando frases.",
  },
  "BEGINNER-U30": {
    src: social,
    alt: "A group of friends celebrating the end of a course together.",
    altPt: "Um grupo de amigos comemorando juntos o fim de um curso.",
  },
};
