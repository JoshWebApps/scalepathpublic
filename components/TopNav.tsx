"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Menu from "./Menu/Menu";
import { motion, MotionValue, useMotionValue } from "motion/react";

interface TopNavProps {
  opacity?: MotionValue<number>;
}

export default function TopNav({ opacity }: TopNavProps) {
  const effectiveOpacity = opacity || useMotionValue(1);

  useEffect(() => {
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        style={{ opacity: effectiveOpacity }}
        className="fixed z-30 mix-blend-difference w-fit h-fit top-8 left-9 "
      >
        <Link href="/" className="text-4xl duration-300">
          ScalePath
        </Link>
      </motion.div>

      <Menu opacity={effectiveOpacity} />
    </>
  );
}
