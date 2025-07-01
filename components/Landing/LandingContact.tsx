"use client";
import Link from "next/link";
import React from "react";
import { useInView } from "motion/react";
import { sendMail } from "@/libs/actions/mail";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function LandingContact() {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  const { executeRecaptcha } = useGoogleReCaptcha();

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
  const [loading, setLoading] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState("");

  const validateEmail = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!executeRecaptcha) {
      console.error("Recaptcha not initialized");
      return;
    }

    const newErrors: { [key: string]: string } = {};

    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email address";
    }
    if (!message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    setSuccessMessage("");

    const gRecaptchaToken = await executeRecaptcha("inquirySubmit");

    const response = await fetch("/api/verify-recaptcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gRecaptchaToken }),
    });

    const data = await response.json();

    if (data.error) {
      setErrors({ submit: "Failed Recaptcha" });
      return;
    } else {
      console.log(data.message);
    }

    try {
      await sendMail({
        name: `${firstName} ${lastName}`,
        subject: "New Contact Form Submission",
        email,
        message,
        company,
      });
      // Reset form fields
      setFirstName("");
      setLastName("");
      setCompany("");
      setEmail("");
      setMessage("");
      setSuccessMessage("Your message has been sent successfully.");
    } catch (error) {
      setErrors({
        submit:
          "An error occurred while sending your message. Please try again.",
      });
    }
    setLoading(false);
  };

  return (
    <div className="w-full h-fit flex items-center justify-center">
      <div
        id="contact"
        ref={ref}
        className="w-full max-w-[2000px] min-h-screen z-10 bg-primary h-fit md:p-20 pt-10 flex flex-col md:flex-row items-center justify-center md:justify-between"
      >
        <div className="w-full h-full flex items-start self-start justify-center md:items-start md:justify-start md:p-10 md:py-14">
          <h1
            className={`text-center ${
              isInView ? "blur-none opacity-100" : "blur-xl opacity-0"
            } font-medium md:text-left duration-1000 text-6xl sm:text-7xl md:text-6xl lg:text-8xl xl:text-9xl`}
          >
            Lets get in touch
          </h1>
        </div>
        <div className="w-full h-full pb-20 px-8 md:p-0 flex md:items-start items-center justify-center md:justify-end mt-10 md:mt-0">
          <div className="bg-secondary md:min-w-[450px] w-full md:w-fit h-fit space-y-4 sm:space-y-10 p-10 sm:py-14 text-primary md:text-xl">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-10">
              <div className="flex flex-col w-full sm:flex-row gap-4 sm:gap-8">
                <div className="flex w-full flex-col sm:gap-2">
                  <label>First Name *</label>
                  <input
                    className="border-b w-full focus:ring-0 focus:shadow-none rounded-none bg-secondary focus:outline-0"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>
                <div className="flex w-full flex-col sm:gap-2">
                  <label>Last Name *</label>
                  <input
                    className="border-b w-full focus:ring-0 focus:shadow-none rounded-none bg-secondary focus:outline-0"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:gap-2">
                <label>Company</label>
                <input
                  className="border-b focus:ring-0 focus:shadow-none rounded-none bg-secondary focus:outline-0"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="flex flex-col sm:gap-2">
                <label>Email *</label>
                <input
                  className="border-b focus:ring-0 focus:shadow-none rounded-none bg-secondary focus:outline-0"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="flex flex-col sm:gap-2">
                <label>Message *</label>
                <textarea
                  className="border-b resize-none sm:h-24 focus:ring-0 focus:shadow-none rounded-none bg-secondary focus:outline-0"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="w-fit cursor-pointer"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
              {errors.submit && (
                <p className="text-red-500 text-sm text-center">
                  {errors.submit}
                </p>
              )}
              {successMessage && (
                <p className="text-green-500 text-sm text-center">
                  {successMessage}
                </p>
              )}
            </form>
            <div className="w-full flex flex-col sm:gap-2 items-start">
              <p className="text-sm">Or give us a call</p>
              <Link className=" text-xl md:text-3xl" href="tel:077790223453">
                07790 223453
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
