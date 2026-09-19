/**
 * Imagens de apoio do Warm-up.
 * Duas resoluções: por código de unidade (imagem própria daquela lição, novo
 * currículo Speak2Co) e, como apoio, por tema do título da unidade.
 */
import beginnerU01 from "@/assets/warmup/beginner-u01-first-contact.jpg";
import beginnerU02 from "@/assets/warmup/beginner-u02-people-around-me.jpg";
import beginnerU03 from "@/assets/warmup/beginner-u03-things-i-carry.jpg";
import beginnerU04 from "@/assets/warmup/beginner-u04-numbers.jpg";
import beginnerU05 from "@/assets/warmup/beginner-u05-my-day-begins.jpg";
import beginnerU06 from "@/assets/warmup/beginner-u06-he-works-she-studies.jpg";
import beginnerU07 from "@/assets/warmup/beginner-u07-clock-and-calendar.jpg";
import beginnerU08 from "@/assets/warmup/beginner-u08-i-dont-he-doesnt.jpg";
import beginnerU09 from "@/assets/warmup/beginner-u09-do-you.jpg";
import beginnerU10 from "@/assets/warmup/beginner-u10-how-often.jpg";
import beginnerU11 from "@/assets/warmup/beginner-u11-checkpoint.jpg";
import { WARMUP_12_16 } from "./warmup-images-12-16";
import { WARMUP_17_21 } from "./warmup-images-17-21";
import { WARMUP_22_26 } from "./warmup-images-22-26";
import { WARMUP_27_30 } from "./warmup-images-27-30";
import business from "@/assets/warmup/business.jpg";
import globalIssues from "@/assets/warmup/global-issues.jpg";
import psychology from "@/assets/warmup/psychology.jpg";
import arts from "@/assets/warmup/arts.jpg";
import technology from "@/assets/warmup/technology.jpg";
import environment from "@/assets/warmup/environment.jpg";
import culture from "@/assets/warmup/culture.jpg";
import education from "@/assets/warmup/education.jpg";
import relationships from "@/assets/warmup/relationships.jpg";
import newsMedia from "@/assets/warmup/news-media.jpg";
import workplace from "@/assets/warmup/workplace.jpg";
import health from "@/assets/warmup/health.jpg";
import travel from "@/assets/warmup/travel.jpg";
import social from "@/assets/warmup/social.jpg";
import hobbies from "@/assets/warmup/hobbies.jpg";
import general from "@/assets/warmup/general.jpg";

export type WarmUpImage = { src: string; alt: string; altPt: string };

const THEMES: { match: RegExp; image: WarmUpImage }[] = [
  {
    match: /business|economy|negotiat|corporate/i,
    image: {
      src: business,
      alt: "Business meeting, market charts and a handshake",
      altPt: "Reunião de negócios, gráficos de mercado e um aperto de mãos",
    },
  },
  {
    match: /global issues?|globalization|world/i,
    image: {
      src: globalIssues,
      alt: "World map with a crowd of demonstrators",
      altPt: "Mapa-múndi com uma multidão de manifestantes",
    },
  },
  {
    match: /psycholog|mindset|emotion/i,
    image: {
      src: psychology,
      alt: "Person meditating at sunrise with a brain illustration and a climber",
      altPt: "Pessoa meditando ao amanhecer com ilustração de cérebro e um alpinista",
    },
  },
  {
    match: /arts?|entertainment|music|cinema|film/i,
    image: {
      src: arts,
      alt: "Theatre stage with an audience and framed artworks",
      altPt: "Palco de teatro com plateia e obras de arte emolduradas",
    },
  },
  {
    match: /technolog|digital|innovation|artificial intelligence/i,
    image: {
      src: technology,
      alt: "Circuit board, smartphone, robot and people using laptops",
      altPt: "Placa de circuito, smartphone, robô e pessoas usando notebooks",
    },
  },
  {
    match: /environment|climate|sustainab|eco/i,
    image: {
      src: environment,
      alt: "Forest and solar panels facing a city skyline",
      altPt: "Floresta e painéis solares diante do horizonte de uma cidade",
    },
  },
  {
    match: /culture|society|social change|tradition/i,
    image: {
      src: culture,
      alt: "Crowded city street during a cultural festival",
      altPt: "Rua movimentada durante um festival cultural",
    },
  },
  {
    match: /academic|education|learning|university|school/i,
    image: {
      src: education,
      alt: "University lecture hall with students studying",
      altPt: "Auditório universitário com estudantes estudando",
    },
  },
  {
    match: /relationship|family|friendship/i,
    image: {
      src: relationships,
      alt: "Friends and colleagues talking around a table in a cafe",
      altPt: "Amigos e colegas conversando à mesa em um café",
    },
  },
  {
    match: /news|media|journalis|press/i,
    image: {
      src: newsMedia,
      alt: "Broadcast newsroom with microphone and newspapers",
      altPt: "Redação de telejornal com microfone e jornais",
    },
  },
  {
    match: /workplace|diplomacy|career|leadership|job/i,
    image: {
      src: workplace,
      alt: "Team meeting in a boardroom with a video call on screen",
      altPt: "Reunião de equipe em sala de conselho com videochamada na tela",
    },
  },
  {
    match: /health|wellbeing|medic|fitness/i,
    image: {
      src: health,
      alt: "Doctor, healthy food, running outdoors and a stressed worker",
      altPt: "Médico, comida saudável, corrida ao ar livre e trabalhador estressado",
    },
  },
  {
    match: /travel|tourism|journey|airport/i,
    image: {
      src: travel,
      alt: "Airport terminal, passport on a suitcase and a mountain road",
      altPt: "Terminal de aeroporto, passaporte sobre a mala e estrada de montanha",
    },
  },
  {
    match: /social interaction|small talk|conversation|networking/i,
    image: {
      src: social,
      alt: "People networking and chatting at an event",
      altPt: "Pessoas conversando e fazendo networking em um evento",
    },
  },
  {
    match: /hobb|leisure|free time|sport/i,
    image: {
      src: hobbies,
      alt: "Photography, gardening, guitar playing and chess",
      altPt: "Fotografia, jardinagem, violão e xadrez",
    },
  },
];

