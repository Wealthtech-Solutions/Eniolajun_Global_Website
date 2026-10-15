import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const estateSlides = [
  {
    id: 1,
    title: "Crown Crest Luxury Enclave",
    location: "Old GRA, Port Harcourt",
    scope: "64 Units • Full Estate Administration",
    tag: "Residential Estate",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    stat: "99.4% Service Charge Compliance",
  },
  {
    id: 2,
    title: "Meridian Commercial Plaza",
    location: "Trans-Amadi, Port Harcourt",
    scope: "8 Floors • Total Facilities Management",
    tag: "Commercial Facility",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    stat: "100% Power & Utilities Uptime",
  },
  {
    id: 3,
    title: "Oakwood Residences & Villas",
    location: "Peter Odili Road, Port Harcourt",
    scope: "Luxury Refurbishment & Tenancy Oversight",
    tag: "Turnkey Refurbishment",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    stat: "+35% Rental Value Growth",
  },
  {
    id: 4,
    title: "Sovereign Heights Community",
    location: "Golf Estate, Port Harcourt",
    scope: "42 Units • Grounds & Landscaping Care",
    tag: "Grounds & Landscaping",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    stat: "Zero Stormwater Drainage Issues",
  },
  {
    id: 5,
    title: "Emerald Bay Executive Court",
    location: "Victoria Island, Lagos",
    scope: "50 Duplex Units • Utilities & Security Operations",
    tag: "Utilities Operations",
    image:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1200&q=80",
    stat: "24/7 Monitored Access Control",
  },
];

export default function HeroEstateSlider() {
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

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused]);

  const current = estateSlides[currentIndex];

  return (
    <div
      className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-950 h-[460px] sm:h-[500px] lg:h-[540px] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Stack */}
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
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            {/* Cinematic dark gradients for contrast and readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-transparent"></div>
          </div>
        );
      })}

      {/* Top Controls & Category Badge */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
        <span className="bg-emerald-600/90 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1.5 rounded-lg border border-emerald-400/30 uppercase tracking-wider shadow-sm">
          {current.tag}
        </span>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-xs p-1 rounded-xl border border-slate-700/80">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-[11px] font-mono text-slate-400 px-1">
            0{currentIndex + 1}/0{estateSlides.length}
          </span>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Floating Info Card */}
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <div className="bg-slate-900/95 backdrop-blur-md p-5 rounded-2xl border border-slate-700/80 shadow-xl space-y-2.5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>{current.location}</span>
            </div>
            <span className="text-[11px] font-medium text-emerald-300 bg-emerald-950/70 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
              {current.stat}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
            {current.title}
          </h3>

          <div className="flex items-center justify-between pt-1 border-t border-slate-800 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="line-clamp-1">{current.scope}</span>
            </div>
            <Link
              to="/projects"
              className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-0.5 shrink-0 ml-2"
            >
              <span>Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Progress Bar / Dots */}
        <div className="flex items-center justify-center gap-2 mt-3">
          {estateSlides.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Jump to estate slide ${dotIdx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === dotIdx
                  ? "w-8 bg-emerald-400"
                  : "w-2 bg-slate-600 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
