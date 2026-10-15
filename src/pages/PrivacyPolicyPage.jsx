import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function PrivacyPolicyPage() {
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
              Corporate Governance & Compliance
            </span>
            <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              How Eniolajun Global Integrated Services Ltd collects, safeguards,
              and administers client, tenant, and visitor data under Nigerian
              data protection standards.
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
              1. Introduction & Scope
            </h2>
            <p>
              <strong>Eniolajun Global Integrated Services Ltd</strong> (“we,”
              “our,” or “the Firm”), with corporate headquarters at No. 12,
              Liberty Drive, Off Alcon Road, Woji, Port Harcourt, Rivers State,
              Nigeria, is dedicated to upholding the highest standards of data
              privacy and confidentiality.
            </p>
            <p>
              This Privacy Policy explains how we collect, process, store, and
              protect personal data collected through our corporate website,
              on-site estate management offices, maintenance request platforms,
              and service inquiries, in full compliance with the{" "}
              <strong>Nigeria Data Protection Act (NDPA)</strong> and applicable
              Nigerian regulatory directives.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-slate-900">
              2. Information We Collect
            </h2>
            <p>
              In our capacity as licensed estate managers, valuation surveyors,
              and facility engineers, we may collect the following categories of
              information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                <strong>Identification & Contact Data:</strong> Full names,
                official email addresses, telephone numbers, and corporate
                titles submitted via consultation or quotation forms.
              </li>
              <li>
                <strong>Property & Facility Details:</strong> Physical
                addresses, building specifications, asset inventories, land
                titles, and operational maintenance logs for managed
                developments.
              </li>
              <li>
                <strong>Tenant & Resident Records:</strong> Tenancy agreements,
                emergency contact details, verified artisan access rosters, and
                service charge reconciliation records.
              </li>
              <li>
                <strong>Security & Access Logs:</strong> Gatehouse visitor
                registers, vehicle plate logs, and perimeter security telemetry
                within residential estates and facilities directly under our
                supervision.
              </li>
              <li>
                <strong>Technical Browsing Data:</strong> Anonymized server
                logs, browser types, and device telemetry used solely to
                optimize site speed and mobile responsiveness.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-slate-900">
              3. Purpose & Legal Basis for Processing
            </h2>
            <p>
              We process personal and property information strictly for lawful
              operational objectives, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                Executing estate management, valuation, and technical facility
                maintenance contracts agreed with property owners or resident
                associations.
              </li>
              <li>
                Responding promptly to inquiries submitted through our website,
                direct phone lines, or official WhatsApp desks.
              </li>
              <li>
                Issuing transparent monthly service charge statements, utility
                audits, and preventative maintenance reports.
              </li>
              <li>
                Ensuring on-site safety, health, environmental (HSE), and access
                control compliance across residential and commercial properties.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-slate-900">
              4. Data Confidentiality & Disclosure
            </h2>
            <p>
              Eniolajun Global does not sell, rent, or commercialize client,
              tenant, or visitor data to third parties. Information is only
              shared under the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                <strong>Vetted Engineering Partners:</strong> Accredited MEP
                technicians, lift inspectors, and generator mechanics who
                require site access solely to perform approved maintenance work.
              </li>
              <li>
                <strong>Regulatory & Legal Authorities:</strong> Where
                disclosure is required by Nigerian court orders, law
                enforcement, or statutory bodies in accordance with Nigerian
                law.
              </li>
              <li>
                <strong>Resident Executive Committees:</strong> Aggregated,
                audited service charge and financial records as mandated by
                estate governance bylaws.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-slate-900">
              5. Data Storage, Security & Retention
            </h2>
            <p>
              We employ administrative, physical, and digital safeguards to
              prevent unauthorized access, alteration, or disclosure of records.
              Physical site records are securely archived in access-controlled
              management desks, while digital files are protected by encrypted
              cloud storage.
            </p>
            <p>
              Personal data is retained only for the duration necessary to
              fulfill the contractual, legal, and statutory accounting purposes
              for which it was collected.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-slate-900">
              6. Your Statutory Rights
            </h2>
            <p>
              Under Nigerian data protection legislation, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                Request confirmation of whether we hold your personal data.
              </li>
              <li>
                Request rectification of inaccurate or outdated contact
                information.
              </li>
              <li>
                Request deletion of non-statutory data where the processing
                basis is no longer valid.
              </li>
              <li>Lodge a complaint regarding data processing practices.</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-slate-900">
              7. Contact Our Data Governance Desk
            </h2>
            <p>
              If you have any questions, compliance inquiries, or requests
              regarding this Privacy Policy, please contact our administrative
              desk:
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
