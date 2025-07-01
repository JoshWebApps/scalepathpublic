import LandingContact from "@/components/Landing/LandingContact";
import ServicesExtra from "@/components/Services/ServicesExtra";
import ServicesPara from "@/components/Services/ServicesPara";
import ServicesPlans from "@/components/Services/ServicesPlans";
import ServicesTop from "@/components/Services/ServicesTop";
import TopNav from "@/components/TopNav";
import React from "react";

export const revalidate = 0;

export default function page() {
  return (
    <div className="">
      <TopNav />
      <ServicesTop />
      <ServicesPlans />
      <ServicesExtra />
      <ServicesPara />
      <LandingContact />
    </div>
  );
}
