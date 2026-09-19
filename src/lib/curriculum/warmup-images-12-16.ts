/**
 * Imagens de apoio do Warm-up — Unidades 12 a 16 (Beginner).
 * Observação: o ambiente de build não expõe uma ferramenta de geração de
 * imagens; por isso estas unidades reutilizam o asset genérico já existente
 * em src/assets/warmup/general.jpg como âncora visual temporária, com texto
 * alternativo descrevendo a cena prevista para cada lição.
 */
import general from "@/assets/warmup/general.jpg";

export const WARMUP_12_16: Record<string, { src: string; alt: string; altPt: string }> = {
  "BEGINNER-U12": {
    src: general,
    alt: "A tidy living room with a sofa, a lamp, a table and a bookshelf",
    altPt: "Uma sala de estar organizada, com sofá, luminária, mesa e estante de livros",
  },
  "BEGINNER-U13": {
    src: general,
    alt: "A person asking for directions on a city street with a map in hand",
    altPt: "Uma pessoa pedindo informações em uma rua da cidade com um mapa na mão",
  },
  "BEGINNER-U14": {
    src: general,
    alt: "Two friends practicing skills together: one swimming, one playing guitar",
    altPt: "Dois amigos praticando habilidades juntos: um nadando, outro tocando violão",
  },
  "BEGINNER-U15": {
    src: general,
    alt: "A breakfast table with bread, fruit, juice and coffee",
    altPt: "Uma mesa de café da manhã com pão, frutas, suco e café",
  },
  "BEGINNER-U16": {
    src: general,
    alt: "A small street market with a vendor and a customer checking prices",
    altPt: "Uma pequena feira de rua com um vendedor e um cliente conferindo preços",
  },
};
