import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

interface ContactPageProps {
  onOpenProposal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenProposal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website Development (NZ$699)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="py-24 sm:py-28 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#059669] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Contact <span className="text-emerald-gradient">Drazon</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Have a question or ready to build your website? Send us a message below or email us directly.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Official Contact Email Display & AI CTA */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 space-y-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Official Contact Info</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We provide fast responses for all client inquiries. Reach out to our lead team directly via email.
            </p>

            <div className="space-y-4 pt-2">
              {/* Official Contact Email Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#10B981] shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Official Contact Email</p>
                  <a
                    href="mailto:hello@drazon.cc.cd"
                    className="text-base font-black text-slate-900 hover:text-[#10B981] transition-colors"
                  >
                    hello@drazon.cc.cd
                  </a>
                </div>
              </div>

              {/* Instant Proposal Card Trigger */}
              <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#059669] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#10B981]" />
                  <span>Instant Project Proposal</span>
                </div>
                <p className="text-xs text-slate-600">
                  Want an immediate project breakdown, timeline, and feature list generated for your business?
                </p>
                <button
                  onClick={onOpenProposal}
                  className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#10B981] hover:bg-[#059669] rounded-xl shadow-md transition cursor-pointer"
                >
                  Generate Proposal in 30s
                </button>
              </div>

            </div>
          </div>

          {/* Response Guarantee Badge */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3 text-xs text-slate-600 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-[#10B981] shrink-0" />
            <span>Guaranteed email response within 2 business hours.</span>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl relative">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-[#10B981] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Message Sent Successfully!</h2>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you <span className="text-[#059669] font-bold">{formData.name}</span>! We have received your message and will reply to <span className="text-slate-900 font-bold">{formData.email}</span> shortly.
                </p>
                <p className="text-xs text-slate-500">
                  Official Contact: <span className="text-[#10B981]">hello@drazon.cc.cd</span>
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 text-xs font-bold uppercase text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-xl font-bold text-slate-900 mb-2">Send Us A Message</h2>

                {/* Name Field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-[#10B981] focus:outline-none"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-[#10B981] focus:outline-none"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Interested Service</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-[#10B981] focus:outline-none"
                  >
                    <option value="Website Development (NZ$699)">Website Development (NZ$699 One-time)</option>
                    <option value="UI/UX Design (NZ$299)">UI/UX Design (NZ$299 One-time)</option>
                    <option value="Website Maintenance (NZ$199/mo)">Website Maintenance (NZ$199/month)</option>
                    <option value="Custom Scope / General Question">Custom Scope / General Question</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Message *</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project requirements or how we can help..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-[#10B981] focus:outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#10B981] rounded-xl shadow-lg shadow-[#10B981]/25 transition duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};
