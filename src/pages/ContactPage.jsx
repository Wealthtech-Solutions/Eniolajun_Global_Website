import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { services } from "../data/servicesData";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Estate Management",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate prompt form handling
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Eniolajun Global, my name is ${formData.fullName || "a client"}. I am inquiring regarding ${formData.service} for my property in ${formData.location || "Nigeria"}. Notes: ${formData.message || "Please contact me."}`;
    const url = `https://wa.me/2347034316633?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const faqs = [
    {
      q: "How quickly can Eniolajun Global commence facility or estate management?",
      a: "Following an initial on-site physical inspection and agreement on the Scope of Work (SOW), our team can mobilize within 3 to 5 business days with security protocols, technical maintenance schedules, and financial administration structures.",
    },
    {
      q: "Do you manage residential estates as well as commercial towers?",
      a: "Yes. We manage gated residential communities, luxury apartment complexes, multi-tenanted corporate plazas, commercial logistics centers, and retail parks across Nigeria.",
    },
    {
      q: "How is service charge collection and accounting handled?",
      a: "We operate designated transparent client bank accounts with monthly reconciliation. Resident and landlord executives receive itemized balance sheets showing collections, vendor payments, diesel supplies, and contingency reserves.",
    },
    {
      q: "Are your building maintenance artisans certified?",
      a: "All electrical, plumbing, HVAC, and generator technicians undergo rigorous technical competency assessments, background vetting, and work under registered supervisory engineers.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/40">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Let's Discuss Your Estate & Facility Management Requirements
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Whether you need transparent estate administration, a certified
              valuation report, or urgent facility maintenance, our licensed
              team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info & Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full">
                  Contact Channels
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Prompt, Professional Communication
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Reach out directly via phone, WhatsApp, or email. For
                  emergency facility failures, our technicians are dispatched on
                  rapid alert.
                </p>
              </div>

              {/* Cards */}
              <div className="space-y-4">
                <a
                  href="tel:+2347034316633"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-500 transition group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 group-hover:bg-emerald-600 text-white flex items-center justify-center shrink-0 transition">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Direct Phone Lines
                    </h4>
                    <p className="text-sm text-emerald-700 font-semibold mt-0.5">
                      +234 703 431 6633
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Office: +234 913 349 3380
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Available Mon – Sat (8:00 AM – 6:00 PM)
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/2347034316633?text=Hello%20Eniolajun%20Global,%20I%20would%20like%20to%20make%20an%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-500 transition group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 transition">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      WhatsApp Instant Desk
                    </h4>
                    <p className="text-sm text-emerald-700 font-semibold mt-0.5">
                      +234 703 431 6633
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Instant quotes, site inspections & inquiries
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:eniolajunglobalservices@gmail.com"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-500 transition group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 group-hover:bg-emerald-600 text-white flex items-center justify-center shrink-0 transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Official Email
                    </h4>
                    <p className="text-sm text-slate-700 font-medium mt-0.5 break-all">
                      eniolajunglobalservices@gmail.com
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Formal RFPs, tenders & management proposals
                    </p>
                  </div>
                </a>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <MapPin className="w-4 h-4 text-emerald-700" />
                    <span>Head Office & Google Maps Location</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    No. 12, Liberty Drive, Off Alcon Road, Woji, Port Harcourt,
                    Rivers State, Nigeria.
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=No.+12+Liberty+Drive+Off+Alcon+Road+Woji+Port+Harcourt+Rivers+State+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 pt-1"
                  >
                    <span>Open Head Office on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
                    Serving residential estates and corporate facilities across
                    Rivers State, Lagos, Abuja, and nationwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
                  Request a Formal Consultation / Quote
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Fill out the form below. A senior estate or facility manager
                  will review your submission and contact you within 24 hours.
                </p>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in">
                    <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">
                      Thank You, {formData.fullName}!
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed max-w-md mx-auto">
                      Your inquiry regarding <strong>{formData.service}</strong>{" "}
                      has been received by Eniolajun Global Integrated Services.
                      We will review the details and reach out to you promptly
                      at <strong>{formData.phone || formData.email}</strong>.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                      <button
                        onClick={handleWhatsAppDirect}
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        <span>Continue on WhatsApp Now</span>
                      </button>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            fullName: "",
                            email: "",
                            phone: "",
                            service: "Estate Management",
                            location: "",
                            message: "",
                          });
                        }}
                        className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Babatunde Adeleke"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:border-emerald-600 text-slate-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                          Phone Number (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 08012345678"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:border-emerald-600 text-slate-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. name@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:border-emerald-600 text-slate-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                          Property Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g. Lekki, Ikoyi, Abuja"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:border-emerald-600 text-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Service of Interest *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:border-emerald-600 text-slate-900 bg-white"
                      >
                        {services.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title}
                          </option>
                        ))}
                        <option value="Bundled Estate & Facility Contract">
                          Bundled Estate & Facility Contract
                        </option>
                        <option value="General Consultation">
                          General Consultation
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Project / Property Details
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Briefly describe your property type (e.g., number of units, size of building, current challenges, or specific services needed)..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:border-emerald-600 text-slate-900 resize-none"
                      ></textarea>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white text-sm font-semibold transition flex items-center justify-center gap-2 shadow-sm"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppDirect}
                        className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send via WhatsApp</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Google Maps Embed for Head Office Verification */}
          <div className="mt-12 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full">
                  Google Maps Location
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                  Visit Our Head Office in Woji, Port Harcourt
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  No. 12, Liberty Drive, Off Alcon Road, Woji, Port Harcourt,
                  Rivers State, Nigeria
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=No.+12+Liberty+Drive+Off+Alcon+Road+Woji+Port+Harcourt+Rivers+State+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition shrink-0"
              >
                <MapPin className="w-4 h-4" />
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
              <iframe
                title="Eniolajun Global Integrated Services Ltd Head Office - No. 12 Liberty Drive, Off Alcon Road, Woji, Port Harcourt"
                src="https://maps.google.com/maps?q=Liberty%20Drive,%20Off%20Alcon%20Road,%20Woji,%20Port%20Harcourt,%20Rivers%20State,%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Common Questions About Engaging Eniolajun Global
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base hover:text-emerald-700 transition"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-2" />
                    )}
                  </button>
                  <div
                    className={`px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white ${
                      isOpen ? "block" : "hidden"
                    }`}
                  >
                    {faq.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
