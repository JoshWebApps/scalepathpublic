import TopNav from "@/components/TopNav";
import React from "react";

export default function TermsOfUse() {
  const sections = [
    { id: "intro", title: "Introduction and Acceptance" },
    { id: "services", title: "Description of Services" },
    { id: "eligibility", title: "Eligibility and Account Security" },
    { id: "use", title: "Use of Services and User Obligations" },
    { id: "no-warranty", title: "Disclaimer and No Warranty" },
    { id: "limitation", title: "Limitation of Liability" },
    { id: "indemnification", title: "Indemnification" },
    { id: "governing", title: "Governing Law and Dispute Resolution" },
    { id: "severability", title: "Severability" },
    { id: "contact", title: "Contact Information" },
  ];

  return (
    <div className="min-h-screen bg-primary py-20">
      <TopNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl text-dark mb-8">Terms of Use</h1>

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
            {/* 1. Introduction and Acceptance */}
            <section id="intro" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">
                Introduction and Acceptance
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to ScalePath. By accessing and using our website and IT
                support services, you agree to be bound by these Terms and
                Conditions. If you do not agree, you must discontinue use
                immediately.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time.
                Continued use of our services implies acceptance of any updates.
              </p>
            </section>

            {/* 2. Description of Services */}
            <section id="services" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">
                Description of Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                ScalePath provides scalable IT support, security, and
                infrastructure management solutions tailored to businesses of
                all sizes. Our services include remote and onsite support,
                cybersecurity solutions, hardware procurement, and strategic IT
                consulting.
              </p>
              <p className="text-gray-600 leading-relaxed">
                All services are provided "as is," with no guaranteed outcome or
                result.
              </p>
            </section>

            {/* 3. Eligibility and Account Security */}
            <section id="eligibility" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">
                Eligibility and Account Security
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Access to certain ScalePath services may require account
                registration. Users are responsible for maintaining the security
                of their credentials and must notify us immediately of
                unauthorised access.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to suspend or terminate accounts found in
                violation of these Terms.
              </p>
            </section>

            {/* 4. Use of Services and User Obligations */}
            <section id="use" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">
                Use of Services and User Obligations
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Users must use ScalePath services lawfully and without
                infringing on the rights of others. Any misuse, including
                attempting to compromise security, is strictly prohibited.
              </p>
            </section>

            {/* 5. Disclaimer and No Warranty */}
            <section id="no-warranty" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">
                Disclaimer and No Warranty
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are provided "as is" and "as available," without
                warranties of any kind. ScalePath does not guarantee
                uninterrupted service or error-free performance.
              </p>
            </section>

            {/* 6. Limitation of Liability */}
            <section id="limitation" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                ScalePath is not liable for any indirect or consequential
                damages arising from service use, including data loss or
                downtime.
              </p>
            </section>

            {/* 7. Indemnification */}
            <section id="indemnification" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">Indemnification</h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to indemnify, defend, and hold harmless ScalePath, its
                affiliates, and their respective officers, directors, employees,
                and agents from any claims, damages, or expenses (including
                reasonable attorneys’ fees) arising from your use of our
                services, your violation of these Terms, or infringement of any
                rights of a third party.
              </p>
            </section>

            {/* 8. Governing Law and Dispute Resolution */}
            <section id="governing" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">
                Governing Law and Dispute Resolution
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance
                with the laws of the United Kingdom. Any disputes arising out of
                or relating to these Terms or the services will be resolved
                primarily through friendly negotiations. If a resolution cannot
                be reached, the dispute will be submitted to the exclusive
                jurisdiction of the courts located in the United Kingdom.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In certain circumstances, arbitration may be required as the
                primary means of dispute resolution.
              </p>
            </section>

            {/* 9. Severability */}
            <section id="severability" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">Severability</h2>
              <p className="text-gray-600 leading-relaxed">
                If any provision of these Terms is held to be invalid or
                unenforceable, the remaining provisions will remain in full
                force and effect.
              </p>
            </section>

            {/* 10. Contact Information */}
            <section id="contact" className="mb-10">
              <h2 className="text-2xl text-dark mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                For any questions or concerns regarding these Terms, please
                contact us at:
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
