import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Building,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const estateSlides = [
  {
    id: 1,
    title: "Crown Crest Luxury Enclave",
    location: "Old GRA, Port Harcourt",
    scope: "64 Units • Full Estate Administration & 24/7 Access Control",
    description:
      "Premier gated residential estate with centralized water treatment, automated gate security, and comprehensive service charge accounting.",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
    tag: "Residential Estate",
  },
  {
    id: 2,
    title: "Meridian Commercial Plaza",
    location: "Trans-Amadi, Port Harcourt",
    scope: "8 Floors • Total Facilities Management & Power Logistics",
    description:
      "Corporate office tower featuring synchronized backup generator plants, central HVAC chiller systems, and round-the-clock facility maintenance.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    tag: "Commercial Facility",
  },
  {
    id: 3,
    title: "Oakwood Residences & Private Villas",
    location: "Peter Odili Road, Port Harcourt",
    scope: "Luxury Refurbishment & Tenancy Administration",
    description:
      "Full-scale architectural modernization, structural waterproofing, facade restoration, and high-yield tenancy management.",
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
    tag: "Turnkey Refurbishment",
  },
  {
    id: 4,
    title: "Sovereign Heights Gated Community",
    location: "Golf Estate, Port Harcourt",
    scope: "42 Units • Grounds, Landscaping & Drainage Upkeep",
    description:
      "Exemplary horticultural maintenance, manicured lawns, automated perimeter irrigation, and seasonal stormwater drainage management.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    tag: "Grounds & Landscaping",
  },
  {
    id: 5,
    title: "Emerald Bay Executive Court",
    location: "Victoria Island, Lagos",
    scope: "50 Duplex Units • Utilities & Operations Oversight",
    description:
      "Dedicated diesel quality management, uninterrupted water treatment operations, security patrol scheduling, and proactive preventative repairs.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    tag: "Utilities & Operations",
  },
];

export default function EstateSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? estateSlides.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === estateSlides.length - 1 ? 0 : prev + 1,
    );
  };

  // Autoplay functionality with pause-on-hover
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused]);

  return (
    <section
      className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Managed Estates Showcase Slider"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5" />
              <span>Managed Portfolio Gallery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Explore Our Managed Estates & Facilities
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              A visual glimpse into residential communities, commercial towers,
              and facilities operating under Eniolajun Global’s daily
              management.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={prevSlide}
              aria-label="Previous estate image"
              className="p-3 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white border border-slate-700 hover:border-emerald-500 transition duration-150 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-slate-400 px-1">
              0{currentIndex + 1} / 0{estateSlides.length}
            </span>
            <button
              onClick={nextSlide}
              aria-label="Next estate image"
              className="p-3 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white border border-slate-700 hover:border-emerald-500 transition duration-150 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Slider Canvas */}
        <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950">
          {estateSlides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                {/* Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transform scale-100 transition-transform duration-1000 ease-out"
                  loading={index === 0 ? "eager" : "lazy"}
                />

                {/* Subtle Gradient Overlays (Grounding contrast, not messy) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent"></div>

                {/* Tag Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-emerald-600/90 backdrop-blur-xs text-white text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-sm border border-emerald-400/30 uppercase tracking-wider">
                    {slide.tag}
                  </span>
                </div>

                {/* Bottom Content Card */}
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 z-20 max-w-2xl">
                  <div className="bg-slate-900/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-700/80 shadow-xl space-y-3">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                      <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{slide.location}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                      {slide.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {slide.description}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-slate-800 text-slate-400">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-medium text-slate-200">
                          {slide.scope}
                        </span>
                      </div>

                      <Link
                        to="/projects"
                        className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 transition"
                      >
                        <span>View project details →</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Thumbnail / Dot Indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-6">
          {estateSlides.map((slide, dotIndex) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(dotIndex)}
              aria-label={`Go to slide ${dotIndex + 1}: ${slide.title}`}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                currentIndex === dotIndex
                  ? "w-10 bg-emerald-500 shadow-sm"
                  : "w-2.5 bg-slate-700 hover:bg-slate-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
