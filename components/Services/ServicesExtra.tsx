"use client";
import { delay, easeInOut, motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export default function ServicesExtra() {
  const [hoveredService, setHoveredService] = React.useState<string | null>(
    null
  );

  const ref = useRef(null);

  const inView = useInView(ref, { amount: 0.3, once: true });

  const services: { title: string; description: string }[] = [
    {
      title: "Compliance & Regulatory Support",
      description:
        "Ensure your business meets industry standards with our expert compliance support. We help you navigate GDPR, ISO 27001, and other regulatory frameworks, keeping your IT systems secure and compliant.",
    },
    {
      title: "Disaster Recovery & Business Continuity",
      description:
        "Minimise downtime and protect critical data with our disaster recovery solutions. We implement secure backup strategies and continuity plans to keep your business running, even in unexpected events.",
    },
    {
      title: "Hardware Procurement & Setup",
      description:
        "We source, configure, and install the right IT hardware—computers, servers, and networking equipment—to ensure your business operates smoothly with reliable, high-performance technology.",
    },
    {
      title: "Custom IT Consulting & Strategy",
      description:
        "Get expert IT guidance tailored to your business. We design scalable, future-proof IT strategies that align with your goals and drive long-term efficiency and security.",
    },
    {
      title: "Cloud Migration & Optimisation",
      description:
        "Seamlessly transition to the cloud with our migration services. We optimise performance, security, and costs, ensuring your cloud infrastructure scales with your business.",
    },
    {
      title: "Technology Modernisation",
      description:
        "Upgrade outdated systems and streamline your IT infrastructure. We modernise legacy technology to improve efficiency, security, and business agility in a rapidly evolving digital landscape.",
    },
  ];

  return (
    <div
      key={"Unique key property"}
      ref={ref}
      className="w-full h-fit bg-primary"
    >
      <div className="text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl py-10 md:py-20">
        <h1>Additional Services</h1>
        <h1>& Add-Ons</h1>
      </div>
      {services.map((service, index) => (
        <div key={index + "key"}>
          <motion.div
            initial={{ scaleX: 0, transformOrigin: "center" }}
            animate={{ scaleX: inView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className={` h-[2px] ${
              index < 1 ? "block" : "hidden"
            }  bg-secondary`}
            key={"line top"}
          />
          <div key={service.title}>
            <motion.div
              key={index}
              className={` relative w-full hidden sm:flex items-center lg:px-40 justify-center cursor-default text-center h-32  `}
              initial={{
                backgroundColor: "#000000",
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                backgroundColor:
                  hoveredService === service.title ? "#FFFFFF" : "#000000",
                opacity: inView ? 1 : 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: hoveredService === service.title ? 0.3 : 0.8,
                ease: "easeInOut",
                opacity: { duration: 0.5, delay: 0.2 * index + 0.2 },
                filter: { duration: 0.6, delay: 0.2 * index + 0.2 },
              }}
            >
              <motion.h1
                initial={{ opacity: 1 }}
                animate={{ opacity: hoveredService === service.title ? 0 : 1 }}
                onMouseEnter={() => setHoveredService(service.title)}
                onMouseLeave={() => setHoveredService(null)}
                transition={{ duration: 0.2 }}
                className="text-5xl font-light w-fit z-10 py-10"
                key={"h1"}
              >
                {service.title}
              </motion.h1>

              <motion.p
                key={"p"}
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredService === service.title ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 sm:px-20  md:px-40 flex items-center justify-center text-primary"
              >
                {service.description}
              </motion.p>
            </motion.div>
            <div
              className="flex px-4 my-20  sm:hidden h-32 items-start justify-between"
              key={index + service.title}
            >
              <h1 key={"h1 2"} className="w-1/3 ">
                {service.title}
              </h1>
              <p key={"p 2"} className=" tracking-tight text-xs w-1/3 ">
                {service.description}
              </p>
            </div>
          </div>
          <motion.div
            initial={{ scaleX: 0, transformOrigin: "center" }}
            animate={{ scaleX: inView ? 1 : 0 }}
            transition={{
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
              delay: 0.2 * index + 0.2,
            }}
            className={` ${index > -1 ? "block" : "hidden"}  h-[2px] bg-white `}
            key={"line bottom"}
          />
        </div>
      ))}
    </div>
  );
}
