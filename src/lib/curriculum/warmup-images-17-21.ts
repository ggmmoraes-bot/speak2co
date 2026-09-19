/**
 * Imagens de Warm-up das Unidades 17–21 (Beginner, Bloco D).
 * Reaproveita imagens temáticas já existentes em src/assets/warmup, coerentes
 * com o conceito de imagem de cada unidade (sem texto, cena fotográfica).
 */
import hobbies from "@/assets/warmup/hobbies.jpg";
import workplace from "@/assets/warmup/workplace.jpg";
import social from "@/assets/warmup/social.jpg";
import general from "@/assets/warmup/general.jpg";
import travel from "@/assets/warmup/travel.jpg";

export const WARMUP_17_21: Record<string, { src: string; alt: string; altPt: string }> = {
  "BEGINNER-U17": {
    src: hobbies,
    alt: "Friends choosing between watching a movie, playing soccer and reading a book",
    altPt: "Amigos escolhendo entre assistir a um filme, jogar futebol e ler um livro",
  },
  "BEGINNER-U18": {
    src: workplace,
    alt: "A person asking for help at a coworking front desk",
    altPt: "Uma pessoa pedindo ajuda na recepção de um coworking",
  },
  "BEGINNER-U19": {
    src: social,
    alt: "A diverse group of people meeting at an airport",
    altPt: "Um grupo diverso de pessoas se encontrando em um aeroporto",
  },
  "BEGINNER-U20": {
    src: travel,
    alt: "Two people talking at a bus stop on a sunny day",
    altPt: "Duas pessoas conversando em um ponto de ônibus em um dia ensolarado",
  },
  "BEGINNER-U21": {
    src: general,
    alt: "A mosaic of everyday places and people from daily life",
    altPt: "Um mosaico de lugares e pessoas do dia a dia",
  },
};
