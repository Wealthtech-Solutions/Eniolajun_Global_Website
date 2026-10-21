import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { services } from "../data/servicesData";
import Logo from "./Logo";

const CURRENT_YEAR = 2026;

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-28 md:pb-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block focus:outline-none">
              <Logo variant="light" size="lg" />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              A trusted Nigerian estate management, valuation, and total
              facility administration firm (CAC Registration No: RC 1441429). We
              protect asset value, optimize operational efficiency, and deliver
              sustainable real estate solutions for landlords, corporations, and
              residential estates.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-slate-800/80 px-3 py-2 rounded-lg border border-slate-700/60 w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                CAC Registered Corporate Entity (RC 1441429) • Licensed Estate
                Managers
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-emerald-400 transition inline-flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-emerald-400 transition inline-flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-emerald-400 transition inline-flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-emerald-400 transition inline-flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-emerald-400 transition inline-flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-emerald-400 transition inline-flex items-center gap-1.5 text-slate-400"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-use"
                  className="hover:text-emerald-400 transition inline-flex items-center gap-1.5 text-slate-400"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {services.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/services#${srv.id}`}
                    className="hover:text-emerald-400 transition line-clamp-1"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1 pt-1"
                >
                  View all 10 services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase">
              Head Office & Inquiries
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="block">
                    No. 12, Liberty Drive, Off Alcon Road, Woji, Port Harcourt,
                    Rivers State, Nigeria.
                  </span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=No.+12+Liberty+Drive+Off+Alcon+Road+Woji+Port+Harcourt+Rivers+State+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-400 hover:text-emerald-300 underline underline-offset-2 inline-block"
                  >
                    View Head Office on Google Maps →
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="tel:+2347034316633"
                    className="hover:text-white transition"
                  >
                    +234 703 431 6633
                  </a>
                  <a
                    href="tel:+2349133493380"
                    className="hover:text-white transition text-xs sm:text-sm text-slate-400"
                  >
                    +234 913 349 3380
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="mailto:eniolajunglobal@gmail.com"
                  className="hover:text-white transition break-all"
                >
                  eniolajunglobal@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/2347034316633?text=Hello%20Eniolajun%20Global,%20I%20would%20like%20to%20make%20an%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Live Desk</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-slate-400 gap-4 md:pr-24 lg:pr-28">
          <p>
            © {CURRENT_YEAR} Eniolajun Global Integrated Services Ltd (RC
            1441429). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-start md:justify-end gap-x-4 gap-y-2">
            <Link
              to="/privacy-policy"
              className="text-slate-400 hover:text-emerald-400 transition"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              to="/terms-of-use"
              className="text-slate-400 hover:text-emerald-400 transition"
            >
              Terms of Use
            </Link>
            <span>•</span>
            <span className="text-slate-400">
              Developed by{" "}
              <a
                href="https://wealthtechsolutions.site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-2 transition"
              >
                Wealthtech Solutions
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
