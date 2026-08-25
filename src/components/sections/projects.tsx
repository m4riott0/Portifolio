import { ProjectsTexts } from "@/types/texts";
import { SliderProjects } from "../slider-projects";
import { SectionHeading } from "./section-heading";

interface Props {
  projectText: ProjectsTexts;
}

export const Projects = ({ projectText }: Props) => {
  const isPortuguese = projectText.title.toLowerCase().includes("projeto");

  return (
    <section
      id="projects"
      className="h-dvh text-white py-24 flex flex-col justify-center gap-24 [&>*]:z-10"
    >
      <SectionHeading
        title={projectText.title}
        eyebrow={isPortuguese ? "Projetos em destaque" : "Selected work"}
      />
      <div className="w-full">
        <SliderProjects projects={projectText.projects} />
      </div>
    </section>
  );
};
