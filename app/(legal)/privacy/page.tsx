import TopNav from "@/components/TopNav";
import React from "react";

export default function PrivacyPolicy() {
  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "data-collection", title: "Information Collection" },
    { id: "data-use", title: "How We Use Your Information" },
    { id: "data-sharing", title: "Information Sharing and Disclosure" },
    { id: "data-security", title: "Data Security" },
    { id: "cookies", title: "Cookies and Tracking Technologies" },
    { id: "your-rights", title: "Your Rights" },
    { id: "changes", title: "Changes to This Privacy Policy" },
    { id: "contact", title: "Contact Information" },
  ];

  return (
    <div className="min-h-screen bg-primary py-20">
      <TopNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl text-dark mb-8">Privacy Policy</h1>

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
                Welcome to ScalePath's Privacy Policy. Your privacy is important
                to us, and this policy explains how we collect, use, and protect
                your personal information. By using our website and services,
                you agree to the collection and use of your information in
                accordance with this policy.
              </p>
            </section>

            {/* 2. Information Collection */}
            <section id="data-collection" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">
                Information Collection
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect various types of information in order to provide and
                improve our services to you. This includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-4">
                <li>
                  <strong>Personal Information:</strong> Information that can be
                  used to identify you, such as your name, email address, and
                  telephone number.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information on how you interact
                  with our website, including your IP address, browser type,
                  pages visited, and the time and date of your visit.
                </li>
                <li>
                  <strong>Technical Data:</strong> Details about your device,
                  operating system, and other technical information that helps
                  us understand user behaviour.
                </li>
              </ul>
            </section>

            {/* 3. How We Use Your Information */}
            <section id="data-use" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-4">
                <li>
                  Provide, operate, and maintain our website and services.
                </li>
                <li>Analyse usage trends and improve our offerings.</li>

                <li>
                  Communicate with you, including responding to your enquiries
                  and providing customer support.
                </li>
              </ul>
            </section>

            {/* 4. Information Sharing and Disclosure */}
            <section id="data-sharing" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">
                Information Sharing and Disclosure
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-4">
                <li>
                  <strong>Legal Authorities:</strong> When required by law or to
                  protect our rights, we may disclose your information to
                  regulatory bodies or law enforcement.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger,
                  acquisition, or sale of assets, your information may be
                  transferred as part of the transaction.
                </li>
              </ul>
            </section>

            {/* 5. Data Security */}
            <section id="data-security" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">Data Security</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We take reasonable steps to protect your personal information
                from unauthorised access, alteration, disclosure, or
                destruction. However, no method of transmission over the
                internet or electronic storage is completely secure.
              </p>
              This site is protected by reCAPTCHA and the Google
              <a href="https://policies.google.com/privacy">
                Privacy Policy
              </a>{" "}
              and
              <a href="https://policies.google.com/terms">
                {" "}
                Terms of Service
              </a>{" "}
              apply.
            </section>

            {/* 6. Cookies and Tracking Technologies */}
            <section id="cookies" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to monitor
                activity on our website and store certain information. For
                details on how we use cookies, please refer to our{" "}
                <a href="/cookies" className="text-dark hover:underline">
                  Cookie Policy
                </a>
                .
              </p>
            </section>

            {/* 7. Your Rights */}
            <section id="your-rights" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have the right to access,
                correct, or delete your personal information. You may also have
                the right to object to or restrict certain processing
                activities. To exercise these rights, please contact us using
                the details provided below.
              </p>
            </section>

            {/* 8. Changes to This Privacy Policy */}
            <section id="changes" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or legal requirements. Any changes will
                be posted on this page with an updated revision date.
              </p>
            </section>

            {/* 9. Contact Information */}
            <section id="contact" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy,
                please contact us at:
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
