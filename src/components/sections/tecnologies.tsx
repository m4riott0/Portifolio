"use client";

import { tecnologies } from "@/config/constants";
import { TechnologiesTexts } from "@/types/texts";
import "swiper/css";
import "swiper/css/pagination";
import { A11y, Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SectionHeading } from "./section-heading";

interface Props {
  techTexts: TechnologiesTexts;
}

export const Tecnologies = ({ techTexts }: Props) => {
  return (
    <section
      id="tech"
      className="flex h-dvh flex-col justify-center gap-10 overflow-hidden py-24 text-white [&>*]:z-10"
    >
      <SectionHeading title={techTexts.title} eyebrow="Toolkit" />
      <div className="mx-auto flex w-[50rem] max-w-[90dvw] flex-col gap-4 text-center text-xs md:text-base">
        {techTexts.description.split("\n").map((text, index) => {
          const converted = text
            .split(" ")
            .map((word, index) => {
              if (techTexts.highlights.includes(word)) {
                return `<strong key={index} class="text-light-blue">
                    ${word}
                  </strong>`;
              }
              return word;
            })
            .join(" ");
          return (
            <span
              key={index}
              dangerouslySetInnerHTML={{
                __html: converted,
              }}
            ></span>
          );
        })}
      </div>
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-8">
        <Swiper
          modules={[A11y, Autoplay, Keyboard, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          speed={700}
          keyboard={{ enabled: true }}
          a11y={{
            prevSlideMessage: "Tecnologia anterior",
            nextSlideMessage: "Próxima tecnologia",
          }}
          grabCursor
          watchOverflow
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="!pb-12 [&_.swiper-pagination-bullet]:!bg-white/40 [&_.swiper-pagination-bullet-active]:!bg-light-blue"
        >
          {tecnologies.map((technology) => (
            <SwiperSlide key={technology.name}>
              <div className="group relative flex aspect-[1.15] flex-col items-center justify-center gap-5 overflow-hidden rounded-md border border-white/15 bg-dark-gray/80 px-4 py-6 text-white transition duration-300 before:absolute before:inset-x-0 before:bottom-0 before:h-1/2 before:bg-gradient-to-t before:from-light-blue/10 before:to-transparent hover:-translate-y-1 hover:border-light-blue/70 hover:bg-dark-gray hover:shadow-[0_16px_35px_rgba(0,0,0,0.25)]">
                <technology.icon className="relative z-10 text-7xl text-light-blue transition-transform duration-300 group-hover:scale-110" />
                <h3 className="relative z-10 text-center text-lg font-semibold transition-colors group-hover:text-light-blue">
                  {technology.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
