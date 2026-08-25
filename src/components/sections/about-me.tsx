import { img_avatar } from "@/assets/images";
import { AboutMeTexts } from "@/types/texts";
import Image from "next/image";
import { SectionHeading } from "./section-heading";

interface Props {
  texts: AboutMeTexts;
}

export const AboutMe = ({ texts }: Props) => {
  const isPortuguese = texts.title.toLowerCase().includes("sobre");

  return (
    <section
      id="about-me"
      className="relative flex flex-col md:flex-row gap-12 md:gap-20 px-8 md:px-16 lg:px-[12%] justify-center items-center text-white min-h-dvh py-20 [&>*]:z-10"
    >
      <div className="relative flex shrink-0 flex-col items-center gap-8">
        <div className="md:hidden">
          <SectionHeading title={texts.title} eyebrow={isPortuguese ? "Perfil" : "Profile"} />
        </div>
        <div className="absolute -inset-4 rounded-full border border-amber-300/15" />
        <div className="absolute -inset-4 rounded-full border-t border-amber-300/40 animate-[spin_10s_linear_infinite]" />
        <div className="relative">
          <Image
            src={img_avatar}
            height={280}
            width={280}
            className="rounded-full w-40 md:w-64 h-40 md:h-64 object-cover ring-1 ring-white/10"
            alt="Avatar"
          />
          <span className="absolute bottom-2 right-2 md:bottom-4 md:right-4 flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-amber-200">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-300" />
            </span>
            disponível
          </span>
        </div>
      </div>

      <div className="flex max-w-2xl flex-col items-center text-center md:items-start md:text-left">
        <div className="hidden md:block">
          <SectionHeading
            title={texts.title}
            eyebrow={isPortuguese ? "Perfil" : "Profile"}
            align="left"
          />
        </div>

        <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 md:text-base">
          {texts.introduction}
        </p>

        <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 md:text-base">
          {texts.description}
        </p>

        <div className="mt-8 w-full rounded-2xl border border-amber-300/15 bg-gradient-to-b from-white/[0.04] to-transparent overflow-hidden text-left backdrop-blur-sm">
          <div className="flex items-center gap-1.5 border-b border-white/5 bg-black/20 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-3 font-mono text-[10px] text-white/30">
              focus.ts
            </span>
          </div>
          <p className="p-5 text-sm leading-7 text-white/75 md:text-base">
            <span className="text-amber-300/70 font-mono text-xs mr-2">
              //
            </span>
            {texts.finalMessage}
          </p>
        </div>
      </div>
    </section>
  );
};