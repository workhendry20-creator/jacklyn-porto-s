import React, { useState } from 'react';
import { X, FileText, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CaseFileModal({ isOpen, onClose, caseTitle }) {
  const [emailInput, setEmailInput] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailInput) return;
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setEmailInput('');
      onClose();
    }, 2400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl rounded-[2rem] border border-[#EAE5DC] shadow-[0_25px_60px_rgba(0,0,0,0.25)] overflow-hidden relative">
        {/* Top Header */}
        <div className="bg-white px-6 py-4 border-b border-[#EAE5DC] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5E13]"></span>
            <span className="font-serif font-bold text-sm text-[#111827]">
              Case Study Documentation File
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#615E57] hover:text-[#111827] rounded-xl hover:bg-[#F9FAFB] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="w-12 h-12 rounded-2xl bg-[#FFECE5] text-[#FF5E13] flex items-center justify-center mb-4">
            <FileText size={22} />
          </div>

          <h3 className="font-serif font-bold text-xl text-[#111827] mb-2">
            Request Complete Technical Case File
          </h3>
          <p className="text-xs sm:text-sm text-[#615E57] leading-relaxed mb-6">
            Access the confidential operational blueprints, Meta Ads conversion telemetry, and bilingual factory SLA matrices for <strong>{caseTitle || 'PT Alkindo Naratama Tbk'}</strong>.
          </p>

          {isSent ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-center gap-3">
              <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
              <div className="text-xs leading-relaxed">
                <strong>Request Dispatched!</strong> The dossier has been queued. Tamara will respond via email shortly.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111827] mb-1.5">
                  Corporate Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full bg-white border border-[#EAE5DC] focus:border-[#FF5E13] focus:ring-2 focus:ring-[#FF5E13]/20 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none transition-all placeholder:text-[#9CA3AF]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-[#615E57] hover:text-[#111827] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#111827] hover:bg-[#FF5E13] text-white text-xs font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 transition-all cursor-pointer shadow-xs active:scale-95"
                >
                  <span>Dispatch Request</span>
                  <Send size={13} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
