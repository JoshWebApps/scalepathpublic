import Link from "next/link";
import React from "react";
import TextHover from "../Text/TextHover";
import AppearingText from "../Text/AppearingText";

export default function ServicesPara() {
  return (
    <div className="w-full h-screen flex gap-10 items-start justify-center pl-[10vw]    flex-col">
      <div className=" sm:text-2xl  md:text-4xl whitespace-nowrap sm:max-w-[500px]  md:max-w-[700px]  font-normal">
        <AppearingText
          lines={[
            "We provide scalable IT support, security, and",
            "infrastructure management tailored to your",
            "business needs. With fast response times and",
            "proactive monitoring, we help keep your",
            "systems running smoothly and securely.",
          ]}
          inViewAmount={1}
        />
      </div>
      <Link className="text-xs sm:text-base" href="/about">
        <TextHover text="Learn more about us (here)" />
      </Link>
    </div>
  );
}
