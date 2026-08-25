import {
  img_ai_procurement,
  img_next_barber,
  img_saas_starter
} from "@/assets/images/projects";
import { ProjectsTexts } from "@/types/texts";
import { tags } from "../../tags";

export const projects: ProjectsTexts = {
  title: "Projetos",
  projects: [
    {
      title: "SaaS Starter Template",
      description:
        "Template inicial para SaaS feito com Next.js 15, com autenticação via Firebase e pagamentos integrados via Stripe e Mercado Pago.",
      tags: [
        tags["Next.js"],
        tags["Typescript"],
        tags["Firebase"],
        tags["Stripe"],
      ],
      image: img_saas_starter,
      github: "https://github.com/m4riott0/SaaS-Starter-Template",
    },
    {
      title: "Next Barber",
      description:
        "Aplicação fullstack para gestão de barbearias, com agendamento de horários, feita com Next.js, Prisma ORM, PostgreSQL e Auth.js.",
      tags: [
        tags["Next.js"],
        tags["Typescript"],
        tags["PrismaORM"],
        tags["PostgreSQL"],
      ],
      image: img_next_barber,
      github: "https://github.com/m4riott0/next-barber",
    },
    {
      title: "AI Procurement Engine",
      description:
        "Engine de IA para decisões de compras corporativas, exposta via API GraphQL, com processamento assíncrono usando NestJS, BullMQ, Redis, PostgreSQL e Google Gemini.",
      tags: [
        tags["NestJS"],
        tags["Typescript"],
        tags["PostgreSQL"],
        tags["Graphql"],
        tags["BullMQ"],
        tags["Redis"],
      ],
      image: img_ai_procurement,
      github: "https://github.com/m4riott0/ai-procurement-engine",
    },
  ],
};