const FALLBACK: WarmUpImage = {
  src: general,
  alt: "People in conversation with speech bubbles",
  altPt: "Pessoas conversando com balões de fala",
};

/** A atividade pede para observar imagens? */
export function warmUpNeedsImage(prompt: string): boolean {
  return /\b(images?|pictures?|photos?)\b/i.test(prompt);
}

/** Imagem correspondente ao tema da unidade. */
export function warmUpImageFor(unitTitle: string): WarmUpImage {
  return THEMES.find((t) => t.match.test(unitTitle))?.image ?? FALLBACK;
}

/** Imagem própria de uma lição do novo currículo Speak2Co (por código da unidade). */
const UNIT_IMAGES: Record<string, WarmUpImage> = {
  "BEGINNER-U01": {
    src: beginnerU01,
    alt: "Three colleagues meeting for the first time in a bright coworking lobby",
    altPt: "Três colegas se conhecendo no saguão claro de um coworking",
  },
  "BEGINNER-U02": {
    src: beginnerU02,
    alt: "A family photo album open on a kitchen table with printed photos around it",
    altPt: "Um álbum de fotos de família aberto na mesa da cozinha, com fotos impressas ao redor",
  },
  "BEGINNER-U03": {
    src: beginnerU03,
    alt: "Everyday personal objects arranged on a desk: keys, wallet, notebook, pen, phone, umbrella",
    altPt: "Objetos pessoais do dia a dia sobre uma mesa: chaves, carteira, caderno, caneta, celular, guarda-chuva",
  },
  "BEGINNER-U04": {
    src: beginnerU04,
    alt: "A visitor talking to a receptionist at a school reception desk with numbered rooms",
    altPt: "Uma visitante conversando com a recepcionista na recepção de uma escola, com salas numeradas",
  },
  "BEGINNER-U05": {
    src: beginnerU05,
    alt: "A person having coffee in a sunlit kitchen early in the morning, with a bag by the door",
    altPt: "Uma pessoa tomando café numa cozinha ensolarada no início da manhã, com a mochila perto da porta",
  },
  "BEGINNER-U06": {
    src: beginnerU06,
    alt: "Three professionals working in a bright coworking space: a woman at a laptop, a man at a coffee counter and a nurse with a tablet",
    altPt: "Três profissionais trabalhando em um coworking claro: uma mulher no laptop, um homem no balcão de café e uma enfermeira com um tablet",
  },
  "BEGINNER-U07": {
    src: beginnerU07,
    alt: "A round clock, an open monthly calendar and a phone with a daily schedule on a desk",
    altPt: "Um relógio redondo, um calendário mensal aberto e um celular com a agenda do dia sobre uma mesa",
  },
  "BEGINNER-U08": {
    src: beginnerU08,
    alt: "Two colleagues at a cafe table clearing up a misunderstanding, one gesturing no with an open hand",
    altPt: "Dois colegas em uma mesa de café desfazendo um mal-entendido, um deles gesticulando que não com a mão aberta",
  },
  "BEGINNER-U09": {
    src: beginnerU09,
    alt: "Two colleagues sitting face to face in a coworking lounge during a friendly interview",
    altPt: "Dois colegas sentados frente a frente em um lounge de coworking durante uma entrevista amigável",
  },
  "BEGINNER-U10": {
    src: beginnerU10,
    alt: "A weekly planner on a desk with habits marked on different days",
    altPt: "Um planner semanal sobre a mesa com hábitos marcados em dias diferentes",
  },
  "BEGINNER-U11": {
    src: beginnerU11,
    alt: "Three colleagues talking together at the end of the week in a bright coworking space",
    altPt: "Três colegas conversando no fim da semana em um coworking iluminado",
  },
  ...WARMUP_12_16,
  ...WARMUP_17_21,
  ...WARMUP_22_26,
  ...WARMUP_27_30,
};

export function warmUpImageForUnit(unitCode: string): WarmUpImage | undefined {
  return UNIT_IMAGES[unitCode.toUpperCase()];
}
