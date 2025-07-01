"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import React, { FC } from "react";

const Lenis = ReactLenis as unknown as FC<{
  children: React.ReactNode;
  root?: boolean;
}>;

function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <Lenis root>{children}</Lenis>;
}

export default SmoothScroll;
