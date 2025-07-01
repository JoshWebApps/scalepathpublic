"use client";
import { easeInOut } from "motion";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import React, { useRef } from "react";
import AppearingText from "./Text/AppearingText";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.6, once: true });

  return (
    <div className="relative h-screen flex items-end sm:items-center justify-center bg-black  w-full sm:h-fit">
      <p className="absolute hidden md:block text-xs sm:text-sm bottom-2 left-4">
        All rights reserved © 2025 ScalePath{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="ml-12"
          href={"https://www.joshchant.com/"}
        >
          Site by Josh chant
        </Link>
      </p>
      <div className="w-full h-fit py-10 p-4 md:p-0 md:py-20 gap-8  sm:gap-2 flex flex-col md:flex-row items-start justify-around max-w-[2000px]">
        <div className="h-full hidden md:flex items-center justify-center self-center">
          <Link href="/" className="md:text-5xl lg:text-7xl">
            <div
              className="overflow-visible whitespace-nowrap"
              style={{ display: "inline-block", width: "300px" }}
            >
              <motion.h1
                style={{ letterSpacing: "-0.05em", width: "100%", opacity: 0 }}
                variants={{
                  hover: { letterSpacing: "0.1em" },
                  inView: { opacity: 1 },
                }}
                transition={{
                  ease: [0.85, 0, 0.15, 1],

                  letterSpacing: { duration: 0.3, ease: [0.85, 0, 0.15, 1] },
                  opacity: { duration: 1, ease: [0.85, 0, 0.15, 1] },
                }}
                whileHover="hover"
                whileInView={inView ? "inView" : undefined}
                className={`${inView ? "opacity-100" : "opacity-0"}  `}
              >
                Scale
                <motion.span
                  style={{
                    display: "inline-block",
                    transformOrigin: "left bottom",
                  }}
                  variants={{
                    hover: { scale: 0.6 },
                  }}
                  transition={{
                    ease: [0.85, 0, 0.15, 1],

                    scale: {
                      duration: 0.5,
                      delay: 0.5,
                      ease: [0.85, 0, 0.15, 1],
                    },
                  }}
                >
                  Path
                </motion.span>
              </motion.h1>
            </div>
          </Link>
        </div>
        <div
          ref={ref}
          className="flex flex-col text-base md:text-base lg:text-xl gap-4"
        >
          <h1 className="text-tertiary text-4xl">Company</h1>
          <div className="flex md:flex-col gap-4">
            <Link className="hover:opacity-50 w-fit duration-500" href="/">
              <AppearingText aniDelay={0.3} inView={inView} lines={["Home"]} />
            </Link>
            <Link className="hover:opacity-50 w-fit duration-500" href="/about">
              <AppearingText aniDelay={0.3} inView={inView} lines={["About"]} />
            </Link>
            <Link
              className="hover:opacity-50 w-fit duration-500"
              href="/services"
            >
              {" "}
              <AppearingText
                aniDelay={0.3}
                inView={inView}
                lines={["Services"]}
              />
            </Link>
            <Link
              className="hover:opacity-50 w-fit duration-500"
              href="/#contact"
            >
              {" "}
              <AppearingText
                aniDelay={0.3}
                inView={inView}
                lines={["Contact"]}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col h-full items-start justify-start text-base md:text-base lg:text-xl gap-4">
          <h1 className="text-tertiary text-4xl">Contact</h1>
          <div className="flex md:flex-col flex-wrap gap-4">
            <Link className="hover:opacity-50 w-fit duration-500" href="/">
              <AppearingText
                aniDelay={0.5}
                inView={inView}
                lines={["contact@scalepath.com"]}
              />
            </Link>
            <Link className="hover:opacity-50 w-fit duration-500" href="/">
              <AppearingText
                aniDelay={0.5}
                inView={inView}
                lines={["07790 223453"]}
              />
            </Link>
            <Link className="hover:opacity-50 w-52 duration-500" href="/">
              <AppearingText
                aniDelay={0.5}
                inView={inView}
                lines={[
                  "12 Ocean Drive,",
                  "Southampton, Hampshire,",
                  "SO17 1AA,",
                  "United Kingdom",
                ]}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col text-base md:text-base lg:text-xl gap-4">
          <h1 className="text-tertiary text-4xl">Legal</h1>
          <div className="flex md:flex-col flex-wrap gap-4">
            <Link className="hover:opacity-50 w-fit duration-500" href="/terms">
              {" "}
              <AppearingText
                aniDelay={0.7}
                inView={inView}
                lines={["Terms of use"]}
              />
            </Link>
            <Link
              className="hover:opacity-50 w-fit duration-500"
              href="/privacy"
            >
              <AppearingText
                aniDelay={0.7}
                inView={inView}
                lines={["Privacy Policy"]}
              />
            </Link>
            <Link
              className="hover:opacity-50 w-fit duration-500"
              href="/cookies"
            >
              <AppearingText
                aniDelay={0.7}
                inView={inView}
                lines={["Cookie Policy"]}
              />
            </Link>
          </div>
        </div>
        <div className="h-full md:hidden w-full flex items-end justify-between ">
          <Link href="/" className="text-5xl">
            ScalePath
          </Link>
          <div className=" text-xs sm:text-sm w-1/3 flex flex-col gap-1">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className=""
              href={"https://www.joshchant.com/"}
            >
              Site by Josh chant
            </Link>
            <p>All rights reserved © 2025 ScalePath</p>
          </div>
        </div>
      </div>
    </div>
  );
}
