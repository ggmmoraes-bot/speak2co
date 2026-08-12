/**
 * Imagens de apoio do Warm-up (Upper-Intermediate B2).
 * Várias unidades pedem "Look at the images..." — aqui a imagem correspondente
 * ao tema da unidade é resolvida para ser exibida na própria aula.
 */
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
