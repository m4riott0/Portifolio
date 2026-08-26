import { WorkExperienceTexts } from "@/types/texts";

import { tags } from "../../tags";

export const workExperience: WorkExperienceTexts = {
  title: "Professional Experience",

  experiences: [
    {
      name: "Full Stack Developer",
      companyName: "Bensaúde - Health Insurance",
      description:
        "I work on the development and evolution of applications used in a large-scale corporate environment, primarily working with .NET, ASP.NET, and React. I am responsible for developing new features, performing corrective and evolutionary maintenance, integrating APIs, troubleshooting issues, and implementing improvements across the company's main products, including portals and applications designed for beneficiaries and clients. Working in a production environment has strengthened my ability to write consistent code, analyze problems thoroughly, make technical decisions, and deliver reliable solutions, with a strong focus on quality, performance, stability, and business impact.",

      from: "2025-06",
      to: undefined,
      tags: [
        tags[".NET"],
        tags["ASP.NET"],
        tags["React.js"],
        tags["Typescript"],
        tags["oracle"],
        tags["SqlServer"],
      ],
      icon: ".NET",
    },

    {
      name: "Full Stack Developer",
      companyName: "Freelance",
      description:
        "Worked as a Full Stack Developer on projects of different sizes and requirements, ranging from landing pages and corporate websites to complete web applications. Responsible for the entire development lifecycle, including requirements gathering, architecture, APIs, databases, integrations, deployment, and support. My freelance experience strengthened my autonomy, business perspective, client communication, and ability to transform real-world requirements into scalable solutions, while also developing strong problem-solving and technical decision-making skills.",

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