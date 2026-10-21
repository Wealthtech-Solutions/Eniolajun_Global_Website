import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 shadow-2xs">
      {/* Top Utility Bar (Mobile Cleaned) */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:+2347034316633"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="font-medium">+234 703 431 6633</span>
            </a>
            <a
              href="mailto:eniolajunglobal@gmail.com"
              className="hidden md:flex items-center gap-1.5 hover:text-emerald-400 transition"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>eniolajunglobal@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Mon – Sat: 8AM – 6PM</span>
            </div>
            <span className="hidden lg:inline text-slate-700">|</span>
            <span className="hidden lg:inline text-slate-400">
              Registered Corporate Entity • Licensed Estate Managers
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="focus:outline-none shrink-0 flex items-center"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Logo variant="dark" size="lg" />
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? "text-emerald-700 font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-emerald-700 transition duration-150 shadow-xs"
          >
            <span>Request a Quote</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-slate-800 hover:bg-slate-100 active:bg-slate-200 focus:outline-none transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-900" />
            ) : (
              <Menu className="w-6 h-6 text-slate-900" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Enhanced Full-Height Slide) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-5 pt-4 pb-8 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150 shadow-xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition ${
                  isActive(link.path)
                    ? "text-emerald-700 bg-emerald-50 font-semibold"
                    : "text-slate-800 hover:bg-slate-50 active:bg-slate-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-2.5">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-4 py-3.5 rounded-xl text-white bg-slate-900 hover:bg-emerald-700 active:scale-98 text-center font-medium transition text-sm shadow-xs"
            >
              Request a Management Proposal
            </Link>

            <a
              href="https://wa.me/2347034316633?text=Hello%20Eniolajun%20Global,%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-emerald-800 bg-emerald-50 hover:bg-emerald-100 font-semibold transition text-sm border border-emerald-200/60"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Chat on WhatsApp (+234 703 431 6633)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
