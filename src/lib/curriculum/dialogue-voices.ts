/**
 * Mapeamento de personagens de diálogo para vozes de IA.
 * Personagens femininos usam voz feminina; masculinos, voz masculina.
 * Estrutura aberta: basta adicionar nomes às listas para ampliar a cobertura.
 */
export type VoiceGender = "female" | "male";

export const FEMALE_VOICE = "nova";
export const MALE_VOICE = "onyx";

const FEMALE_NAMES = [
  "sarah","anna","ana","maria","julia","júlia","emma","emily","olivia","sophia","sofia","laura",
  "lucy","clara","carla","alice","amanda","beatriz","bianca","camila","carol","carolina","daniela",
  "elena","fernanda","gabriela","gisele","helena","isabel","isabella","jane","jennifer","jessica",
  "joana","karen","katie","kelly","lara","leticia","linda","lisa","luana","mariana","marta","mary",
  "megan","mia","monica","nancy","natalia","nicole","paula","patricia","rachel","rebecca","renata",
  "rita","rosa","sandra","sara","silvia","susan","tania","teacher gisele","vanessa","victoria",
  "woman","female","waitress","receptionist","hostess","she","mrs","ms","miss","mother","mom",
  "sister","daughter","aunt","grandma",
];

const MALE_NAMES = [
  "john","james","mike","michael","peter","paul","david","daniel","carlos","pedro","joao","joão",
  "lucas","marcos","mark","matthew","robert","richard","thomas","tom","william","will","andrew",
  "anthony","bruno","charles","chris","christopher","diego","eduardo","felipe","fernando","frank",
  "gabriel","george","henry","hugo","jack","jason","jeff","jorge","jose","josé","joseph","kevin",
  "leo","luis","luiz","marcelo","mario","martin","nathan","nick","oliver","patrick","rafael",
  "ricardo","roberto","rodrigo","ryan","samuel","sergio","steve","tiago","victor","vitor",
  "man","male","waiter","officer","driver","clerk","he","mr","father","dad","brother","son",
  "uncle","grandpa",
];

function normalize(who: string) {
  return who
    .replace(/\(.*?\)/g, " ")
    .replace(/[:.]/g, " ")
    .trim()
    .toLowerCase();
}

/** Gênero da voz para um personagem, pelo nome. */
export function genderForSpeaker(who: string, fallbackIndex = 0): VoiceGender {
  const name = normalize(who);
  const tokens = name.split(/\s+/).filter(Boolean);
  const hit = (list: string[]) => list.some((n) => name === n || tokens.includes(n));
  if (hit(FEMALE_NAMES)) return "female";
  if (hit(MALE_NAMES)) return "male";
  // Sem correspondência: alterna vozes por ordem de aparição do personagem.
  return fallbackIndex % 2 === 0 ? "female" : "male";
}

/** Voz de IA associada a cada personagem do diálogo, na ordem de aparição. */
export function voiceMapForDialogue(speakers: string[]): Record<string, VoiceGender> {
  const map: Record<string, VoiceGender> = {};
  let unknown = 0;
  for (const who of speakers) {
    if (map[who]) continue;
    const name = normalize(who);
    const tokens = name.split(/\s+/).filter(Boolean);
    const known =
      FEMALE_NAMES.some((n) => name === n || tokens.includes(n)) ||
      MALE_NAMES.some((n) => name === n || tokens.includes(n));
    map[who] = genderForSpeaker(who, unknown);
    if (!known) unknown += 1;
  }
  return map;
}

export function voiceIdFor(gender: VoiceGender) {
  return gender === "female" ? FEMALE_VOICE : MALE_VOICE;
}
