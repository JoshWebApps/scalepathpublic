"use client";
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

const tiers = [
  {
    title: "Essential",
    users: "1 - 10",
    features: [
      "24/7 remote IT support",
      "Network monitoring & management",
      "Patch management & security updates",
      "Anti-virus & Anti-malware protection",
      "Software installation & updates",
      "Monthly IT health reports",
      "Basic security awareness training",
      "Proactive system health monitoring",
    ],
  },
  {
    title: "Standard",
    users: "11 - 50",
    features: [
      "On-site IT support (up to 4 visits per year)",
      "Network & server monitoring",
      "Cloud backup management",
      "Advanced security features",
      "Proactive security monitoring",
      "Office 365 / Google Workspace administration",
      "Quarterly IT health & security review",
      "Annual security audits",
      "99.9% service uptime guarantee",
      "4-hour critical response SLA",
    ],
  },
  {
    title: "Professional",
    users: "51 - 100",
    features: [
      "Unlimited on-site IT support",
      "24/7 server & infrastructure monitoring",
      "Dedicated IT account manager",
      "Basic incident response plan",
      "Proactive vulnerability scanning",
      "Monthly security & performance reports",
      "Custom security audits & compliance support",
      "Email security & encryption management",
      "Semi-annual strategic IT planning & consulting",
      "Quarterly security audits",
      "Annual disaster recovery testing",
      "2-hour critical response SLA",
    ],
  },
];

const colorSchemes = [
  ["#000000"],

  ["#A0A0A0", "#000000"],

  ["#DEDEDE", "#A0A0A0", "#000000"],
];

export default function ServicesPlans() {
  const ref = useRef(null);

  const inView = useInView(ref, { amount: 0.1, once: true });

  return (
    <>
      <div className="flex items-center justify-center w-full h-fit">
        <div className="w-[96vw] text-2xl sm:text-4xl md:text-6xl whitespace-nowrap lg:text-7xl xl:text-8xl my-32 px-4">
          <h1>Tiered plans tailored to your</h1>
          <h1>business needs</h1>
        </div>
      </div>

      <div className="w-full flex items-center py-10 justify-center bg-secondary h-fit">
        <div
          ref={ref}
          className="w-full max-w-[1400px] flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-2 h-fit text-primary bg-secondary p-10"
        >
          {tiers.map((tier, i) => {
            const combinedFeatures: any = tiers
              .slice(0, i + 1)
              .reduce((acc: any, t) => [...acc, ...t.features], []);

            const lengths = tiers.slice(0, i + 1).map((t) => t.features.length);

            return (
              <div
                key={i}
                className="bg-[#F5F5F5] p-4 lg:p-10 w-[300px] lg:w-[400px]"
              >
                <div className="text-center mb-10">
                  <h1 className="text-4xl">{tier.title}</h1>
                  <h3 className="text-tertiary text-2xl">{tier.users} users</h3>
                </div>
                <div className="flex flex-col items-center">
                  <ul className="text-left">
                    {combinedFeatures.map((feature: any, index: number) => {
                      let cumulative = 0;
                      let colorClass = "";
                      for (let tierIndex = 0; tierIndex <= i; tierIndex++) {
                        const blockSize = lengths[tierIndex];

                        if (index < cumulative + blockSize) {
                          colorClass = colorSchemes[i][tierIndex];
                          break;
                        }
                        cumulative += blockSize;
                      }

                      return (
                        <motion.li
                          initial={{ opacity: 0, color: "#000000" }}
                          animate={
                            inView ? { opacity: 1, color: colorClass } : {}
                          }
                          transition={{
                            duration: 0.5,
                            delay: index * 0.1 + i * 0.5,
                            color: { delay: index * 0.1 + 3 },
                          }}
                          key={index}
                          className="text-sm font-light whitespace-nowrap"
                        >
                          {feature}
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
