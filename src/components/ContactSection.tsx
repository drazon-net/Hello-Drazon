import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Sparkles, ShieldCheck, Building2, Globe, DollarSign, Clock, FileText, User } from 'lucide-react';

interface ContactSectionProps {
  onOpenProposal?: () => void;
  id?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenProposal, id = 'contact' }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    website: '',
    email: '',
    service: 'Website Development',
    budget: 'NZ$500–1,000',
    timeline: 'Within 2 Weeks',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side Validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address (e.g. name@example.com).');
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage('Please enter your project details or requirements.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          company: formData.company.trim(),
          website: formData.website.trim(),
          email: formData.email.trim(),
          service: formData.service,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || 'Failed to send enquiry. Please try again or email hellodrazon@outlook.com.');
      }
    } catch (err: any) {
      console.error('Contact submit error:', err);
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      website: '',
      email: '',
      service: 'Website Development',
      budget: 'NZ$500–1,000',
      timeline: 'Within 2 Weeks',
      message: '',
    });
    setErrorMessage(null);
  };

  return (
    <section id={id} className="py-28 md:py-32 relative scroll-mt-20 bg-[#F8FAFC]/80 border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-xs font-bold text-[#1D4ED8] uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#1D4ED8]" />
            <span>Project Enquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Start Your Project With <span className="text-blue-gradient">Drazon</span>
          </h2>
          <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
            Tell us about your goals, scope, and timeline. Our team will review your enquiry and provide a detailed response within 2 business hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Contact Email Display & AI CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-[18px] p-6 sm:p-8 border border-[#E2E8F0] space-y-6 shadow-[0_10px_35px_rgba(15,23,42,0.06)]">
              <h3 className="text-2xl font-black text-[#0F172A]">Official Contact Info</h3>
              <p className="text-[#475569] text-sm leading-relaxed">
                We provide fast, responsive communication for all project inquiries across New Zealand and worldwide.
              </p>

              <div className="space-y-4 pt-2">
                {/* Official Contact Email Card */}
                <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1D4ED8] shrink-0 shadow-xs">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-[#475569] font-extrabold uppercase tracking-wider">Official Email</p>
                    <a
                      href="mailto:hello@drazon.cc.cd"
                      className="text-base sm:text-lg font-black text-[#0F172A] hover:text-[#1D4ED8] transition-colors truncate block"
                    >
                      hello@drazon.cc.cd
                    </a>
                  </div>
                </div>

                {/* Instant Proposal Card Trigger */}
                {onOpenProposal && (
                  <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-[#1D4ED8] uppercase tracking-wider">
                      <Sparkles className="w-4 h-4 text-[#1D4ED8]" />
                      <span>Instant AI Proposal</span>
                    </div>
                    <p className="text-xs text-[#475569]">
                      Need an immediate scope breakdown, timeline, and cost structure?
                    </p>
                    <button
                      onClick={onOpenProposal}
                      className="btn-primary w-full justify-center"
                    >
                      Generate Proposal in 30s
                    </button>
                  </div>
                )}

              </div>
            </div>

            {/* Response Guarantee Badge */}
            <div className="p-4.5 rounded-2xl bg-white border border-[#E2E8F0] flex items-center gap-3 text-xs text-[#475569] font-bold shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[#1D4ED8] shrink-0" />
              <span>Guaranteed response within 2 business hours.</span>
            </div>
          </div>

          {/* Right Column: Upgraded Contact Form */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[18px] p-6 sm:p-10 border border-[#E2E8F0] shadow-[0_10px_35px_rgba(15,23,42,0.06)] relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-5 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 text-[#1D4ED8] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0F172A]">Enquiry Received!</h3>
                  <p className="text-[#475569] text-sm max-w-lg mx-auto leading-relaxed">
                    Thank you <span className="text-[#1D4ED8] font-bold">{formData.name}</span>! We have received your request for <span className="text-[#0F172A] font-bold">{formData.service}</span>. A confirmation has been sent to <span className="text-[#0F172A] font-bold">{formData.email}</span>.
                  </p>

                  <div className="max-w-md mx-auto bg-[#F8FAFC] border border-[#E2E8F0] p-5 rounded-2xl text-left text-xs space-y-2 text-[#475569]">
                    <p><strong>Service:</strong> {formData.service}</p>
                    <p><strong>Estimated Budget:</strong> {formData.budget}</p>
                    <p><strong>Preferred Timeline:</strong> {formData.timeline}</p>
                    {formData.company && <p><strong>Company:</strong> {formData.company}</p>}
                  </div>

                  <p className="text-xs text-[#475569]">
                    Official Contact Email: <span className="text-[#1D4ED8] font-bold">hello@drazon.cc.cd</span>
                  </p>

                  <button
                    onClick={handleResetForm}
                    className="btn-secondary mt-4"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-[#E2E8F0] pb-4">
                    <h3 className="text-2xl font-black text-[#0F172A]">Submit A Project Enquiry</h3>
                    <p className="text-xs text-[#475569] mt-1 font-medium">Fill in the details below so we can accurately evaluate your project needs.</p>
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-600 text-xs font-bold leading-relaxed animate-in fade-in duration-200">
                      {errorMessage}
                    </div>
                  )}

                  {/* 2-Column Grid for Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#475569]" />
                        <span>Full Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] text-sm focus:border-[#1D4ED8] focus:bg-white focus:outline-none transition"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1.5 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#475569]" />
                        <span>Email Address *</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] text-sm focus:border-[#1D4ED8] focus:bg-white focus:outline-none transition"
                      />
                    </div>
                  </div>

                  {/* 2-Column Grid for Company and Website */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company Name (Optional) */}
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1.5 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-[#475569]" />
                        <span>Company Name <span className="text-[#475569] font-normal">(Optional)</span></span>
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Inc."
                        className="w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] text-sm focus:border-[#1D4ED8] focus:bg-white focus:outline-none transition"
                      />
                    </div>

                    {/* Business Website (Optional) */}
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1.5 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-[#475569]" />
                        <span>Business Website <span className="text-[#475569] font-normal">(Optional)</span></span>
                      </label>
                      <input
                        type="text"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="www.example.com"
                        className="w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] text-sm focus:border-[#1D4ED8] focus:bg-white focus:outline-none transition"
                      />
                    </div>
                  </div>

                  {/* 2-Column Grid for Service Required and Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Required */}
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1.5 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#475569]" />
                        <span>Service Required *</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] text-sm focus:border-[#1D4ED8] focus:bg-white focus:outline-none transition"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Website Maintenance">Website Maintenance</option>
                        <option value="Custom Web Application">Custom Web Application</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Estimated Budget */}
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1.5 flex items-center gap-1.5">
                        <DollarSign className="w-3.5 h-3.5 text-[#475569]" />
                        <span>Estimated Budget *</span>
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] text-sm focus:border-[#1D4ED8] focus:bg-white focus:outline-none transition"
                      >
                        <option value="Under NZ$500">Under NZ$500</option>
                        <option value="NZ$500–1,000">NZ$500–1,000</option>
                        <option value="NZ$1,000–2,500">NZ$1,000–2,500</option>
                        <option value="NZ$2,500+">NZ$2,500+</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Timeline */}
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#475569]" />
                      <span>Preferred Timeline *</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['ASAP', 'Within 2 Weeks', 'Within 1 Month', 'Flexible'].map((timeOption) => {
                        const isSelected = formData.timeline === timeOption;
                        return (
                          <button
                            key={timeOption}
                            type="button"
                            onClick={() => setFormData({ ...formData, timeline: timeOption })}
                            className={`py-3 px-3 rounded-2xl border text-xs font-bold transition cursor-pointer text-center ${
                              isSelected
                                ? 'bg-[#1D4ED8] border-transparent text-white shadow-xs'
                                : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:bg-slate-100'
                            }`}
                          >
                            {timeOption}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1.5 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#475569]" />
                      <span>Project Details *</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project goals, key feature needs, or specific questions..."
                      className="w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] text-sm focus:border-[#1D4ED8] focus:bg-white focus:outline-none transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Project Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Enquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
