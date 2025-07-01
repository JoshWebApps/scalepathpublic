import TopNav from "@/components/TopNav";
import React from "react";

export default function CookiePolicy() {
  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "what-are-cookies", title: "What Are Cookies?" },
    { id: "how-we-use-cookies", title: "How We Use Cookies" },
    { id: "types-of-cookies", title: "Types of Cookies We Use" },
    { id: "third-party-cookies", title: "Third-Party Cookies" },
    { id: "managing-cookies", title: "Managing Cookie Settings" },
    { id: "changes", title: "Changes to This Cookie Policy" },
    { id: "contact", title: "Contact Information" },
  ];

  return (
    <div className="min-h-screen bg-primary py-20">
      <TopNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl text-dark mb-8">Cookie Policy</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Side Navigation – Desktop only */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <nav className="sticky top-8">
              <h2 className="text-lg text-dark mb-4">Sections</h2>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-dark hover:text-primary block px-3 py-2 hover:bg-gray-100"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-grow bg-secondary text-primary shadow-sm p-6 md:p-8">
            {/* 1. Introduction */}
            <section id="intro" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to ScalePath's Cookie Policy. This policy explains how
                we use cookies and similar technologies on our website. By
                continuing to browse our site, you agree to the use of cookies
                as described in this policy.
              </p>
            </section>

            {/* 2. What Are Cookies? */}
            <section id="what-are-cookies" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">What Are Cookies?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cookies are small text files that are placed on your device when
                you visit a website. They are widely used to make websites work
                more efficiently and to provide information to the website
                owners.
              </p>
            </section>

            {/* 3. How We Use Cookies */}
            <section id="how-we-use-cookies" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">How We Use Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At ScalePath, we use cookies to enhance your browsing
                experience, analyse site traffic, and personalise content.
                Cookies help us understand how our website is used so we can
                improve its functionality and performance.
              </p>
            </section>

            {/* 4. Types of Cookies We Use */}
            <section id="types-of-cookies" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use several types of cookies on our website, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-4">
                <li>
                  <strong>Essential Cookies:</strong> Necessary for the basic
                  functioning of our website.
                </li>
                <li>
                  <strong>Performance Cookies:</strong> Help us understand how
                  visitors interact with our website by collecting and reporting
                  information anonymously.
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Enable enhanced
                  functionality and personalisation.
                </li>
              </ul>
            </section>

            {/* 5. Third-Party Cookies */}
            <section id="third-party-cookies" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                In addition to our own cookies, we may also use various
                third-party cookies to report usage statistics of the website,
                deliver advertisements, and for other purposes. These cookies
                are governed by the respective privacy policies of the third
                parties.
              </p>
            </section>

            {/* 6. Managing Cookie Settings */}
            <section id="managing-cookies" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">
                Managing Cookie Settings
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their
                settings. You can set your browser to refuse cookies, or to
                alert you when cookies are being sent. However, if you disable
                cookies, some parts of our website may not function properly.
              </p>
            </section>

            {/* 7. Changes to This Cookie Policy */}
            <section id="changes" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">
                Changes to This Cookie Policy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or applicable laws. Any changes will be
                posted on this page with an updated revision date.
              </p>
            </section>

            {/* 8. Contact Information */}
            <section id="contact" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions or concerns about our use of cookies
                or this Cookie Policy, please contact us at:
                <br />
                <a
                  href="mailto:contact@scalepath.com"
                  className="hover:underline"
                >
                  contact@scalepath.com
                </a>
              </p>
            </section>
          </div>
        </div>
        <div className="mt-8 text-sm text-secondary font-thin text-center md:text-left">
          Last updated: 16th February, 2025
        </div>
      </div>
    </div>
  );
}
