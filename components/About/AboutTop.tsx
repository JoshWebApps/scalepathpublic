"use client";
import Link from "next/link";
import React, { useRef } from "react";
import TextHover from "../Text/TextHover";
import { motion, useScroll, useTransform } from "motion/react";
import TopLinks from "../TopLinks";

export default function AboutTop() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 20]);

  return (
    <div ref={ref} className="w-full overflow-hidden h-[160vh] relative">
      <div className="hidden md:block absolute z-30 top-12 space-x-20 lg:space-x-32 left-1/2 -translate-x-1/2">
        <TopLinks />
      </div>

      <div className="sticky top-0 w-full -z-10  h-screen bg-primary">
        <div className="fixed top-[35%] left-1/2 -translate-x-1/2">
          <motion.h3
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-tertiary"
          >
            ScalePath
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
            className="text-3xl whitespace-nowrap md:text-4xl"
          >
            Learn About Us
          </motion.h1>
        </div>

        <motion.div className="text-xl  w-full bottom-[40vh] fixed text-center left-1/2 -translate-x-1/2">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="text-tertiary"
          >
            Scroll to learn more
          </motion.h3>
        </motion.div>

        <motion.div
          style={{ scale }}
          className="absolute -bottom-1/2 left-1/2 z-20 -translate-x-1/2 rounded-full w-20 h-20  sm:w-44 sm:h-44 bg-secondary"
        />
      </div>
    </div>
  );
}
