"use client";
import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function CaptchaWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const recaptchaKey: any = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
      {children}
    </GoogleReCaptchaProvider>
  );
}
