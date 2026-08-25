import { WorkExperienceTexts } from "@/types/texts";
import { tags } from "../../tags";

export const workExperience: WorkExperienceTexts = {
  title: "Experiência Profissional",
  experiences: [
    {
      name: "Desenvolvedor Full Stack",
      companyName: "Bensaúde - Plano de Saúde",
      description:
        "Atuo no desenvolvimento e evolução de aplicações utilizadas em um ambiente corporativo de grande porte, trabalhando principalmente com .NET, ASP.NET e React. Sou responsável pela criação de novas funcionalidades, manutenção evolutiva e corretiva, integração de APIs, correção de problemas e implementação de melhorias nos principais produtos da empresa, incluindo portais e aplicações voltados aos beneficiários e clientes. A experiência em um ambiente de produção fortaleceu minha capacidade de escrever código consistente, analisar problemas de forma criteriosa, tomar decisões técnicas e entregar soluções confiáveis, mantendo foco em qualidade, performance, estabilidade e impacto para o negócio.",
      from: "2025-06",
      to: undefined,
      tags: [
        tags[".NET"],
        tags["ASP.NET"],
        tags["React.js"],
        tags["Typescript"],
        tags["oracle"],
        tags["SqlServer"]
      ],
      icon: ".NET",
    },
    {
      name: "Desenvolvedor Full Stack",
      companyName: "Autônomo",
      description:
        "Atuação como Desenvolvedor Full Stack em projetos de diferentes portes e necessidades, desde landing pages e sites institucionais até sistemas web completos. Responsável por todo o ciclo de desenvolvimento: levantamento de requisitos, arquitetura, APIs, bancos de dados, integrações, implantação e suporte. A experiência como freelancer fortaleceu minha autonomia, visão de negócio, comunicação com clientes e capacidade de transformar necessidades reais em soluções escaláveis, além de desenvolver uma forte habilidade para resolução de problemas e tomada de decisões técnicas.",
      from: "2022-02",
      to: "2025-06",
      tags: [
        tags["React.js"],
        tags["Next.js"],
        tags["Typescript"],
        tags["PostgreSQL"],
        tags["PrismaORM"],
        tags[".NET"],
        tags["Python"],
      ],
      icon: "Next.js",
    },
  ],
};
