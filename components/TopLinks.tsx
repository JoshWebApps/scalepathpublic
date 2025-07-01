import Link from "next/link";
import React from "react";
import TextHover from "./Text/TextHover";

export default function TopLinks() {
  return (
    <>
      <Link href="/about" scroll={true}>
        <TextHover text={"About"} />
      </Link>
      <Link href="/services" scroll={true}>
        <TextHover text={"Services"} />
      </Link>
      <Link href="/#contact" scroll={true}>
        <TextHover text={"Contact"} />
      </Link>
    </>
  );
}
