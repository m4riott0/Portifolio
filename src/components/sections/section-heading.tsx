"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  eyebrow: string;
  align?: "center" | "left";
}

export const SectionHeading = ({ title, eyebrow, align = "center" }: Props) => {
  const isCentered = align === "center";

  return (
    <motion.div
      className={`flex flex-col gap-4 ${isCentered ? "items-center text-center" : "items-start text-left"}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-light-blue">
        <span className="h-px w-10 bg-light-blue" />
        {eyebrow}
        <span className="h-px w-10 bg-light-blue" />
      </span>
      <h2 className="text-3xl font-bold md:text-5xl">{title}</h2>
    </motion.div>
  );
};
