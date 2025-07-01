"use client";
import { easeIn } from "motion";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import React, { useRef } from "react";
import TextHover from "../Text/TextHover";

export default function LandingServices() {
  const ref = useRef(null);
  const services = [
    "24/7 Remote IT Support",
    "Onsite IT Support",
    "Software Installations & Updates",
    "Office 365 / Google Workspace Administration",
    "IT Account Management",
    "Basic & Advanced Network Monitoring",
    "Server & Infrastructure Monitoring",
    "Cloud Backup Management",
    "Proactive System Health Monitoring & Automatic Issue Resolution",
    "Anti-virus & Anti-malware Protection",
    "IT Health & Security Reviews",
    "Email Security & Encryption Management",
    "Disaster Recovery Testing",
  ];

  const isInView = useInView(ref, { amount: 0.6, once: true });

  const initialDelay = 0.4;
  const firstGap = 0.5;
  const decrement = 0.1;
  const minGap = 0.1;

  const getDelay = (index: number) => {
    let delay = initialDelay;
    for (let i = 0; i < index; i++) {
      const gap = Math.max(firstGap - decrement * i, minGap);
      delay += gap;
    }
    return delay;
  };

  return (
    <div className="relative h-[170vh]">
      <div
        ref={ref}
        className="w-full sticky top-0 min-h-screen h-screen text-secondary text-left flex items-center justify-center px-4 md:px-8"
      >
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium mb-6 whitespace-nowrap">
            What can we do for you?
          </h1>
          <div className="relative pl-4">
            <div className="w-full h-full absolute inset-0 z-20 bg-gradient-to-b from-black/0 to-black" />
            <ul className="relative z-10 list-disc pl-5 font-thin pt-6 md:pt-10 text-sm sm:text-lg md:text-xl">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{
                    ease: easeIn,
                    opacity: {
                      duration: 0.6,
                      delay: getDelay(index),
                    },
                  }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>
          <Link
            className={`block ${
              isInView ? "opacity-100" : "opacity-0"
            } pl-4 mt-4 ease-in duration-1000 w-fit delay-[2800ms] text-lg md:text-3xl font-light`}
            href="/services"
          >
            <TextHover text="See all" />
          </Link>
        </div>
      </div>
    </div>
  );
}
