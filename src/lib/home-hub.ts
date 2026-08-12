import {
  Award,
  BookOpen,
  Bot,
  Briefcase,
  Compass,
  Flag,
  Globe,
  GraduationCap,
  HelpCircle,
  Layers,
  LifeBuoy,
  LineChart,
  Mail,
  MessageSquare,
  Mic,
  PenLine,
  Plane,
  Headphones,
  Sparkles,
  SpellCheck,
  Target,
  Trophy,
  Users,
  BookMarked,
} from "lucide-react";
import type { EcosystemItem } from "@/components/EcosystemCard";
import { hasFeature, FEATURE_KEYS } from "@/lib/entitlements";
import type { MyAccess } from "@/lib/entitlements.functions";
import speak2coLogo from "@/assets/speak2co-logo.asset.json";
import speak2hireLogo from "@/assets/speak2hire.asset.json";
import speak2travelLogo from "@/assets/speak2travel.asset.json";
import speak2fluencyLogo from "@/assets/speak2fluency.png.asset.json";
import giseleAiLogo from "@/assets/gisele-ai-art.png.asset.json";
import founderPhoto from "@/assets/gisele-moraes.jpeg.asset.json";

type Access = MyAccess | undefined;

const gate = (access: Access, feature: string) =>
  hasFeature(access, feature) ? ("available" as const) : ("locked" as const);

export type HubSectionData = {
  id: string;
  titleEn: string;
  titlePt: string;
  compact?: boolean;
  items: EcosystemItem[];
};

/**
 * Estrutura modular da Home. Para adicionar um novo produto ou recurso,
 * basta incluir um item na categoria correspondente.
 */
