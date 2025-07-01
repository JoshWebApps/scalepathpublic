import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const postData = await request.json();
  const { gRecaptchaToken } = postData;
  const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    const data = await res.json();

    if (data.success && data.score > 0.5) {
      return NextResponse.json({ message: data });
    } else {
      return NextResponse.json({ error: "Failed Recaptcha" });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
