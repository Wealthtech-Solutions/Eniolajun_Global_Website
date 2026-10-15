import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import Logo from "./Logo";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  const phoneNumber = "2347034316633";
  const defaultMessage =
    "Hello Eniolajun Global, I would like to inquire about your estate and facility management services.";

  const handleSendMessage = (e) => {
    e.preventDefault();
    const textToSend = customMsg.trim() || defaultMessage;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-sm sm:w-96 rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="bg-slate-900 p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Logo markOnly size="md" />
              <div>
                <h4 className="font-semibold text-sm leading-tight text-white">
                  Eniolajun Global Desk
                </h4>
                <p className="text-xs text-emerald-400 flex items-center gap-1 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                  Online | Typically replies promptly
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg transition"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 bg-slate-50 text-xs text-slate-600 border-b border-slate-100">
            <div className="bg-white p-3 rounded-xl shadow-xs border border-slate-200 text-slate-700 leading-relaxed">
              👋 Welcome to{" "}
              <strong>Eniolajun Global Integrated Services</strong>. How can our
              facility & estate managers assist you today?
            </div>
          </div>

          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-white flex items-center gap-2"
          >
            <input
              type="text"
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 text-xs sm:text-sm px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600 text-slate-800"
            />
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 rounded-xl transition flex items-center justify-center shrink-0 shadow-sm"
              aria-label="Send via WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-200"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="text-sm font-semibold pr-1 hidden sm:inline-block">
          Chat with Us
        </span>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-200"></span>
        </span>
      </button>
    </div>
  );
}
