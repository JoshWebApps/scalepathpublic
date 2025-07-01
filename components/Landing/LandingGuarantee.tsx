"use client";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import React, { useEffect, useRef } from "react";
import AppearingText from "../Text/AppearingText";

export default function LandingGuarantee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  const mouse = {
    x: useMotionValue(0.5),
    y: useMotionValue(0.5),
  };

  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 150, damping: 60, mass: 3 }),
    y: useSpring(mouse.y, { stiffness: 150, damping: 60, mass: 3 }),
  };

  const manageMouse = (e: any) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouse);
    return () => window.removeEventListener("mousemove", manageMouse);
  }, []);

  const mainY = useTransform(smoothMouse.x, [0, 1], [-30, 30]);
  const mainX = useTransform(smoothMouse.y, [0, 1], [30, -30]);

  return (
    <div
      ref={ref}
      className="w-full h-screen min-h-screen py-24 bg-secondary text-primary"
    >
      <div className="md:pl-20 pl-4">
        <div className="text-tertiary xl:text-3xl ">
          <AppearingText lines={["Why us?"]} />
        </div>
        <h1 className="xl:text-6xl text-3xl">Some of our guarantees</h1>
      </div>
      <div className="w-full h-full  relative whitespace-nowrap">
        <h1
          className={`absolute duration-[1000ms] delay-1000 md:text-4xl ${
            isInView
              ? "blur-none scale-100 opacity-100"
              : "blur-xl scale-50 opacity-0"
          } right-1/5 top-1/5`}
        >
          24/7 support available
        </h1>
        <h1
          className={`absolute duration-[1000ms] delay-[2000ms]  md:text-2xl ${
            isInView
              ? "blur-none scale-100 opacity-100"
              : "blur-xl scale-50 opacity-0"
          } left-1/5 top-[33%]`}
        >
          Security-First Approach
        </h1>
        <h1
          className={`absolute duration-[1000ms] delay-[3000ms] md:text-3xl ${
            isInView
              ? "blur-none scale-100 opacity-100"
              : "blur-xl scale-50 opacity-0"
          } bottom-1/5 left-2/4`}
        >
          10+ years of experience
        </h1>
        <motion.h1
          className={`xl:text-7xl text-3xl ${
            isInView
              ? "blur-none scale-100 opacity-100"
              : "blur-xl scale-50 opacity-0"
          } text-center perspective-midrange
 absolute left-1/2 top-1/2 duration-[1000ms] -translate-x-1/2 -translate-y-1/2`}
        >
          <motion.span
            className="md:inline-block hidden"
            style={{ rotateY: mainY, rotateX: mainX }}
          >
            99.9% uptime guarantee
          </motion.span>
          <span className="block md:hidden"> 99.9% uptime guarantee</span>
        </motion.h1>
      </div>
    </div>
  );
}
