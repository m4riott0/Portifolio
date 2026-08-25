"use client";

import { Project } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Tilt } from "react-tilt";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  projects: Project[];
}

export function SliderProjects({ projects }: Props) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      className="w-full"
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index} className="h-auto">
          <div className="w-full px-2">
            <Tilt
              options={{
                max: 30,
                scale: 1,
                speed: 450,
              }}
              className="group relative mx-auto flex h-[32rem] w-full max-w-80 origin-center flex-col gap-4 rounded-md border border-white bg-dark-gray p-4 transition-all"
            >
              <div className="relative">
                <Image
                  height={project.height ?? 400}
                  width={project.width ?? 400}
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full rounded-md object-cover"
                />
                <div className="flex gap-4  absolute top-2 right-2 scale-95 transition-all hover:scale-100 hover:brightness-110">
                  <Link
                    href={project.github}
                    className="text-white"
                    target="_blank"
                  >
                    <FaGithub
                      size={40}
                      className="bg-dark-gray p-1.5 rounded-full"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2 transition-all [&>*]:z-10">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm max-w-60">{project.description}</p>
                <div className="text-sm space-x-2 flex flex-wrap text-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      style={{
                        color: tag.color,
                      }}
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
