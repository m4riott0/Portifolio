import { Navbar } from "@/components/navbar";
import { AboutMe, Hero, Projects, Tecnologies } from "@/components/sections";
import { texts as textBases } from "@/config/constants";
import { cn } from "@/lib/utils";
import { Texts } from "@/types/texts";
import { LanguageSwitch } from "./language-switch";
import { ParticlesBG } from "./particles";
import { Contact } from "./sections/contact";
import { Experiences } from "./sections/experiences";

interface Props {
  texts?: Texts;
}

export const MainPage = ({ texts = textBases["pt-br"] }: Props) => {
  return (
    <main
      className={cn(
        "bg-dark-gray min-h-dvh bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]"
      )}
    >
      <Navbar text={texts.navbar} />
      <ParticlesBG />
      <Hero texts={texts.hero} />
      <AboutMe texts={texts.aboutMe} />
      <Experiences texts={texts.workExperience} />
      <Tecnologies techTexts={texts.technologies} />
      <Projects projectText={texts.projects} />
      <Contact texts={texts.contact} />
      <LanguageSwitch />
    </main>
  );
};
