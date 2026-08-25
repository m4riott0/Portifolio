
"use client";

import { formatDate } from "@/lib/date";
import { Experience } from "@/types/experience";
import { WorkExperienceTexts } from "@/types/texts";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Props {
  texts: WorkExperienceTexts;
}

export const Experiences = ({ texts }: Props) => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const dialogTitleRef = useRef<HTMLHeadingElement>(null);
  const isPortuguese = texts.title.toLowerCase().includes("experiência");

  useEffect(() => {
    if (!selectedExperience) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedExperience(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    dialogTitleRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [selectedExperience]);

  const formatPeriod = (experience: Experience) => {
    const end = experience.to
      ? formatDate(experience.to, "MMM yyyy")
      : isPortuguese
        ? "Atual"
        : "Present";

    return `${formatDate(experience.from, "MMM yyyy")} - ${end}`;
  };

  return (
    <section
      id="work-exp"
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden px-4 py-24 text-white [&>*]:z-10 sm:px-8"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          className="mb-16 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-light-blue">
            <span className="h-px w-10 bg-light-blue" />
            {isPortuguese ? "Trajetória" : "Career path"}
            <span className="h-px w-10 bg-light-blue" />
          </span>
          <h2 className="text-center text-3xl font-bold md:text-5xl">{texts.title}</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent md:left-1/2 md:-translate-x-1/2" />
          <div className="flex flex-col gap-10 md:gap-16">
            {texts.experiences.map((experience, index) => {
              const isRight = index % 2 === 1;

              return (
                <motion.div
                  key={`${experience.companyName}-${experience.from}`}
                  className={`group relative flex w-full pl-12 md:pl-0 ${isRight ? "md:justify-end" : "md:justify-start"}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.08 }}
                >
                  <span className="absolute left-0 top-7 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-light-blue bg-dark-gray shadow-[0_0_18px_rgba(36,175,193,0.35)] transition-transform duration-300 md:left-1/2 md:group-hover:scale-110" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-light-blue shadow-[0_0_10px_#24afc1]" />
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedExperience(experience)}
                    className="group relative w-full max-w-md overflow-hidden rounded-md border border-white/15 bg-dark-gray/80 p-5 text-left transition duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-light-blue before:to-transparent hover:-translate-y-1 hover:border-light-blue/70 hover:bg-dark-gray hover:shadow-[0_18px_45px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-light-blue focus:ring-offset-2 focus:ring-offset-dark-gray"
                    aria-label={`${experience.name} - ${experience.companyName}`}
                  >
                    <span className="mb-4 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-light-blue">
                      <span>{formatPeriod(experience)}</span>
                      {!experience.to && (
                        <span className="rounded-full border border-light-blue/40 px-2 py-1 text-[10px] tracking-[0.15em]">
                          {isPortuguese ? "Atual" : "Current"}
                        </span>
                      )}
                    </span>
                    <span className="flex items-start justify-between gap-4">
                      <span className="block text-xl font-bold transition-colors group-hover:text-light-blue">
                        {experience.name}
                      </span>
                      <ArrowUpRight className="mt-1 text-white/35 transition-colors group-hover:text-light-blue" size={18} />
                    </span>
                    <span className="mt-1 block text-white/65">{experience.companyName}</span>
                    <span className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-white/55">
                      {experience.tags.map((tag) => (
                        <span key={tag.name} style={{ color: tag.color }}>
                          #{tag.name}
                        </span>
                      ))}
                    </span>
                    <span className="mt-5 block text-sm text-white/45 transition-colors group-hover:text-white/75">
                      {isPortuguese ? "Clique para ver detalhes" : "Click to view details"}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedExperience(null);
            }}
            role="presentation"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="experience-dialog-title"
              aria-describedby="experience-dialog-description"
              className="relative max-h-[85dvh] w-full max-w-2xl overflow-y-auto rounded-md border border-light-blue/40 bg-dark-gray p-6 text-white shadow-2xl sm:p-8"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
            >
              <button
                type="button"
                onClick={() => setSelectedExperience(null)}
                className="absolute right-4 top-4 rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-light-blue"
                aria-label={isPortuguese ? "Fechar detalhes" : "Close details"}
              >
                <X size={20} />
              </button>
              <span className="text-sm uppercase tracking-[0.2em] text-light-blue">
                {formatPeriod(selectedExperience)}
              </span>
              <h3
                id="experience-dialog-title"
                ref={dialogTitleRef}
                tabIndex={-1}
                className="mt-3 pr-8 text-2xl font-bold outline-none sm:text-3xl"
              >
                {selectedExperience.name}
              </h3>
              <p className="mt-1 text-lg text-white/65">{selectedExperience.companyName}</p>
              <p id="experience-dialog-description" className="mt-7 leading-relaxed text-white/80">
                {selectedExperience.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {selectedExperience.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="rounded-full border border-white/15 px-3 py-1 text-sm"
                    style={{ color: tag.color }}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
