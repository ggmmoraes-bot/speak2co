import {
  Award,
  BookOpen,
  Bot,
  Briefcase,
  Compass,
  CreditCard,
  Flag,
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
  Users,
  BookMarked,
  UserRound,
} from "lucide-react";
import type { EcosystemItem } from "@/components/EcosystemCard";
import { hasFeature, FEATURE_KEYS } from "@/lib/entitlements";
import type { MyAccess } from "@/lib/entitlements.functions";
import { BEGINNER_UNITS_TOTAL } from "@/lib/beginner-course";
import { INTERMEDIATE_UNITS_TOTAL } from "@/lib/intermediate-course";
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
          description: `${BEGINNER_UNITS_TOTAL} unidades com vocabulário, gramática, diálogos e AI Pronunciation.`,
          icon: BookOpen,
          to: "/curso-beginner",
          status: gate(access, FEATURE_KEYS.coursesBeginner),
          plans: ["Essential", "Premium", "Signature"],
        },
        {
          id: "intermediate",
          titleEn: "Intermediate English Course",
          titlePt: "Curso intermediário (B1)",
          description: `${INTERMEDIATE_UNITS_TOTAL} unidades para desenvolver fluência, com avaliação final e certificado.`,
          icon: BookOpen,
          to: "/curso-intermediate",
          status: gate(access, FEATURE_KEYS.coursesIntermediate),
          plans: ["Essential", "Premium", "Signature"],
        },
        {
          id: "upper",
          titleEn: "Upper Intermediate English Course",
          titlePt: "Curso avançado intermediário (B2)",
          description:
            "50 unidades B2: comunicação profissional, argumentação e situações complexas.",
          icon: GraduationCap,
          to: "/curso-upper",
          status: gate(access, FEATURE_KEYS.coursesUpperIntermediate),
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
          titlePt: "AI Teacher",
          description:
            "Free e Essential: 20 minutos por dia · Premium e Signature: uso ilimitado.",
          icon: MessageSquare,
          to: "/professor",
          status: gate(access, FEATURE_KEYS.aiTeacher),
          plans: ["Free", "Essential", "Premium", "Signature"],
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
          description:
            "Banco geral de vocabulário do cotidiano com IPA, tradução, definição e áudio.",
          icon: SpellCheck,
          to: "/vocabulario-ipa",
          status: "available" as const,
          plans: ["Free", "Essential", "Premium", "Signature"],
        },
        {
          id: "listening",
          titleEn: "Listening Practice",
          titlePt: "Prática de escuta",
          description:
            "Available from Essential · Biblioteca geral de listening com duas vozes, transcrição, vocabulário e perguntas por nível.",
          icon: Headphones,
          to: "/listening",
          status: gate(access, FEATURE_KEYS.learningTools),
          plans: ["Essential", "Premium", "Signature"],
        },
        {
          id: "speaking",
          titleEn: "Speaking Practice",
          titlePt: "Prática de fala",
          description:
            "Available from Essential · Cenários do dia a dia com pronúncia da IA e feedback da sua gravação.",
          icon: Mic,
          to: "/speaking",
          status: gate(access, FEATURE_KEYS.learningTools),
          plans: ["Essential", "Premium", "Signature"],
        },
        {
          id: "grammar",
          titleEn: "Grammar",
          titlePt: "Gramática",
          description:
            "Available from Essential · Gramática geral do Beginner ao Advanced: explicação, exemplos e exercícios.",
          icon: BookMarked,
          to: "/gramatica",
          status: gate(access, FEATURE_KEYS.learningTools),
          plans: ["Essential", "Premium", "Signature"],
        },
        {
          id: "reading",
          titleEn: "Reading",
          titlePt: "Leitura",
          description:
            "Available from Essential · Textos progressivos com vocabulário guiado e perguntas de compreensão.",
          icon: BookOpen,
          to: "/reading",
          status: gate(access, FEATURE_KEYS.learningTools),
          plans: ["Essential", "Premium", "Signature"],
        },
        {
          id: "writing",
          titleEn: "Writing",
          titlePt: "Escrita",
          description:
            "Available from Essential · Produza textos por nível e receba correção detalhada da IA.",
          icon: PenLine,
          to: "/writing",
          status: gate(access, FEATURE_KEYS.learningTools),
          plans: ["Essential", "Premium", "Signature"],
        },
        {
          id: "flashcards",
          titleEn: "Flashcards",
          titlePt: "Cartões de memorização",
          description:
            "Available from Essential · Revisão espaçada do vocabulário com Again, Hard, Good e Easy.",
          icon: Layers,
          to: "/flashcards",
          status: gate(access, FEATURE_KEYS.learningTools),
          plans: ["Essential", "Premium", "Signature"],
        },
        {
          id: "progress",
          titleEn: "Progress Tracking",
          titlePt: "Painel de evolução",
          description: "Available on Free · Acompanhe lições, exercícios e evolução semanal.",
          icon: LineChart,
          to: "/meu-plano",
          status: "available",
          plans: ["Free", "Essential", "Premium", "Signature"],
        },
        {
          id: "certificates",
          titleEn: "Certificates",
          titlePt: "Certificados",
          description: "Available on Free · Baixe seus certificados oficiais em PDF.",
          icon: Award,
          imageUrl: speak2coLogo.url,
          to: "/certificados",
          status: "available",
          plans: ["Free", "Essential", "Premium", "Signature"],
        },
        {
          id: "study-path",
          titleEn: "Study Path",
          titlePt: "Plano de estudos",
          description: "Available on Free · Sua trilha personalizada semana a semana.",
          icon: Compass,
          to: "/meu-plano",
          status: "available",
          plans: ["Free", "Essential", "Premium", "Signature"],
        },
        {
          id: "placement",
          titleEn: "Study Goals",
          titlePt: "Teste de nível e metas",
          description: "Available on Free · Descubra seu nível CEFR e defina seu objetivo.",
          icon: Target,
          to: "/teste-de-nivel",
          status: "available",
          plans: ["Free", "Essential", "Premium", "Signature"],
        },
        {
          id: "milestones",
          titleEn: "Milestones",
          titlePt: "Marcos de evolução",
          description: "Available on Free · Conquistas previstas na sua trilha de estudos.",
          icon: Flag,
          to: "/meu-plano",
          status: "available",
          plans: ["Free", "Essential", "Premium", "Signature"],
        },
      ],
    },
    {
      id: "support",
      titleEn: "Support & Community",
      titlePt: "Suporte e comunidade",
      items: [
        {
          id: "my-profile",
          titleEn: "My Profile",
          titlePt: "Meu perfil",
          description:
            "Atualize seus dados, nível CEFR, objetivo de estudo e preferências da sua conta.",
          icon: UserRound,
          to: "/perfil",
          status: "available",
        },
        {
          id: "my-subscription",
          titleEn: "My Subscription",
          titlePt: "Minha assinatura",
          description:
            "Veja seu plano, condições da contratação anual, termos, renovação, upgrade e histórico.",
          icon: CreditCard,
          to: "/assinatura",
          status: "available",
        },
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
          description:
            "Available on Free · Guia de uso da plataforma e suporte técnico passo a passo.",
          icon: LifeBuoy,
          to: "/ajuda",
          status: "available",
          plans: ["Free", "Essential", "Premium", "Signature"],
        },
        {
          id: "faq",
          titleEn: "FAQ",
          titlePt: "Perguntas frequentes",
          description:
            "Available on Free · Respostas rápidas sobre planos, cursos, certificados, IA e product lines.",
          icon: HelpCircle,
          to: "/faq",
          status: "available",
          plans: ["Free", "Essential", "Premium", "Signature"],
        },
        {
          id: "community",
          titleEn: "Community",
          titlePt: "Comunidade de alunos",
          description:
            "Available on Free · Challenges, compartilhamento de conquistas e encontros de prática.",
          icon: Users,
          to: "/comunidade",
          status: "available",
          plans: ["Free", "Essential", "Premium", "Signature"],
        },
      ],
    },
  ];
}
