import React from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, FileText } from "lucide-react";

export default function MobileBottomBar() {
  const whatsappUrl =
    "https://wa.me/2347034316633?text=Hello%20Eniolajun%20Global,%20I%20would%20like%20to%20inquire%20about%20your%20services.";

  return (
    <aside
      aria-label="Mobile Quick Actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800/80 px-4 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Instant Call */}
        <a
          href="tel:+2347034316633"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 active:scale-95 transition"
        >
          <Phone className="w-5 h-5 text-emerald-400 mb-1" />
          <span className="text-xs font-semibold tracking-tight">
            Call Desk
          </span>
        </a>

        {/* Instant WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium active:scale-95 transition shadow-sm"
        >
          <MessageCircle className="w-5 h-5 mb-1" />
          <span className="text-xs font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* Quick Quote / Contact */}
        <Link
          to="/contact"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 active:scale-95 transition"
        >
          <FileText className="w-5 h-5 text-emerald-400 mb-1" />
          <span className="text-xs font-semibold tracking-tight">
            Get Quote
          </span>
        </Link>
      </div>
    </aside>
  );
}
