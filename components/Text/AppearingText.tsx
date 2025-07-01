"use client";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface AppearingTextProps extends HTMLMotionProps<"h1"> {
  lines: string[];
  className?: string;
  delay?: number;
  duration?: number;
  aniDelay?: number;
  textPadding?: number;
  inViewAmount?: number;
  inView?: boolean;
}

const AppearingText: React.FC<AppearingTextProps> = ({
  lines,
  className = "",
  delay = 0.1,
  duration = 0.7,
  aniDelay = 0,
  textPadding = 0,
  inViewAmount = 0.7,
  inView,
  ...rest
}) => {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        delayChildren: aniDelay,
        staggerChildren: delay,
      },
    },
  };

  const lineVariants = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: duration,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };

  const animateProps =
    typeof inView === "boolean"
      ? { animate: inView ? "animate" : "initial" }
      : {
          whileInView: "animate",
          viewport: { once: true, amount: inViewAmount },
        };

  return (
    <motion.h1
      className={className}
      variants={containerVariants}
      initial="initial"
      {...animateProps}
      {...rest}
    >
      {lines.map((line, index) => (
        <div key={index} className={`overflow-hidden pb-${textPadding}`}>
          <motion.div variants={lineVariants}>{line}</motion.div>
        </div>
      ))}
    </motion.h1>
  );
};

export default AppearingText;
