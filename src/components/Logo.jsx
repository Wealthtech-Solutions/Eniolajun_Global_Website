import React from "react";

export default function Logo({
  className = "",
  markOnly = false,
  variant = "dark", // 'dark' (for white background) or 'light' (for dark background)
  size = "md",
}) {
  const uid = React.useId().replace(/:/g, "_");
  const bgId = `logoBg_${uid}`;
  const emeraldId = `logoEmerald_${uid}`;
  const goldId = `logoGold_${uid}`;

  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-10 h-10 sm:w-12 sm:h-12",
    xl: "w-14 h-14 sm:w-16 sm:h-16",
  };

  const markSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision EN Architectural Monogram */}
      <div
        className={`${markSize} shrink-0 transition-transform duration-200 hover:scale-105`}
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            <linearGradient id={bgId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
            <linearGradient id={emeraldId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id={goldId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FCD34D" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>

          {/* Rounded Shield Container */}
          <rect width="200" height="200" rx="44" fill={`url(#${bgId})`} />
          <rect
            x="2"
            y="2"
            width="196"
            height="196"
            rx="42"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="2"
          />

          {/* 'E' Pillar & Bars */}
          <path
            d="M 44 44 H 66 V 156 H 44 C 40.686 156 38 153.314 38 150 V 50 C 38 46.686 40.686 44 44 44 Z"
            fill={`url(#${emeraldId})`}
          />
          <path
            d="M 66 44 H 104 C 107.314 44 110 46.686 110 50 V 62 C 110 65.314 107.314 68 104 68 H 66 V 44 Z"
            fill={`url(#${emeraldId})`}
          />
          <path
            d="M 66 88 H 98 C 100.761 88 103 90.239 103 93 V 105 C 103 107.761 100.761 110 98 110 H 66 V 88 Z"
            fill={`url(#${goldId})`}
          />
          <path
            d="M 66 132 H 104 C 107.314 132 110 134.686 110 138 V 150 C 110 153.314 107.314 156 104 156 H 66 V 132 Z"
            fill={`url(#${emeraldId})`}
          />

          {/* Interconnected 'N' Beam & Pillar */}
          <path
            d="M 94 44 H 116 L 154 136 V 156 H 132 L 94 64 V 44 Z"
            fill={`url(#${goldId})`}
          />
          <path
            d="M 132 44 H 154 C 157.314 44 160 46.686 160 50 V 150 C 160 153.314 157.314 156 154 156 H 132 V 44 Z"
            fill={`url(#${emeraldId})`}
          />

          {/* Keystone Apex */}
          <polygon points="100,24 108,34 92,34" fill={`url(#${goldId})`} />
        </svg>
      </div>

      {/* Typography Brand Name */}
      {!markOnly && (
        <div className="flex flex-col">
          <span
            className={`text-xl sm:text-2xl font-bold tracking-tight leading-none ${
              variant === "light" ? "text-white" : "text-slate-900"
            }`}
          >
            ENIOLAJUN
          </span>
          <span
            className={`text-xs sm:text-xs font-semibold tracking-wider uppercase mt-1 ${
              variant === "light" ? "text-emerald-400" : "text-emerald-700"
            }`}
          >
            Global Integrated Services Ltd
          </span>
        </div>
      )}
    </div>
  );
}
