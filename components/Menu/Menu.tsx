"use client";
import { AnimatePresence, motion, MotionValue, useInView } from "motion/react";
import Link from "next/link";
import React, { useRef } from "react";
import AppearingText from "../Text/AppearingText";
import { easeInOut } from "motion";

export default function Menu({ opacity }: { opacity?: MotionValue<number> }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    setIsOpen(false);
    setClicked(false);
  };

  const openingDelay = 300;

  return (
    <>
      <motion.button
        onClick={() => {
          setClicked(true);
          setTimeout(() => {
            setIsOpen(true);
          }, openingDelay);
        }}
        style={{ opacity: opacity || 1 }}
        className="flex flex-col cursor-pointer mix-blend-difference gap-3 fixed w-fit z-30 h-fit top-0 right-0 p-10"
      >
        <motion.div
          initial={{ scaleX: 1, transformOrigin: "right" }}
          animate={{ scaleX: clicked ? 0 : 1 }}
          transition={{ duration: 0.1, ease: easeInOut }}
          className="h-[1px] w-20 bg-secondary"
        />
        <motion.div
          initial={{ scaleX: 1, transformOrigin: "right" }}
          animate={{ scaleX: clicked ? 0 : 1 }}
          transition={{ duration: 0.1, ease: easeInOut, delay: 0.1 }}
          className="h-[1px] w-20 bg-secondary"
        />
        <motion.div
          initial={{ scaleX: 1, transformOrigin: "right" }}
          animate={{ scaleX: clicked ? 0 : 1 }}
          transition={{ duration: 0.1, ease: easeInOut, delay: 0.2 }}
          className="h-[1px] w-20 bg-secondary"
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              onClick={handleClick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
              className="fixed top-0 z-40 w-full h-screen backdrop-blur-xs bg-white/10"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              style={{ transformOrigin: "right" }}
              transition={{ duration: 0.4, ease: [0, 0.71, 0.2, 1.01] }}
              className="sm:w-[650px] w-screen pl-10 sm:pl-24 pt-20 sm:pt-32 h-screen z-50 bg-primary fixed top-0 right-0"
            >
              {/* Close Button */}
              <button
                onClick={handleClick}
                className="absolute p-4 cursor-pointer right-10 top-10"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  style={{ transformOrigin: "left" }}
                  transition={{ duration: 0.3, ease: easeInOut, delay: 0.3 }}
                  className="w-10 h-[2px] bg-secondary"
                />
              </button>

              {/* Main container with vertical spacing for two sections */}
              <div className="grid gap-20">
                {/* Section 1: Explore */}
                <div className="grid grid-cols-[auto_1fr] gap-4  sm:gap-10 items-start">
                  <motion.h1
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={isOpen ? { opacity: 1, filter: "blur(0px)" } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="sm:text-5xl text-2xl  text-secondary font-medium w-[100px] sm:w-[200px] "
                  >
                    Explore
                  </motion.h1>
                  <div className="flex flex-col gap-8 pt-2 sm:pt-3 sm:text-xl font-thin">
                    <Link
                      onClick={handleClick}
                      className="hover:text-tertiary duration-300 ease-in-out"
                      href="/"
                    >
                      <AppearingText lines={["Home"]} aniDelay={0.4} />
                    </Link>
                    <Link
                      onClick={handleClick}
                      className="hover:text-tertiary duration-300 ease-in-out"
                      href="/about"
                    >
                      <AppearingText lines={["About"]} aniDelay={0.5} />
                    </Link>
                    <Link
                      onClick={handleClick}
                      className="hover:text-tertiary duration-300 ease-in-out"
                      href="/services"
                    >
                      <AppearingText lines={["Services"]} aniDelay={0.6} />
                    </Link>
                    <Link
                      onClick={handleClick}
                      className="hover:text-tertiary duration-300 ease-in-out"
                      href="/#contact"
                    >
                      <AppearingText lines={["Contact"]} aniDelay={0.7} />
                    </Link>
                  </div>
                </div>

                {/* Section 2: Talk to us */}
                <div className="grid grid-cols-[auto_1fr] gap-4 sm:gap-10 items-start">
                  <motion.h1
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={isOpen ? { opacity: 1, filter: "blur(0px)" } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="sm:text-5xl text-2xl  text-secondary font-medium w-[100px] sm:w-[200px] "
                  >
                    Talk to us
                  </motion.h1>
                  <div className="flex flex-col pt-2 sm:pt-3 gap-8 sm:text-xl font-thin">
                    <Link
                      href="/"
                      className="hover:text-tertiary duration-300 ease-in-out"
                    >
                      {" "}
                      <AppearingText
                        lines={["contact@scalepath.com "]}
                        aniDelay={0.6}
                      />
                    </Link>
                    <Link
                      href="/"
                      className="hover:text-tertiary duration-300 ease-in-out"
                    >
                      {" "}
                      <AppearingText lines={["07790 223453"]} aniDelay={0.7} />
                    </Link>

                    <Link
                      href={"/"}
                      className="whitespace-nowrap hover:text-tertiary duration-300 ease-in-out"
                    >
                      <AppearingText
                        lines={[
                          "12 Ocean Drive,",
                          "Southampton, Hampshire,",
                          "SO17 1AA,",
                          "United Kingdom",
                        ]}
                        aniDelay={0.8}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
