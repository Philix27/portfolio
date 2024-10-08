"use client";

import React from "react";

import { TextH, TextP } from "@/comps";
import { cn, useAppTheme } from "@/lib";
import { motion } from "framer-motion";

export function CardsLessSection(props: {
  className?: string;
  data: {
    title: string;
    subtitle: string;
  }[];
}) {
  const { gradient } = useAppTheme();
  return (
    <section
      className={cn(
        "md:flex w-full items-center justify-center",
        props.className,
      )}
    >
      <div
        className={`md:w-[80%] w-[90%]
      grid md:grid-cols-3 grid-cols-1 mx-5
      my-5 gap-2 md:mx-0
    `}
      >
        {props.data.map((item, i) => (
          <motion.div
            initial={{ x: -10, opacity: 0.5, translateX: -20 }}
            animate={{ x: 0, opacity: 1, translateX: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className={cn(
              "border-r-ring md:mx-2 rounded-2xl p-4 mb-5",
              gradient,
            )}
            key={i}
          >
            <div className="p-2">
              <TextH v="h3" className="mb-4 tracking-wider font-extrabold">
                {item.title}
              </TextH>
              <TextP v="p5" className={"tracking-wide"}>
                {item.subtitle}
              </TextP>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
