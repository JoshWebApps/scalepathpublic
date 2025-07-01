"use client";
import React, { useEffect, useRef, useState } from "react";
import AppearingText from "../Text/AppearingText";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

export default function AboutUs() {
  const colourRef = useRef(null);
  const ref = useRef(null);
  const whyRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: whyRef });

  const whyWidth = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4],
    ["10%", "10%", "100%"]
  );
  const whyHeight = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 0.7],
    ["0%", "2%", "2%", "100%"]
  );

  const opacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);
  const [isOpacitated, setIsOpacitated] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsOpacitated(latest > 0.75);
  });

  const [color, setColor] = useState<"initial" | "secondary">("initial");

  const [colourScheme1, setColourScheme1] = useState("primary");
  const [colourScheme2, setColourScheme2] = useState("secondary");

  useEffect(() => {
    if (color === "initial") {
      setColourScheme1("primary");
      setColourScheme2("secondary");
    } else {
      setColourScheme1("secondary");
      setColourScheme2("primary");
    }
  }, [color]);

  const inView = useInView(ref, { amount: 0.3, once: true });

  const colorInView = useInView(colourRef, { amount: 0.1 });

  useEffect(() => {
    if (colorInView) {
      setColor("secondary");
    } else {
      setColor("initial");
    }
  }, [colorInView]);

  return (
    <>
      <div
        className={`w-full relative z-20  duration-300 ease-in-out h-screen text-${colourScheme1} bg-${colourScheme2} justify-center   flex flex-col items-center`}
      >
        <div
          ref={ref}
          className="flex flex-col items-center gap-4 justify-center"
        >
          <div className="text-tertiary text-base sm:text-lg md:text-2xl">
            <AppearingText lines={["About us"]} />
          </div>
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center whitespace-nowrap">
            <AppearingText
              inView={inView}
              lines={["Reliable IT Solutions for", "Businesses of All Sizes"]}
            />
          </div>
          <div className="text-center mt-10 whitespace-nowrap text-xs sm:text-base md:text-lg lg:text-xl">
            <AppearingText
              inView={inView}
              aniDelay={0.5}
              className="hidden md:block"
              lines={[
                "We provide scalable IT support, security, and infrastructure management for businesses of all sizes. We offer ",
                "tiered solutions to ensure you get the right level of support, from basic IT assistance to advanced",
                "cybersecurity and infrastructure monitoring. Our goal is to keep your systems secure, reliable, and running",
                "smoothly.",
              ]}
            />
            <AppearingText
              inView={inView}
              aniDelay={0.5}
              className="md:hidden block text-base"
              lines={[
                "We provide scalable IT support, security, and",
                "infrastructure management for businesses of all sizes.",
                "We offer tiered solutions to ensure you get the right",
                "level of support, from basic IT assistance to advanced",
                "cybersecurity and infrastructure monitoring. Our goal",
                "is to keep your systems secure, reliable, and running",
                "smoothly.",
              ]}
            />
          </div>
        </div>
      </div>
      <div className="relative text-7xl md:text-8xl  lg:text-9xl  z-10">
        <h1
          className={`mix-blend-difference duration-300 pl-4 md:pl-10 ease-in-out py-10 font-medium text-${colourScheme1} bg-${colourScheme2} w-full`}
        >
          Core Values
        </h1>
        <div ref={colourRef}>
          <div
            className={`w-full h-screen duration-300 flex px-10 md:px-20 flex-col items-start justify-evenly font-medium
ease-in-out text-${colourScheme2} bg-${colourScheme1}`}
          >
            <div className="">
              <AppearingText lines={["Reliability"]} />
            </div>
            <div className="">
              <AppearingText lines={["Scalability"]} />
            </div>
            <div className="">
              <AppearingText lines={["Security"]} />
            </div>
          </div>
          <div
            ref={whyRef}
            className={`w-full h-[300vh] relative duration-300 bg-${colourScheme1}`}
          >
            <div className="sticky top-0 w-full h-screen flex items-center justify-center  ">
              <motion.div
                style={{ width: whyWidth, height: whyHeight }}
                className={` duration-300 text-${colourScheme1}  flex flex-col gap-10 items-start justify-center bg-${colourScheme2}`}
              >
                <div className="md:pl-20 pl-10 flex flex-col gap-10">
                  <motion.h3
                    style={{ opacity }}
                    className="text-base md:text-2xl text-tertiary"
                  >
                    Why choose us
                  </motion.h3>
                  <motion.div
                    style={{ opacity: opacity2 }}
                    className="text-lg sm:text-2xl md:text-4xl "
                  >
                    <AppearingText
                      inView={isOpacitated}
                      lines={[
                        "At ScalePath, we focus on keeping your",
                        "business secure, efficient, and scalable. Our",
                        "tiered IT solutions ensure you get the right",
                        "level of support, from essential IT",
                        "maintenance to advanced security and",
                        "infrastructure management. With fast",
                        "response times, proactive monitoring, and a",
                        "customer-first approach, we provide reliable",
                        "IT services tailored to your needs.",
                      ]}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
