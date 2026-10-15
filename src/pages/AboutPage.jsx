import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  ShieldCheck,
  Award,
  CheckCircle,
  Target,
  Eye,
  Users,
  ArrowRight,
  HardHat,
  FileCheck2,
  Clock,
} from "lucide-react";
import { stats } from "../data/servicesData";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/40">
              About Eniolajun Global
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              A Disciplined Partner in Real Estate & Total Facility Solutions
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Eniolajun Global Integrated Services Ltd is a premier Nigerian
              corporate entity established to bring transparency, engineering
              rigor, and structural longevity to property and facility
              management.
            </p>
          </div>
        </div>
      </section>

      {/* Main Corporate Overview */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story & Context */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3.5 py-1.5 rounded-full">
                Our Corporate Profile
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Bridging the Gap Between Property Ownership and Long-Term Value
                Preservation
              </h2>

              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Across Nigeria's rapidly urbanizing landscape, property
                  investments are frequently compromised by uncoordinated estate
                  administration, delayed preventative maintenance, and opaque
                  financial accounting.{" "}
                  <strong>Eniolajun Global Integrated Services Ltd</strong> was
                  founded to provide a dependable, institutional-standard
                  alternative.
                </p>
                <p>
                  Headquartered at No. 12, Liberty Drive, Off Alcon Road, Woji,
                  Port Harcourt, Rivers State, and providing nationwide
                  operational management across Port Harcourt, Lagos, Abuja, and
                  surrounding hubs, we manage a diverse portfolio comprising
                  residential gated communities, commercial complexes, and
                  industrial facilities.
                </p>
                <p>
                  Our multidisciplinary team unites certified estate surveyors,
                  facility managers, registered mechanical/electrical engineers,
                  and seasoned tenant relations professionals. Every project is
                  executed with strict adherence to industry regulations, health
                  and safety standards, and transparent reporting.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">
                      CAC Registered
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Fully compliant Nigerian corporate entity
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">
                      Strict HSE Standards
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Safety & environmental protocols
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1000&q=80"
                  alt="Eniolajun Global Technical Leadership & Estate Management Team"
                  className="w-full h-[460px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-xl border border-slate-200">
                  <p className="text-xs sm:text-sm font-bold text-emerald-700 uppercase tracking-wider">
                    Leadership Focus
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 mt-1">
                    Delivering accountable real estate administration and
                    technical facility oversight you can inspect and verify.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Our Strategic Vision
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                To become the most dependable and respected real estate and
                integrated facilities management brand in West Africa,
                recognized for unwavering integrity, proactive engineering
                solutions, and unmatched value preservation for property owners.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                To maximize our clients’ return on investment through systematic
                estate governance, transparent financial reporting,
                rapid-response preventative maintenance, and continuous
                optimization of utilities, assets, and living environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Principles / Standards */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3.5 py-1.5 rounded-full">
              Operational Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              The Pillars of Our Operational Excellence
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              We hold ourselves to measurable key performance indicators (KPIs)
              to ensure our clients enjoy peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-lg sm:text-xl">
                Under 2-Hour Response Time
              </h4>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Emergency maintenance issues such as power outages, plumbing
                burst pipes, and access control breakdowns receive immediate
                on-site technical attention within two hours.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <HardHat className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-lg sm:text-xl">
                Vetted Technical Artisans
              </h4>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                We maintain an accredited database of certified electricians,
                plumbers, HVAC technicians, and landscapers who undergo strict
                background and competency checks.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-lg sm:text-xl">
                Full Financial Accountability
              </h4>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Monthly service charge balance sheets, vendor invoices, utility
                reconciliation statements, and procurement receipts are open for
                audit by landlords and resident executives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Partner With a Transparent Property & Facility Partner
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Reach out to schedule an introductory consultation, on-site facility
            evaluation, or property management review.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition shadow-sm"
            >
              <span>Contact Our Management Desk</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition"
            >
              <span>Explore All 10 Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
