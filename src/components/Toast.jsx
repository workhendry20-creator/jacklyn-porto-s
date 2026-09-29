import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, visible, onClose }) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom duration-300">
      <div className="bg-[#111827] text-white px-5 py-3.5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.25)] border border-white/10 flex items-center gap-3 backdrop-blur-md">
        <div className="w-7 h-7 rounded-full bg-[#FF5E13]/20 text-[#FF5E13] flex items-center justify-center shrink-0">
          <CheckCircle2 size={16} />
        </div>
        <div>
          <div className="text-xs font-bold text-white tracking-wide">
            Copied to Clipboard!
          </div>
          <div className="text-[11px] text-[#D1D5DB] font-mono">
            {message}
          </div>
        </div>
        <button
          onClick={onClose}
          className="ml-2 text-gray-400 hover:text-white p-1 transition-colors cursor-pointer"
          aria-label="Dismiss toast"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
