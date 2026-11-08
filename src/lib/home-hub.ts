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
import speak2businessLogo from "@/assets/speak2business.png.asset.json";
import speak2kidsLogo from "@/assets/speak2kids.png.asset.json";
import giseleAiLogo from "@/assets/giseleai-brand.jpg.asset.json";
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
          plans: ["All Access"],
        },
        {
          id: "intermediate",
          titleEn: "Intermediate English Course",
          titlePt: "Curso intermediário (B1)",
          description: `${INTERMEDIATE_UNITS_TOTAL} unidades para desenvolver fluência, com avaliação final e certificado.`,
          icon: BookOpen,
          to: "/curso-intermediate",
          status: gate(access, FEATURE_KEYS.coursesIntermediate),
          plans: ["All Access"],
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
          plans: ["All Access"],
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
          plans: ["Speak2Hire"],
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
          plans: ["Speak2Travel"],
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
          plans: ["Speak2Fluency"],
        },
        {
          id: "business",
          titleEn: "Speak2Business",
          titlePt: "Inglês corporativo",
          description:
            "Reuniões, negociação, apresentações e liderança em inglês. Em breve na plataforma, como produto individual.",
          icon: Briefcase,
          imageUrl: speak2businessLogo.url,
          status: "soon" as const,
        },
        {
          id: "kids",
          titleEn: "Speak2Kids",
          titlePt: "Inglês para crianças",
          description:
            "Beginner Kids English (7–10 anos): 20 unidades lúdicas com jogos, músicas e stickers. Em breve como produto individual.",
          icon: Sparkles,
          imageUrl: speak2kidsLogo.url,
          // Não vendável ainda: só quem tem o recurso (admin) abre a prévia.
          to: "/speak2kids",
          status: hasFeature(access, FEATURE_KEYS.productLineKids) ? ("available" as const) : ("soon" as const),
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
          plans: ["All Access"],
        },
        {
          id: "ai-teacher",
          titleEn: "AI Teacher",
          titlePt: "AI Teacher",
          description:
            "20 minutos por dia em todos os acessos, do cadastro gratuito ao All Access.",
          icon: MessageSquare,
          to: "/professor",
          status: gate(access, FEATURE_KEYS.aiTeacher),
          plans: ["Cadastro Gratuito", "All Access"],
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
          plans: ["All Access"],
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
          plans: ["Cadastro Gratuito", "All Access"],
        },
        {
          id: "listening",
          titleEn: "Listening Practice",
          titlePt: "Prática de escuta",
          description:
            "All Access · Biblioteca geral de listening com duas vozes, transcrição, vocabulário e perguntas por nível.",
          icon: Headphones,
          to: "/listening",
          status: gate(access, FEATURE_KEYS.learningTools),
          plans: ["All Access"],
        },
        {
          id: "speaking",
          titleEn: "Speaking Practice",
          titlePt: "Prática de fala",
          description:
            "All Access · Cenários do dia a dia com pronúncia da IA e feedback da sua gravação.",
          icon: Mic,
          to: "/speaking",
          status: gate(access, FEATURE_KEYS.learningTools),
          plans: ["All Access"],
        },
        {
          id: "grammar",
          titleEn: "Grammar",
          titlePt: "Gramática",
          description:
            "All Access · Gramática geral do Beginner ao Advanced: explicação, exemplos e exercícios.",
          icon: BookMarked,
          to: "/gramatica",
          status: gate(access, FEATURE_KEYS.learningTools),
          plans: ["All Access"],
        },
        {
          id: "reading",
          titleEn: "Reading",
          titlePt: "Leitura",
          description:
            "All Access · Textos progressivos com vocabulário guiado e perguntas de compreensão.",
          icon: BookOpen,
          to: "/reading",
          status: gate(access, FEATURE_KEYS.learningTools),
          plans: ["All Access"],
        },
        {
          id: "writing",
          titleEn: "Writing",
          titlePt: "Escrita",
          description:
            "All Access · Produza textos por nível e receba correção detalhada da IA.",
          icon: PenLine,
          to: "/writing",
          status: gate(access, FEATURE_KEYS.learningTools),
          plans: ["All Access"],
        },
        {
          id: "flashcards",
          titleEn: "Flashcards",
          titlePt: "Cartões de memorização",
          description:
            "All Access · Revisão espaçada do vocabulário com Again, Hard, Good e Easy.",
          icon: Layers,
          to: "/flashcards",
          status: gate(access, FEATURE_KEYS.learningTools),
          plans: ["All Access"],
        },
        {
          id: "progress",
          titleEn: "Progress Tracking",
          titlePt: "Painel de evolução",
          description: "Cadastro gratuito · Acompanhe lições, exercícios e evolução semanal.",
          icon: LineChart,
          to: "/meu-plano",
          status: "available",
          plans: ["Cadastro Gratuito", "All Access"],
        },
        {
          id: "certificates",
          titleEn: "Certificates",
          titlePt: "Certificados",
          description: "Cadastro gratuito · Baixe seus certificados oficiais em PDF.",
          icon: Award,
          imageUrl: speak2coLogo.url,
          to: "/certificados",
          status: "available",
          plans: ["Cadastro Gratuito", "All Access"],
        },
      ],
    },
    {
      id: "journey",
      titleEn: "Journey",
      titlePt: "Sua jornada de aprendizagem",
      items: [
        {
          id: "study-path",
          titleEn: "Study Path",
          titlePt: "Plano de estudos",
          description: "Veja e acompanhe sua trilha personalizada de aprendizagem.",
          icon: Compass,
          to: "/meu-plano",
          status: "available",
          plans: ["Cadastro Gratuito", "All Access"],
        },
        {
          id: "placement",
          titleEn: "Study Goals",
          titlePt: "Metas de estudo",
          description: "Defina seus objetivos de inglês e acompanhe seu progresso.",
          icon: Target,
          to: "/teste-de-nivel",
          status: "available",
          plans: ["Cadastro Gratuito", "All Access"],
        },
        {
          id: "milestones",
          titleEn: "Milestones",
          titlePt: "Marcos de evolução",
          description: "Visualize suas conquistas e os próximos marcos da sua jornada.",
          icon: Flag,
          to: "/meu-plano",
          status: "available",
          plans: ["Cadastro Gratuito", "All Access"],
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
          titleEn: "My Access",
          titlePt: "Meu acesso",
          description:
            "Veja seus produtos com acesso vitalício e o histórico dos seus pagamentos.",
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
            "Cadastro gratuito · Guia de uso da plataforma e suporte técnico passo a passo.",
          icon: LifeBuoy,
          to: "/ajuda",
          status: "available",
          plans: ["Cadastro Gratuito", "All Access"],
        },
        {
          id: "faq",
          titleEn: "FAQ",
          titlePt: "Perguntas frequentes",
          description:
            "Cadastro gratuito · Respostas rápidas sobre planos, cursos, certificados, IA e product lines.",
          icon: HelpCircle,
          to: "/faq",
          status: "available",
          plans: ["Cadastro Gratuito", "All Access"],
        },
        {
          id: "community",
          titleEn: "Community",
          titlePt: "Comunidade de alunos",
          description:
            "Cadastro gratuito · Challenges, compartilhamento de conquistas e encontros de prática.",
          icon: Users,
          to: "/comunidade",
          status: "available",
          plans: ["Cadastro Gratuito", "All Access"],
        },
      ],
    },
  ];
}
