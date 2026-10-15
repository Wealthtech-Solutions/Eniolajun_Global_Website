import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Phone, Mail, FileCheck } from "lucide-react";

export default function TermsOfUsePage() {
  const lastUpdated = "October 2026";

  return (
    <div className="bg-white text-slate-900">
      {/* Editorial Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-400 hover:text-emerald-300 font-medium mb-6 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <div className="space-y-4">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-400">
              Legal Terms & Operating Conditions
            </span>
            <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
              Terms of Use
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Rules and stipulations governing the use of this website, digital
              consultation channels, and service proposals issued by Eniolajun
              Global Integrated Services Ltd.
            </p>
            <p className="text-xs sm:text-sm text-slate-400">
              Last updated:{" "}
              <span className="text-slate-200">{lastUpdated}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-slate-900">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or utilizing the website of{" "}
              <strong>Eniolajun Global Integrated Services Ltd</strong> (“the
              Company”), you acknowledge that you have read, understood, and
              agree to be bound by these Terms of Use and our accompanying
              Privacy Policy. If you do not agree with any part of these terms,
              you must refrain from using our online portal.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-slate-900">
              2. Scope of Services & Informational Purpose
            </h2>
            <p>
              The materials, project profiles, service descriptions, and metrics
              displayed on this website are provided for general informational
              purposes regarding our corporate capabilities in estate
              administration, commercial facility management, valuation, and
              infrastructure maintenance across Nigeria.
            </p>
            <p>
              Nothing on this website constitutes a binding formal contract,
              guarantee of specific valuation outcome, or unconditioned legal
              tenancy offer until an executed Service Level Agreement (SLA) or
              Property Management Contract is signed between Eniolajun Global
              Integrated Services Ltd and the relevant client or landlord.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-slate-900">
              3. Service Proposals, Estimates & Site Inspections
            </h2>
            <p>
              Preliminary quotations generated via digital consultation forms,
              email inquiries, or WhatsApp interactions are preliminary
              estimates based on client-provided specifications. Final service
              charges, maintenance retainers, and operational scopes remain
              subject to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                Comprehensive physical on-site mechanical and structural
                inspection.
              </li>
              <li>
                Verification of land title, architectural blueprints, and
                facility equipment health.
              </li>
              <li>Mutual execution of a formalized Management Contract.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-slate-900">
              4. Intellectual Property & Brand Ownership
            </h2>
            <p>
              All trademarks, the architectural “EN” monogram, corporate logos,
              textual content, operational frameworks, and proprietary layout
              designs on this website are the intellectual property of Eniolajun
              Global Integrated Services Ltd. You may not reproduce, duplicate,
              distribute, or reverse-engineer any portion of this site without
              prior written authorization from our management board.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-slate-900">
              5. Acceptable Website Usage
            </h2>
            <p>
              When interacting with our digital consultation forms, live
              WhatsApp desks, or inquiry channels, users agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                Provide accurate, authentic contact and property ownership
                details.
              </li>
              <li>
                Refrain from transmitting defamatory, fraudulent, or unlawful
                materials.
              </li>
              <li>
                Avoid deploying automated bots, crawlers, or malicious scripts
                designed to disrupt website operation or compromise security.
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-slate-900">
              6. Limitation of Liability
            </h2>
            <p>
              Eniolajun Global strives to maintain accurate and updated
              information across this website. However, to the maximum extent
              permitted by Nigerian law, the Company shall not be liable for any
              direct, indirect, or consequential damages resulting from website
              downtime, telecommunications failure, or reliance on preliminary
              online materials prior to formalized physical appraisal.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-slate-900">
              7. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms of Use are governed by and construed in accordance
              with the laws of the Federal Republic of Nigeria. Any disputes
              arising from or in connection with the use of this website shall
              be subject to the jurisdiction of the competent courts of Rivers
              State, Nigeria.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-slate-900">
              8. Inquiries & Contact
            </h2>
            <p>
              For legal inquiries or corporate verification regarding these
              Terms:
            </p>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-sm sm:text-base">
              <p className="font-semibold text-slate-900">
                Eniolajun Global Integrated Services Ltd
              </p>
              <div className="flex items-start gap-2 text-slate-700">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-1" />
                <span>
                  No. 12, Liberty Drive, Off Alcon Road, Woji, Port Harcourt,
                  Rivers State, Nigeria.
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>+234 703 431 6633 / +234 913 349 3380</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>eniolajunglobal@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
