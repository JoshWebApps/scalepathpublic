"use client";
import React from "react";
import Image from "next/image";
import architecture from "@/public/images/landing/architecture.jpg";
import AppearingText from "../Text/AppearingText";
import { motion } from "motion/react";

export default function LandingWhatWeDo() {
  return (
    <div className="w-full h-screen md:h-fit p-5 sm:p-10 flex flex-col items-center justify-between">
      <div className="h-[50%] md:h-[40%] flex flex-col gap-4 sm::gap-8 text-center items-center justify-center">
        <div className="text-tertiary md:text-lg md:mt-10 ">
          <AppearingText lines={["What we do"]} />
        </div>
        <div className="text-2xl sm:text-3xl md:text-5xl whitespace-nowrap md:mt-8 lg:text-6xl font-medium">
          <AppearingText
            lines={[
              "Scalable IT support, security, and",
              "infrastructure management",
            ]}
            aniDelay={0.3}
          />
        </div>
        <div className="text-sm sm:text-base font-light md:mt-10 md:text-xl lg:w-2/3 mb-2">
          <AppearingText
            lines={[
              "We provide scalable IT support, cybersecurity, and infrastructure",
              "management, ensuring businesses stay secure, efficient, and ready for",
              "growth.",
            ]}
            aniDelay={0.6}
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
        viewport={{ once: true, amount: 0.1 }}
        className="h-[50%] md:h-[70vh] md:mt-20 overflow-hidden w-full bg-gray-50 relative"
      >
        <motion.div
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full"
        >
          <Image
            alt="Architectureal night photo"
            fill
            className="object-cover"
            draggable={false}
            placeholder="blur"
            src={architecture}
          />
        </motion.div>
      </motion.div>
      <div className="w-full bg-primary h-10  sticky bottom-0" />
    </div>
  );
}