export function buildHomeSections(access: Access): HubSectionData[] {
  return [
    {
      id: "courses",
      titleEn: "English Courses",
      titlePt: "Cursos de inglês",
      items: [
        {
          id: "beginner",
          titleEn: "Beginner English Course",
          titlePt: "Curso iniciante (A1–A2)",
          description: "20 lições com vocabulário, gramática, diálogos e AI Pronunciation.",
          icon: BookOpen,
          to: "/curso-beginner",
          status: gate(access, FEATURE_KEYS.coursesBeginner),
          plans: ["Essential", "Premium", "Signature"],
        },
        {
          id: "intermediate",
          titleEn: "Intermediate English Course",
          titlePt: "Curso intermediário (B1)",
          description: "20 lições para desenvolver fluência, com avaliação final e certificado.",
          icon: BookOpen,
          to: "/curso-intermediate",
          status: gate(access, FEATURE_KEYS.coursesIntermediate),
          plans: ["Essential", "Premium", "Signature"],
        },
        {
          id: "upper",
          titleEn: "Upper Intermediate English Course",
          titlePt: "Curso avançado intermediário (B2)",
          description: "Comunicação profissional e situações complexas. Em breve na plataforma.",
          icon: GraduationCap,
          status: "soon",
          plans: ["Premium", "Signature"],
        },
      ],
    },
    {
      id: "product-lines",
      titleEn: "Product Lines",
      titlePt: "Linhas de produto",
      items: [
        {
          id: "hire",
          titleEn: "Speak2Hire",
          titlePt: "Inglês para entrevistas",
          description: "Simulador de entrevistas com IA, frameworks STAR e feedback de fala.",
          icon: Briefcase,
          imageUrl: speak2hireLogo.url,
          to: "/speak2hire",
          status: gate(access, FEATURE_KEYS.productLineHire),
          plans: ["Premium", "Signature"],
        },
        {
          id: "travel",
          titleEn: "Speak2Travel",
          titlePt: "Inglês para viagens",
          description: "Aeroporto, hotel, restaurante e Trip Planner com pronúncia da IA.",
          icon: Plane,
          imageUrl: speak2travelLogo.url,
          to: "/speak2travel",
          status: gate(access, FEATURE_KEYS.productLineTravel),
          plans: ["Premium", "Signature"],
        },
        {
          id: "fluency",
          titleEn: "Speak2Fluency",
          titlePt: "Fluência plena no dia a dia",
          description:
            "8 módulos para destravar a fala espontânea, com rotina diária de 25 minutos e feedback da IA.",
          icon: Sparkles,
          imageUrl: speak2fluencyLogo.url,
          to: "/speak2fluency",
          status: gate(access, FEATURE_KEYS.productLineFluency),
          plans: ["Premium", "Signature"],
        },
      ],
    },
    {
      id: "ai",
      titleEn: "AI Resources",
      titlePt: "Recursos de inteligência artificial",
      items: [
        {
          id: "gisele",
          titleEn: "GiseleAI by Speak2Co",
          titlePt: "Sua mentora de inglês com IA",
          description:
            "Your Personal English Mentor powered by AI: mentoria contínua, próximos passos e revisão espaçada.",
          icon: Bot,
          imageUrl: giseleAiLogo.url,
          to: "/gisele",
          status: gate(access, FEATURE_KEYS.giseleAi),
          plans: ["Signature"],
        },
        {
          id: "ai-teacher",
          titleEn: "AI Teacher",
          titlePt: "Professor de IA",
          description: "Converse em inglês 24h e receba correções de gramática e pronúncia.",
          icon: MessageSquare,
          to: "/professor",
          status: gate(access, FEATURE_KEYS.aiTeacher),
          plans: ["Premium", "Signature"],
        },
        {
          id: "ai-pron",
          titleEn: "AI Pronunciation",
          titlePt: "Pronúncia com IA",
          description:
            "Grave sua voz e receba feedback de pronunciation, stress, intonation e fluency.",
          icon: Mic,
          to: "/speak2travel/material/$resourceId",
          params: { resourceId: "pronunciation-lab" },
          status: gate(access, FEATURE_KEYS.pronunciationChecker),
          plans: ["Essential", "Premium", "Signature"],
        },
      ],
    },
    {
      id: "tools",
      titleEn: "Learning Tools",
      titlePt: "Ferramentas de aprendizagem",
      compact: true,
      items: [
        {
          id: "vocabulary",
          titleEn: "Vocabulary with IPA",
          titlePt: "Vocabulário com IPA",
          description: "Listas temáticas com transcrição fonética e áudio nativo.",
          icon: SpellCheck,
          to: "/speak2travel/material/$resourceId",
          params: { resourceId: "travel-vocabulary" },
          status: gate(access, FEATURE_KEYS.productLineTravel),
          plans: ["Premium", "Signature"],
        },
        {
          id: "listening",
          titleEn: "Listening Practice",
          titlePt: "Prática de escuta",
          description: "Treine compreensão com áudios de situações reais.",
          icon: Headphones,
          to: "/speak2travel/material/$resourceId",
          params: { resourceId: "survival-english" },
          status: gate(access, FEATURE_KEYS.productLineTravel),
          plans: ["Premium", "Signature"],
        },
        {
          id: "speaking",
          titleEn: "Speaking Practice",
          titlePt: "Prática de fala",
          description: "Fale, grave e compare com a pronúncia da IA.",
          icon: Mic,
          to: "/speak2travel/material/$resourceId",
          params: { resourceId: "pronunciation-lab" },
          status: gate(access, FEATURE_KEYS.pronunciationChecker),
          plans: ["Essential", "Premium", "Signature"],
        },
        {
          id: "grammar",
          titleEn: "Grammar",
          titlePt: "Gramática",
          description: "Explicações objetivas e exercícios guiados por nível.",
          icon: BookMarked,
          to: "/curso-beginner",
          status: gate(access, FEATURE_KEYS.coursesBeginner),
          plans: ["Essential", "Premium", "Signature"],
        },
        {
          id: "reading",
          titleEn: "Reading",
          titlePt: "Leitura",
          description: "Textos curtos com vocabulário guiado. Em breve.",
          icon: BookOpen,
          status: "soon",
          plans: ["Essential", "Premium", "Signature"],
        },
        {
          id: "writing",
          titleEn: "Writing",
          titlePt: "Escrita",
          description: "Produza textos e receba correção da IA. Em breve.",
          icon: PenLine,
          status: "soon",
          plans: ["Premium", "Signature"],
        },
        {
          id: "flashcards",
          titleEn: "Flashcards",
          titlePt: "Cartões de memorização",
          description: "Revisão espaçada do seu vocabulário. Em breve.",
          icon: Layers,
          status: "soon",
          plans: ["Essential", "Premium", "Signature"],
        },
        {
          id: "progress",
          titleEn: "Progress Tracking",
          titlePt: "Painel de evolução",
          description: "Acompanhe lições, exercícios e evolução semanal.",
          icon: LineChart,
          to: "/meu-plano",
          status: "available",
        },
        {
          id: "achievements",
          titleEn: "Achievements",
          titlePt: "Conquistas e ranking",
          description: "Veja sua posição entre os alunos da Speak2Co.",
          icon: Trophy,
          to: "/ranking",
          status: "available",
        },
        {
          id: "certificates",
          titleEn: "Certificates",
          titlePt: "Certificados",
          description: "Baixe seus certificados oficiais em PDF.",
          icon: Award,
          imageUrl: speak2coLogo.url,
          to: "/certificados",
          status: gate(access, FEATURE_KEYS.cefrCertificate),
          plans: ["Essential", "Premium", "Signature"],
        },
        {
          id: "study-path",
          titleEn: "Study Path",
          titlePt: "Plano de estudos",
          description: "Sua trilha personalizada semana a semana.",
          icon: Compass,
          to: "/meu-plano",
          status: "available",
        },
        {
          id: "placement",
          titleEn: "Study Goals",
          titlePt: "Teste de nível e metas",
          description: "Descubra seu nível CEFR e defina seu objetivo.",
          icon: Target,
          to: "/teste-de-nivel",
          status: gate(access, FEATURE_KEYS.placementTest),
          plans: ["Essential", "Premium", "Signature"],
        },
        {
          id: "real-life",
          titleEn: "Real-life English",
          titlePt: "Inglês do dia a dia",
          description: "Situações reais: aeroporto, hotel, reuniões e mais.",
          icon: Globe,
          to: "/speak2travel",
          status: gate(access, FEATURE_KEYS.productLineTravel),
          plans: ["Premium", "Signature"],
        },
        {
          id: "milestones",
          titleEn: "Milestones",
          titlePt: "Marcos de evolução",
          description: "Conquistas previstas na sua trilha de estudos.",
          icon: Flag,
          to: "/meu-plano",
          status: gate(access, FEATURE_KEYS.studyPlanFull),
          plans: ["Essential", "Premium", "Signature"],
        },
      ],
    },
    {
      id: "support",
      titleEn: "Support & Community",
      titlePt: "Suporte e comunidade",
      items: [
        {
          id: "founder",
          titleEn: "Talk to the Founder",
          titlePt: "Founder & English Mentor",
          description:
            "Envie dúvidas, sugestões, feedback e ideias direto para Gisele Moraes. Respostas rápidas por IA e retorno pessoal quando necessário.",
          icon: Mail,
          imageUrl: founderPhoto.url,
          to: "/central-de-mensagens",
          status: "available",
        },
        {
          id: "help",
          titleEn: "Help Center",
          titlePt: "Central de ajuda",
          description: "Guias de uso da plataforma e suporte técnico. Em breve.",
          icon: LifeBuoy,
          status: "soon",
        },
        {
          id: "faq",
          titleEn: "FAQ",
          titlePt: "Perguntas frequentes",
          description: "Respostas rápidas sobre planos, cursos e certificados. Em breve.",
          icon: HelpCircle,
          status: "soon",
        },
        {
          id: "community",
          titleEn: "Community",
          titlePt: "Comunidade de alunos",
          description: "Pratique com outros alunos em desafios e encontros. Em breve.",
          icon: Users,
          status: "soon",
        },
      ],
    },
  ];
}
