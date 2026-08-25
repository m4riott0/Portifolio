import {
  img_ai_procurement,
  img_next_barber,
  img_saas_starter,
} from "@/assets/images/projects";
import { ProjectsTexts } from "@/types/texts";
import { tags } from "../../tags";

export const projects: ProjectsTexts = {
  title: "Projects",
  projects: [
    {
      title: "SaaS Starter Template",
      description:
        "Starter template for SaaS built with Next.js 15, featuring Firebase authentication and payments integrated with Stripe and Mercado Pago.",
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
        "Fullstack application for barber shop management with appointment scheduling, built with Next.js, Prisma ORM, PostgreSQL and Auth.js.",
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
        "AI engine for corporate procurement decisions, exposed through a GraphQL API with asynchronous processing using NestJS, BullMQ, Redis, PostgreSQL and Google Gemini.",
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
