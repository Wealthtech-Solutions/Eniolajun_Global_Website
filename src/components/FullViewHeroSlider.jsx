import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const estateSlides = [
  {
    id: 1,
    title: "Crown Crest Luxury Enclave",
    location: "Old GRA, Port Harcourt",
    type: "Gated Residential Community",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 2,
    title: "Meridian Commercial Complex",
    location: "Trans-Amadi, Port Harcourt",
    type: "Corporate Office Tower",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 3,
    title: "Oakwood Residences",
    location: "Peter Odili Road, Port Harcourt",
    type: "Luxury Villa Refurbishment",
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 4,
    title: "Sovereign Heights Enclave",
    location: "Golf Estate, Port Harcourt",
    type: "Grounds & Landscaped Enclave",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 5,
    title: "Emerald Metropolitan Court",
    location: "Victoria Island, Lagos",
    type: "Residential Utilities Operations",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80",
  },
];

export default function FullViewHeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  // Touch Swipe Gesture Handlers for Mobile Devices
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      // Swiped Left -> Next
      nextSlide();
    } else if (diff < -45) {
      // Swiped Right -> Prev
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused]);

  const current = estateSlides[currentIndex];

  return (
    <section
      className="relative w-full h-[82vh] sm:h-[88vh] min-h-[520px] max-h-[900px] flex flex-col justify-between overflow-hidden bg-slate-950 text-white select-none border-b border-slate-800"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Estate Showcase Hero"
    >
      {/* Background Slides */}
      {estateSlides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive
                ? "opacity-100 z-0"
                : "opacity-0 -z-10 pointer-events-none"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            {/* Dark Vignette Overlay for High Contrast */}
            <div className="absolute inset-0 bg-slate-950/70 sm:bg-slate-950/65"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/40"></div>
          </div>
        );
      })}

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-28 w-full">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-400 uppercase">
            Estate Stewardship • Facilities • Valuations
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            Preserving Asset Longevity & Value Across{" "}
            <span className="text-emerald-400 font-bold">Nigeria</span>.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-xl font-normal">
            Disciplined estate governance, 24/7 technical operations, and
            certified property appraisals for owners, corporations, and
            residents.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 sm:py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-base sm:text-sm transition tracking-wide text-center"
            >
              <span>Request a Proposal</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 sm:py-3.5 bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium text-base sm:text-sm transition tracking-wide text-center"
            >
              <span>Our 10 Services</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar (Mobile Optimized with Clear Text) */}
      <div className="relative z-10 w-full border-t border-white/15 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-2">
          {/* Active Estate Details */}
          <div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-2">
            <span className="text-xs sm:text-sm font-mono text-emerald-400 font-semibold tracking-wider shrink-0">
              0{currentIndex + 1} / 0{estateSlides.length}
            </span>
            <div className="h-4 w-px bg-white/20 shrink-0"></div>
            <div className="truncate">
              <span className="text-sm sm:text-base font-medium text-white tracking-wide truncate block sm:inline">
                {current.title}
              </span>
              <span className="text-xs sm:text-sm text-slate-300 hidden sm:inline sm:ml-2">
                — {current.location}
              </span>
            </div>
          </div>

          {/* Controls: Touch-friendly buttons */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="p-2 sm:p-2.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 active:scale-95 transition"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="p-2 sm:p-2.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 active:scale-95 transition"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
