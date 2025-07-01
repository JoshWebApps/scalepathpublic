import React from "react";
import LandingTop from "./LandingTop";
import LandingWhatWeDo from "./LandingWhatWeDo";
import LandingTiers from "./LandingTiers";
import LandingServices from "./LandingServices";
import LandingGuarantee from "./LandingGuarantee";
import LandingContact from "./LandingContact";

export default function Landing() {
  return (
    <div className="w-full relative">
      <LandingTop />
      <LandingWhatWeDo />
      <LandingTiers />
      <LandingServices />
      <LandingGuarantee />
      <LandingContact />
    </div>
  );
}
