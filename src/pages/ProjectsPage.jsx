import React, { useState } from "react";
import { MapPin, Calendar, Award, ArrowRight, PhoneCall } from "lucide-react";
import { projects } from "../data/projectsData";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Estate Management",
    "Facility Operations",
    "Property Inspection & Refurbishment",
    "Maintenance & Landscaping",
    "Consultancy & Valuation",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/40">
              Portfolio & Track Record
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Selected Projects & Managed Facilities
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore our proven track record managing prime residential
              estates, commercial office hubs, full-scale property
              modernizations, and continuous utility operations across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-slate-100 border-b border-slate-200 py-6 sticky top-20 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2.5 rounded-xl text-sm sm:text-base font-semibold transition ${
                  activeFilter === cat
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-md backdrop-blur-xs">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-700">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {item.scope}
                    </p>

                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 pt-2 border-t border-slate-100">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-100 text-xs sm:text-sm text-emerald-950">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-800 mb-1">
                      <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Key Outcome</span>
                    </div>
                    <p className="leading-relaxed">{item.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Contact CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Have a Residential Estate or Commercial Facility to Manage?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Let our experienced facility directors conduct a preliminary site
            inspection and develop a tailored operational maintenance plan.
          </p>
          <div className="pt-2">
            <a
              href="tel:+2347034316633"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition shadow-sm"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              <span>Call +234 703 431 6633</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
