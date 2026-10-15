import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { stats } from "../data/servicesData";
import { projects, testimonials } from "../data/projectsData";
import FullViewHeroSlider from "../components/FullViewHeroSlider";

const corePillars = [
  {
    number: "01",
    title: "Estate Stewardship & Tenancy Administration",
    scope:
      "Gated community governance, access control oversight, legal tenancy administration, and transparent service charge accounting.",
    link: "/services#estate-management",
  },
  {
    number: "02",
    title: "Total Facilities & Utilities Operations",
    scope:
      "Commercial plant management, continuous generator power logistics, industrial water treatment plants, and HSE compliance.",
    link: "/services#facility-management",
  },
  {
    number: "03",
    title: "Property Valuation & Asset Advisory",
    scope:
      "Certified market appraisals for bank collateral, financial reporting, feasibility studies, and strategic real estate sales.",
    link: "/services#property-valuation",
  },
  {
    number: "04",
    title: "Building Maintenance & Refurbishment",
    scope:
      "Planned preventative engineering, 24/7 emergency repairs, pre-purchase structural snagging audits, and complete architectural makeovers.",
    link: "/services#building-maintenance",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white text-slate-900">
      {/* 1. Full Viewport Hero Slider */}
      <FullViewHeroSlider />

      {/* 2. Architectural Metric Strip (Large Clear Digits) */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className={`${idx !== 0 ? "pt-6 md:pt-0 md:pl-8" : ""}`}
              >
                <p className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                  {item.value}
                </p>
                <p className="text-xs sm:text-sm uppercase tracking-wider text-slate-600 font-semibold mt-1.5">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Disciplines Preview (Legible Rows) */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-700 uppercase">
              Areas of Practice
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-tight">
              Integrated Real Estate & Facility Solutions
            </h2>
          </div>

          <Link
            to="/services"
            className="text-sm uppercase tracking-widest font-semibold text-slate-900 hover:text-emerald-700 inline-flex items-center gap-1.5 transition pb-1"
          >
            <span>View All 10 Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Clean Editorial Rows */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {corePillars.map((pillar) => (
            <div
              key={pillar.number}
              className="py-8 sm:py-10 group hover:bg-slate-50/80 transition-colors duration-150 px-2 sm:px-4"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline">
                {/* Number */}
                <div className="lg:col-span-1 font-mono text-base font-semibold text-slate-400 group-hover:text-emerald-700 transition">
                  {pillar.number}
                </div>

                {/* Title */}
                <div className="lg:col-span-4">
                  <h3 className="text-xl sm:text-2xl font-medium text-slate-900 group-hover:text-emerald-800 transition">
                    {pillar.title}
                  </h3>
                </div>

                {/* Scope */}
                <div className="lg:col-span-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  {pillar.scope}
                </div>

                {/* Action */}
                <div className="lg:col-span-2 text-left lg:text-right pt-2 lg:pt-0">
                  <Link
                    to={pillar.link}
                    className="text-sm font-semibold tracking-wider uppercase text-slate-900 group-hover:text-emerald-700 inline-flex items-center gap-1 transition"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Leadership & Operational Standards */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Authentic Photography of Black Corporate Executive / Technical Team */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                  alt="Eniolajun Global Real Estate Executive"
                  className="w-full h-[460px] sm:h-[540px] object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 bg-slate-950/85 backdrop-blur-xs text-white">
                  <p className="text-xs sm:text-sm uppercase tracking-widest text-emerald-400 font-semibold">
                    Leadership on the Ground
                  </p>
                  <p className="text-sm sm:text-base font-normal text-slate-200 mt-1.5 leading-snug">
                    Direct oversight by certified Nigerian surveyors, facility
                    engineers, and tenant administrators.
                  </p>
                </div>
              </div>
            </div>

            {/* Clean Numbered Principles */}
            <div className="lg:col-span-7 space-y-8 sm:space-y-10">
              <div className="space-y-3">
                <span className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-700 uppercase">
                  Operational Standards
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-tight">
                  Disciplined Asset Governance
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  We eliminate the operational decay, opacity, and deferred
                  maintenance that compromise Nigerian properties.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="space-y-2 border-t border-slate-300 pt-4">
                  <span className="font-mono text-sm sm:text-base text-emerald-700 font-semibold">
                    01
                  </span>
                  <h4 className="text-lg font-semibold text-slate-900">
                    Fiduciary Transparency
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Designated client accounts, monthly audited balance sheets,
                    and itemized reconciliation for all service charges and
                    diesel supplies.
                  </p>
                </div>

                <div className="space-y-2 border-t border-slate-300 pt-4">
                  <span className="font-mono text-sm sm:text-base text-emerald-700 font-semibold">
                    02
                  </span>
                  <h4 className="text-lg font-semibold text-slate-900">
                    Under 2-Hour Dispatch
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Immediate technical response for emergency generator faults,
                    plumbing bursts, and access control outages.
                  </p>
                </div>

                <div className="space-y-2 border-t border-slate-300 pt-4">
                  <span className="font-mono text-sm sm:text-base text-emerald-700 font-semibold">
                    03
                  </span>
                  <h4 className="text-lg font-semibold text-slate-900">
                    Vetted Artisan Database
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Certified electricians, plumbers, and HVAC specialists
                    assessed for competence and security clearance.
                  </p>
                </div>

                <div className="space-y-2 border-t border-slate-300 pt-4">
                  <span className="font-mono text-sm sm:text-base text-emerald-700 font-semibold">
                    04
                  </span>
                  <h4 className="text-lg font-semibold text-slate-900">
                    Statutory Compliance
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Full adherence to local state urban planning laws, fire
                    service certifications, and environmental regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Selected Works & Portfolio */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-700 uppercase">
              Proven Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-tight">
              Selected Managed Assets
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-sm uppercase tracking-widest font-semibold text-slate-900 hover:text-emerald-700 inline-flex items-center gap-1.5"
          >
            <span>All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Photography Grid with Clear Labels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.slice(0, 3).map((item) => (
            <div key={item.id} className="group space-y-3 sm:space-y-4">
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  loading="lazy"
                />
              </div>

              <div className="space-y-1.5">
                <p className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider">
                  {item.location} • {item.category}
                </p>
                <h3 className="text-xl sm:text-2xl font-medium text-slate-900 group-hover:text-emerald-800 transition">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 pt-1 leading-relaxed">
                  {item.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Testimonial / Stakeholder Endorsement (Architectural Multi-Testimonial Grid) */}
      <section className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-700 uppercase">
              Client Verification & Accountability
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-tight">
              Trusted by Resident Executives & Portfolio Directors
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Verifiable feedback from clients managing multi-unit residential
              communities, corporate office facilities, and high-value private
              properties across Nigeria.
            </p>
          </div>

          {/* 2 Featured Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {testimonials.slice(0, 2).map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-6 relative overflow-hidden"
              >
                {/* Top category & verified tag */}
                <div className="flex items-center justify-between text-xs sm:text-sm border-b border-slate-100 pb-4">
                  <span className="font-semibold text-emerald-800 tracking-wide uppercase">
                    {idx === 0
                      ? "Gated Estate Governance • Lagos"
                      : "Corporate Facility Operations • Lagos & Abuja"}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-700 font-medium text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Verified Retainer</span>
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-lg sm:text-xl font-light leading-relaxed text-slate-800 italic">
                  "{item.content}"
                </blockquote>

                {/* Author profile (Clean Corporate Credential - No Face Photos) */}
                <div className="pt-4 border-t border-slate-100 space-y-1">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 3rd Endorsement Banner: Private Property Investor */}
          {testimonials[2] && (
            <div className="mt-8 bg-slate-900 text-white p-8 sm:p-10 rounded-2xl border border-slate-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs sm:text-sm uppercase tracking-widest text-emerald-400 font-semibold">
                  Private Property Modernization & Valuation
                </span>
                <p className="text-base sm:text-lg text-slate-200 italic font-light leading-relaxed">
                  "{testimonials[2].content}"
                </p>
              </div>
              <div className="shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-800 space-y-1">
                <h4 className="text-base font-bold text-white">
                  {testimonials[2].name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">
                  {testimonials[2].role}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 7. High-Impact Contact CTA */}
      <section className="py-20 sm:py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
              Initiate an Estate or Facility Management Review
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Connect with our senior management desk for certified appraisals,
              site audits, or comprehensive management proposals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full sm:w-auto">
            <Link
              to="/contact"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white text-base font-medium transition tracking-wide text-center"
            >
              Get in Touch
            </Link>
            <a
              href="tel:+2347034316633"
              className="px-8 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-white text-base font-medium transition tracking-wide text-center"
            >
              +234 703 431 6633
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
