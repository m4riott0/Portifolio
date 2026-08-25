"use client";
import { motionVar } from "@/lib/motion";
import { cn } from "@/lib/utils";

import { HeroTexts } from "@/types/texts";
import { downloadFile } from "@/utils/downloadFile";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { ShinyButton } from "../shiny-button";
import { Button } from "../ui/button";

interface Props {
  texts: HeroTexts;
}

export const Hero = ({ texts }: Props) => {
  const fullTitle = texts.title.map((text) => text.content).join(" ");
  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {
    setTypedTitle("");
    let characterIndex = 0;
    let isDeleting = false;
    let timeoutId: number;

    const typeTitle = () => {
      if (isDeleting) {
        characterIndex -= 1;
      } else {
        characterIndex += 1;
      }

      setTypedTitle(fullTitle.slice(0, characterIndex));

      if (!isDeleting && characterIndex >= fullTitle.length) {
        isDeleting = true;
        timeoutId = window.setTimeout(typeTitle, 1400);
        return;
      }

      if (isDeleting && characterIndex <= 0) {
        isDeleting = false;
        timeoutId = window.setTimeout(typeTitle, 500);
        return;
      }

      timeoutId = window.setTimeout(typeTitle, isDeleting ? 45 : 80);
    };

    timeoutId = window.setTimeout(typeTitle, 80);

    return () => window.clearTimeout(timeoutId);
  }, [fullTitle]);

  return (
    <section
      id="hero"
      className="flex flex-col justify-center [&>*]:z-10"
    >
      <div className="flex gap-4 items-start mx-4 md:ml-[10%] md:mr-0 mt-6">
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-black-blue" />
          <div className="w-1 sm:h-64 h-20 violet-gradient" />
        </div>

        <div className="text-white flex flex-col gap-2">
          <motion.span
            className="text-4xl max-md:text-3xl max-sm:text-xl"
            variants={motionVar}
            initial={"initial"}
            viewport={{
              once: true,
            }}
            whileInView={"fade-in"}
            transition={{
              duration: 0.5,
            }}
          >
            {texts.greetings}
            <span className="text-black-blue ml-2 font-bold">Enzo Mariotto</span>
          </motion.span>
          <motion.h1
            className="flex flex-wrap text-6xl font-bold z-10 max-md:text-5xl max-sm:text-3xl"
            variants={motionVar}
            initial={"initial"}
            viewport={{
              once: true,
            }}
            whileInView={"fade-in"}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
            aria-label={fullTitle}
          >
            {texts.title.map((text, index) => {
              const titleStart = texts.title
                .slice(0, index)
                .reduce((total, item) => total + item.content.length + 1, 0);
              const visibleText = typedTitle.slice(
                titleStart,
                titleStart + text.content.length
              );

              return (
                <span
                  key={index}
                  className={cn("mr-4", text.emphasis && "text-light-blue")}
                >
                  {visibleText}
                </span>
              );
            })}
            <span className="text-light-blue animate-pulse" aria-hidden="true">
              |
            </span>
          </motion.h1>
          <motion.span
            className="z-10 max-w-3xl text-base leading-relaxed text-white/70 max-md:text-sm max-sm:text-xs"
            variants={motionVar}
            initial="initial"
            viewport={{
              once: true,
            }}
            whileInView="fade-in"
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
          >
            {texts.subtitle}
          </motion.span>
          <div className="flex items-center gap-4 mt-4">
            <Button
              onClick={() => {
                downloadFile("/assets/cv.pdf", "EnzoMariottoCV.pdf");
              }}
              data-tooltip-id="my-tooltip"
              data-tooltip-content="CV"
              data-tooltip-place="bottom"
              className="text-sm h-10 px-2 md:px-6 md:h-12 md:text-base w-fit border-light-blue"
            >
              {texts.cvButton}
            </Button>
            <Link
              href="https://www.linkedin.com/in/enzo-mariotto/"
              target="__blank"
              className="rounded-full"
              rel="external"
            >
              <ShinyButton
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Linkedin"
                data-tooltip-place="bottom"
                className="h-10 w-10 md:h-12 md:w-12 text-2xl rounded-full"
              >
                <FaLinkedinIn />
              </ShinyButton>
            </Link>
            <Link
              href="https://github.com/m4riott0"
              target="__blank"
              className="rounded-full"
              rel="external"
            >
              <ShinyButton
                className="h-10 w-10 md:h-12 md:w-12 text-2xl rounded-full"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Github"
                data-tooltip-place="bottom"
              >
                <TbBrandGithubFilled />
              </ShinyButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
