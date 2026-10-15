import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUpRight, Search } from "lucide-react";
import { services } from "../data/servicesData";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const categories = [
    "All",
    "Estate & Property",
    "Facility Operations",
    "Maintenance & Engineering",
    "Consultancy",
  ];

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);

  const filteredServices = services.filter((srv) => {
    const matchesCategory =
      selectedCategory === "All" || srv.category === selectedCategory;
    const matchesSearch =
      srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.fullDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white text-slate-900">
      {/* Editorial Header */}
      <section className="bg-slate-950 text-white py-20 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-400 uppercase">
              Contract Deliverables
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
              Our 10 Core Disciplines
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Structured operational oversight, certified valuation advisory,
              and mechanical facility management engineered to protect real
              estate asset value in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="bg-slate-50 border-b border-slate-200 py-6 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 text-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 transition font-medium tracking-wide whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <input
                type="text"
                placeholder="Filter services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-white text-sm border border-slate-300 focus:outline-none focus:border-slate-900 text-slate-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services List: Clean Editorial Layout (No Cards or Toy Icons) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 border border-slate-200">
            <p className="text-base text-slate-600">
              No services match your search.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 text-sm font-semibold uppercase tracking-wider text-emerald-800 hover:underline"
            >
              Reset filter
            </button>
          </div>
        ) : (
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {filteredServices.map((srv, idx) => {
              const originalIndex = services.findIndex((s) => s.id === srv.id);
              const displayNumber = String(originalIndex + 1).padStart(2, "0");

              return (
                <div key={srv.id} id={srv.id} className="py-16 scroll-mt-36">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    {/* Left Column: Number, Title, Description, Deliverables */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm sm:text-base font-bold text-emerald-700 tracking-wider">
                          {displayNumber}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-xs sm:text-sm uppercase tracking-widest text-slate-500 font-medium">
                          {srv.category}
                        </span>
                      </div>

                      <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900">
                        {srv.title}
                      </h2>

                      <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                        {srv.fullDesc}
                      </p>

                      {/* Clean Deliverables (No icons) */}
                      <div className="pt-4 border-t border-slate-100">
                        <p className="text-xs sm:text-sm uppercase tracking-widest text-slate-900 font-semibold mb-3">
                          Scope & Key Deliverables
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-slate-700">
                          {srv.keyDeliverables.map((item, dIdx) => (
                            <li
                              key={dIdx}
                              className="flex items-baseline gap-2"
                            >
                              <span className="text-emerald-700 font-bold shrink-0">
                                —
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <a
                          href={`https://wa.me/2347034316633?text=${encodeURIComponent(`Hello Eniolajun Global, I would like to inquire regarding ${srv.title}.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider font-semibold text-slate-900 hover:text-emerald-700 transition"
                        >
                          <span>Inquire on WhatsApp</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Architectural Photography */}
                    <div className="lg:col-span-5">
                      <div className="relative h-64 sm:h-80 overflow-hidden bg-slate-100">
                        <img
                          src={srv.image}
                          alt={srv.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-light text-white">
              Need an Integrated Service Level Agreement?
            </h3>
            <p className="text-sm sm:text-base text-slate-400 font-light">
              We bundle estate administration with ongoing preventative
              maintenance.
            </p>
          </div>
          <a
            href="tel:+2347034316633"
            className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm uppercase tracking-wider font-medium transition"
          >
            Call Management Desk (+234 703 431 6633)
          </a>
        </div>
      </section>
    </div>
  );
}
