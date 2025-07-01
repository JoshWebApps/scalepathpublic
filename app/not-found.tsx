import AppearingText from "@/components/Text/AppearingText";
import TopNav from "@/components/TopNav";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <TopNav />
      <div className="w-full h-screen pt-20 px-10 md:px-32 md:pt-10 ">
        <div className="text-[25vw]">
          <AppearingText className="flex" lines={["4", "0", "4"]} />
        </div>
        <div className=" text-2xl md:text-5xl">
          <AppearingText
            aniDelay={0.7}
            lines={["We cant find the page you're looking for."]}
          />
        </div>
      </div>
    </div>
  );
}
