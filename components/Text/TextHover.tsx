"use client";
import { motion } from "motion/react";
import React from "react";

export default function TextHover({ text }: { text: string }) {
  const duration = 0.25;
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative inline-block -mb-[2px] overflow-hidden whitespace-nowrap"
      style={{ lineHeight: "1" }}
    >
      <motion.span
        key={`${text} top`}
        className="inline-block"
        variants={{
          initial: { y: 0, opacity: 1 },
          hovered: { y: "-100%", opacity: 0.3 },
        }}
        transition={{
          ease: "easeInOut",
          opacity: { duration: 0.3 },
          y: { duration: duration, delay: 0.3 },
        }}
      >
        {text}
      </motion.span>
      <motion.span
        key={`${text} bottom`}
        className="inline-block absolute inset-0"
        variants={{
          initial: { y: "100%", opacity: 0.3 },
          hovered: { y: 0, opacity: 1 },
        }}
        transition={{
          ease: "easeInOut",
          opacity: { duration: 0.3, delay: 0.6 },
          y: { duration: duration, delay: 0.3 },
        }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
}
