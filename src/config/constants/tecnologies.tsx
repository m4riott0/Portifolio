import { Tecnology } from "@/types/tecnologies";
import { FaDatabase, FaNode, FaPython, FaReact } from "react-icons/fa";
import {
  SiDotnet,
  SiGraphql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";

export const tecnologies: Tecnology[] = [
  {
    name: "React.js",
    icon: FaReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "Typescript",
    icon: SiTypescript,
  },
  {
    name: "NodeJS",
    icon: FaNode,
  },
  {
    name: "PrismaORM",
    icon: SiPrisma,
  },
  {
    name: "Oracle",
    icon: FaDatabase,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "SqlServer",
    icon: FaDatabase,
  },
  {
    name: ".NET",
    icon: SiDotnet,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "NestJS",
    icon: SiNestjs,
  },
  {
    name: "Graphql",
    icon: SiGraphql,
  },
];
