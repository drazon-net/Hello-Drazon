import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, Sparkles, MapPin, Globe } from 'lucide-react';

interface ContactSectionProps {
  preselectedPlan?: string;
  onOpenProposal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedPlan, onOpenProposal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: 'Small Business',
    budget: '$500 - $1,500',
    selectedPlan: preselectedPlan || 'Professional Plan ($1,199)',
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
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA & Contact Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get Started Today</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Ready to Build Your <span className="text-orange-gradient">Online Presence?</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Send us a message or request an instant AI proposal. We respond within 2 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Quick Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-2xl p-8 border border-white/10 space-y-6">
              <h3 className="text-2xl font-bold text-white">Let’s Talk Business</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Whether you need a brand-new website from scratch or an upgrade for your existing business site, Drazon is here to help.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* Email Direct */}
                <a
                  href="mailto:hello@drazon.agency"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/15 flex items-center justify-center text-[#FF6B00] group-hover:scale-110 transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Direct Email</p>
                    <p className="text-sm font-bold text-white">hello@drazon.agency</p>
                  </div>
                </a>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/15551234567?text=Hi%20Drazon%20Agency!%20I%20would%20like%20to%20get%20a%20website%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-emerald-950/40 hover:bg-emerald-950/60 border border-emerald-500/30 transition group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-300 font-medium">Fast WhatsApp Chat</p>
                    <p className="text-sm font-bold text-white">+1 (555) 123-4567</p>
                  </div>
                </a>

                {/* AI Instant Proposal Card Trigger */}
                <div className="p-5 rounded-xl bg-gradient-to-r from-white/5 via-[#FF6B00]/10 to-white/5 border border-[#FF6B00]/30 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FF6B00]">
                    <Sparkles className="w-4 h-4" />
                    <span>Instant AI Proposal Generator</span>
                  </div>
                  <p className="text-xs text-gray-300">
                    Want an instant breakdown of project scope, deliverables, and timeline without waiting for an email?
                  </p>
                  <button
                    onClick={onOpenProposal}
                    className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#FF6B00] hover:bg-[#FF8533] rounded-lg shadow-md cursor-pointer"
                  >
                    Generate Proposal in 30s
                  </button>
                </div>

              </div>
            </div>

            {/* Response Guarantee Badge */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-gray-300">
              <CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0" />
              <span>We value your time. Guaranteed project quote response within 2 hours.</span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-8 border border-white/10 shadow-2xl relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto">
                    Thank you <span className="text-[#FF6B00] font-bold">{formData.name}</span>! Our lead strategist will review your business requirements and email you back shortly at <span className="text-white font-bold">{formData.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 text-xs font-bold uppercase text-gray-300 bg-white/10 rounded-xl hover:bg-white/20 transition cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-2">Project Inquiry Form</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0f19] border border-white/10 text-white text-sm focus:border-[#FF6B00] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@yourbusiness.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0f19] border border-white/10 text-white text-sm focus:border-[#FF6B00] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Business / Company Name</label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Acme Coffee Shop"
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0f19] border border-white/10 text-white text-sm focus:border-[#FF6B00] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0f19] border border-white/10 text-white text-sm focus:border-[#FF6B00] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Business Industry / Type</label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0f19] border border-white/10 text-white text-sm focus:border-[#FF6B00] focus:outline-none"
                      >
                        <option value="Restaurant / Dining">Restaurant / Dining</option>
                        <option value="Fitness / Health Gym">Fitness / Health Gym</option>
                        <option value="Real Estate Brokerage">Real Estate Brokerage</option>
                        <option value="Tech Startup / SaaS">Tech Startup / SaaS</option>
                        <option value="Local Service Provider">Local Service Provider</option>
                        <option value="E-Commerce Store">E-Commerce Store</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Service & Estimated Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0f19] border border-white/10 text-white text-sm focus:border-[#FF6B00] focus:outline-none"
                      >
                        <option value="NZ$699 (Website Development)">NZ$699 (Website Development - Primary)</option>
                        <option value="NZ$299 (UI/UX Design)">NZ$299 (UI/UX Design)</option>
                        <option value="NZ$199/mo (Website Maintenance)">NZ$199/mo (Website Maintenance)</option>
                        <option value="Custom Scope / Multiple Services">Custom Scope / Multiple Services</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Project Details & Requirements</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your business goals, preferred colors, or existing website link..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0f19] border border-white/10 text-white text-sm focus:border-[#FF6B00] focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8800] hover:from-[#FF8800] hover:to-[#FF6B00] rounded-xl shadow-xl shadow-[#FF6B00]/30 transition duration-200 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Website Inquiry</span>
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
