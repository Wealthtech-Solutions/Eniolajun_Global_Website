import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Zap,
  Scale,
  HardHat,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { stats } from "../data/servicesData";
import { projects, testimonials } from "../data/projectsData";
import FullViewHeroSlider from "../components/FullViewHeroSlider";

const featuredServices = [
  {
    title: "Estate Management",
    desc: "Comprehensive residential estate stewardship, bylaws enforcement, and transparent service charge collection.",
    link: "/services#estate-management",
    icon: Building2,
  },
  {
    title: "Facilities & Utilities",
    desc: "24/7 central generator power distribution, borehole water treatment plants, and facility engineering.",
    link: "/services#facility-management",
    icon: Zap,
  },
  {
    title: "Property Valuation",
    desc: "Certified appraisals for mortgage collateral, statutory accounting, and investment risk advisory.",
    link: "/services#property-valuation",
    icon: Scale,
  },
  {
    title: "Building Maintenance",
    desc: "Planned preventative engineering, pre-purchase structural snagging, and architectural renovations.",
    link: "/services#building-maintenance",
    icon: HardHat,
  },
  {
    title: "Commercial Janitorial",
    desc: "Industrial sanitation programs, scheduled corporate cleaning, and disciplined waste logistics.",
    link: "/services#cleaning-services",
    icon: Sparkles,
  },
  {
    title: "Perimeter Security",
    desc: "Monitored visitor access control, trained guard deployment, and perimeter surveillance oversight.",
    link: "/services#security-services",
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  return (
    <div className="bg-white text-slate-900">
      {/* 1. Full Viewport Hero Slider */}
      <FullViewHeroSlider />

      {/* 2. Architectural Metric Strip (Large Clear Digits) */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className={`
                  py-5 md:py-0
                  ${idx % 2 === 0 ? "pr-4 sm:pr-8 border-r border-slate-200" : "pl-4 sm:pl-8"}
                  ${idx < 2 ? "border-b border-slate-200 md:border-b-0" : ""}
                  ${idx !== 0 ? "md:border-l md:border-slate-200 md:pl-8" : "md:pl-0"}
                  md:border-r-0
                `}
              >
                <p className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900">
                  {item.value}
                </p>
                <p className="text-[11px] sm:text-xs md:text-sm uppercase tracking-wider text-slate-600 font-semibold mt-1.5 leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Disciplines (Lightweight, Non-Detailed Grid) */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-700 uppercase">
              Areas of Practice
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Real Estate & Integrated Facility Services
            </h2>
          </div>

          <Link
            to="/services"
            className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-slate-900 hover:text-emerald-700 inline-flex items-center gap-1.5 transition pb-1 shrink-0"
          >
            <span>View All 10 Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Lightweight Grid (3 on mobile, 6 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featuredServices.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={idx}
                to={service.link}
                className={`group relative bg-white border border-slate-200 rounded-xl p-6 hover:border-emerald-600/70 hover:shadow-md transition-all duration-200 flex-col justify-between ${
                  idx >= 3 ? "hidden md:flex" : "flex"
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200 shadow-2xs">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold uppercase tracking-wider text-slate-500 group-hover:text-emerald-700 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile View All Services Button */}
        <div className="mt-8 text-center md:hidden">
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 bg-slate-900 text-white rounded-xl text-xs font-semibold uppercase tracking-wider active:scale-95 transition"
          >
            <span>View All 10 Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
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
                  src="/images/corporate/eniolajun-operations-director.jpg"
                  alt="Eniolajun Global Real Estate & Facility Management Operations"
                  className="w-full h-[460px] sm:h-[540px] object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 bg-slate-950/85 backdrop-blur-xs text-white">
                  <p className="text-xs sm:text-sm uppercase tracking-widest text-emerald-400 font-semibold">
                    Leadership on the Ground
                  </p>
                  <p className="text-sm sm:text-base font-normal text-slate-200 mt-1.5 leading-snug">
                    Direct operational oversight coordinated with accredited
                    Nigerian valuation surveyors, facility engineers, and tenant
                    administrators.
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
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
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
                    Statutory & CAC Compliance (RC 1441429)
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Duly incorporated with the Corporate Affairs Commission (RC
                    1441429), operating in full adherence to state urban
                    planning laws, fire service certifications, and HSE
                    regulations.
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
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

      {/* 6. Testimonial / Stakeholder Endorsement */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8 sm:mb-10 space-y-2">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-700 uppercase">
              Client Accountability
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Trusted by Resident Executives & Property Owners
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Verifiable feedback from clients managing multi-unit residential
              communities and commercial facilities.
            </p>
          </div>

          {/* Compact 3-Column Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {testimonials.map((item, idx) => {
              const categories = [
                "Gated Estate Governance",
                "Commercial Asset Operations",
                "Private Property Valuation",
              ];
              return (
                <div
                  key={idx}
                  className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
                >
                  <div className="space-y-3">
                    {/* Top category & verified tag */}
                    <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-2.5">
                      <span className="font-semibold text-emerald-800 tracking-wide uppercase text-[11px]">
                        {categories[idx] || "Client Endorsement"}
                      </span>
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-medium text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Verified</span>
                      </span>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                      "{item.content}"
                    </blockquote>
                  </div>

                  {/* Author profile */}
                  <div className="pt-3 border-t border-slate-100 space-y-0.5">
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium leading-snug">
                      {item.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. High-Impact Contact CTA */}
      <section className="py-20 sm:py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
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
