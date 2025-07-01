import AboutTop from "@/components/About/AboutTop";
import AboutUs from "@/components/About/AboutUs";

import LandingContact from "@/components/Landing/LandingContact";

import TopNav from "@/components/TopNav";
import React from "react";

export const revalidate = 0;

export default function page() {
  return (
    <div className="">
      <TopNav />
      <AboutTop />
      <AboutUs />

      <LandingContact />
    </div>
  );
}
