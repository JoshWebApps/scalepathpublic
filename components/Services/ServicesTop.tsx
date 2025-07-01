"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import TextHover from "../Text/TextHover";
import { motion, useScroll, useTransform } from "motion/react";
import TopLinks from "../TopLinks";

export default function ServicesTop() {
  const ref = useRef(null);
  const [initialAnimDone, setInitialAnimDone] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref });
  const width = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 1],
    ["30vw", "100vw", "100vw", "95vw"]
  );
  const height = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 1],
    ["50vh", "100vh", "100vh", "95vh"]
  );

  return (
    <div ref={ref} className="w-full h-[250vh] sm:h-[350vh] relative">
      <div className="hidden md:block absolute z-30 top-12 space-x-20 lg:space-x-32 left-1/2 -translate-x-1/2">
        <TopLinks />
      </div>

      <div className="sticky top-0 w-full h-screen bg-primary">
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2">
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
            Discover Our Services
          </motion.h1>
        </div>

        <motion.div
          initial={{ width: "5px", height: "0" }}
          animate={{ width: "30vw", height: "50vh" }}
          transition={{ duration: 0.4, width: { delay: 1.2 }, delay: 0.7 }}
          onAnimationComplete={() => setInitialAnimDone(true)}
          style={initialAnimDone ? { width, height } : {}}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white"
        >
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 1, duration: 0.4 }}
            className="absolute left-1/2 top-1/2 -translate-y-1/2
          -translate-x-1/2 text-primary text-2xl md:text-4xl lg:text-7xl"
          >
            Explore
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
}
