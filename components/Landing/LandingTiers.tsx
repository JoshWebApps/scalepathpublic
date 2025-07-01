"use client";
import { easeIn } from "motion";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import React from "react";
import AppearingText from "../Text/AppearingText";
import TextHover from "../Text/TextHover";

export default function LandingTiers() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { amount: 0.6, once: true });

  return (
    <div
      ref={ref}
      className="w-full p-8 md:p-20 min-h-screen bg-secondary text-primary flex flex-col md:flex-row justify-evenly items-center"
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="font-medium text-3xl sm:text-4xl lg:text-6xl">
          Tiered plans tailored to your business' needs
        </h1>
        <div className="text-[#858585] font-light text-lg md:text-lg lg:text-xl mt-6 md:mt-10 mb-6 md:mb-20">
          <AppearingText
            className="hidden lg:block"
            lines={[
              " Our pricing plan offers tiered IT solutions, ensuring you get the right level of support and security for your business. Whether you need basic remote assistance or fully managed IT infrastructure, our flexible plans scale with your needs.",
            ]}
          />

          <AppearingText
            className="block lg:hidden whitespace-nowrap"
            lines={[
              "Our pricing plan offers tiered IT solutions,",
              "ensuring you get the right level of support and",
              "security for your business. Whether you need",
              "basic remote assistance or fully managed IT",
              "infrastructure, our flexible plans scale with your",
              "needs.",
            ]}
          />
        </div>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
          transition={{ duration: 0.6, ease: easeIn, delay: 0.5 }}
          href="/services"
          className="font-medium bg-[#F5F5F5] w-fit px-3 py-2 md:px-4 md:py-2 md:text-lg text-[#7E7E7E]"
        >
          <TextHover text="Learn more" />
        </motion.a>
      </div>

      {/* Right Section */}
      <div className="w-full whitespace-nowrap md:w-1/2 flex flex-col text-2xl md:text-xl lg:text-3xl xl:text-4xl items-center md:items-end mt-8 md:mt-0">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: inView ? 1 : 0 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.6, ease: easeIn }}
          className="w-full md:w-2/3 h-[1px] bg-tertiary"
        />
        <div className="flex w-full md:w-2/3 items-center justify-between  py-6 md:py-10  px-2">
          <h1>Essential</h1>
          <h1>1 to 10 users</h1>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: inView ? 1 : 0 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.6, ease: easeIn, delay: 0.1 }}
          className="w-full md:w-2/3 h-[1px] bg-tertiary"
        />
        <div className="flex w-full md:w-2/3 items-center justify-between  py-6 md:py-10  px-2">
          <h1>Standard</h1>
          <h1>11 to 50 users</h1>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: inView ? 1 : 0 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.6, ease: easeIn, delay: 0.2 }}
          className="w-full md:w-2/3 h-[1px] bg-tertiary"
        />

        <div className="flex w-full md:w-2/3 items-center justify-between  py-6 md:py-10  px-2">
          <h1>Professional</h1>
          <h1>51+ users</h1>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: inView ? 1 : 0 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.6, ease: easeIn, delay: 0.3 }}
          className="w-full md:w-2/3 h-[1px] bg-tertiary"
        />
      </div>
    </div>
  );
}
