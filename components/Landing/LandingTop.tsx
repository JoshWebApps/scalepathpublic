"use client";
import React, { useRef } from "react";
import Image from "next/image";
import space from "@/public/images/landing/outerspace.jpg";
import { motion, useScroll, useTransform } from "motion/react";
import TopNav from "../TopNav";

import TopLinks from "../TopLinks";

export default function LandingTop() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const [imageLoaded, setImageLoaded] = React.useState(false);

  const zoom = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.65, 0.85], [0, 1]);
  const opacity5 = useTransform(scrollYProgress, [0, 0.5], [0.7, 1]);

  return (
    <div ref={ref} className="w-full h-[280vh] relative">
      <motion.div
        style={{ opacity: opacity3 }}
        className="z-30 fixed w-full top-0 "
      ></motion.div>
      <TopNav opacity={opacity3} />

      <div className="w-full overflow-hidden z-20 sticky top-0 h-screen bg-black">
        <div>
          <motion.div
            style={{ opacity }}
            className="absolute z-10 flex text-center flex-col items-center w-full justify-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
          >
            <motion.h1
              initial={{ letterSpacing: "0.2em", opacity: 0 }}
              animate={imageLoaded && { letterSpacing: "-0.03em", opacity: 1 }}
              transition={{
                letterSpacing: {
                  duration: 1,
                  delay: 1.3,
                  ease: [0.85, 0, 0.15, 1],
                },
                opacity: {
                  duration: 1,
                  delay: 0.6,
                },
              }}
              className="font-normal"
            >
              Scale
              <motion.span
                initial={{ fontSize: "40%" }}
                animate={imageLoaded && { fontSize: "100%" }}
                transition={{
                  delay: 2.2,
                  duration: 0.9,
                  ease: [0.85, 0, 0.15, 1],
                }}
              >
                Path
              </motion.span>
            </motion.h1>
          </motion.div>
          <motion.div
            style={{ opacity }}
            className="text-xl z-10 w-full bottom-[20vh] absolute text-center left-1/2 -translate-x-1/2  xl:hidden"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={imageLoaded && { opacity: 1 }}
              transition={{ delay: 3, duration: 0.8 }}
            >
              Growth, scalability and clear IT solutions
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={imageLoaded && { opacity: 1 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="text-tertiary"
            >
              Scroll to learn more
            </motion.h3>
          </motion.div>
          <motion.div
            style={{ opacity }}
            className="text-xl hidden xl:block z-10 space-y-2 absolute right-10 top-1/2 -translate-y-1/2"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={imageLoaded && { opacity: 1 }}
              transition={{ delay: 3, duration: 0.8 }}
            >
              Growth, scalability and clear IT solutions
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={imageLoaded && { opacity: 1 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="text-tertiary"
            >
              Scroll to learn more
            </motion.h3>
          </motion.div>
        </div>
        <motion.div
          style={{ opacity: opacity2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <h2 className="text-tertiary">ScalePath</h2>
          <div className="text-3xl w-full whitespace-nowrap">
            <h1 className="">Future-Proof IT Solutions, </h1>
            <h1>Built for You.</h1>
          </div>
        </motion.div>
        <motion.div
          style={{ opacity: opacity4 }}
          className=" hidden md:block absolute z-10 top-12 space-x-20 lg:space-x-32 left-1/2 -translate-x-1/2"
        >
          <TopLinks />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={imageLoaded && { opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            style={{ scale: zoom, opacity: opacity5 }}
            className="w-full h-screen relative "
          >
            <Image
              alt="Outer Space"
              quality={100}
              priority
              src={space}
              draggable={false}
              placeholder="blur"
              fill
              onLoadingComplete={() => setImageLoaded(true)}
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
