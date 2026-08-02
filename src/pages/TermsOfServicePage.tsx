import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, CreditCard, ShieldAlert, Award, Scale, ArrowLeft, Mail, Check } from 'lucide-react';

export const TermsOfServicePage: React.FC = () => {
  const lastUpdated = "August 2, 2026";

  return (
    <div className="py-24 sm:py-28 relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-[#10B981] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#059669] uppercase tracking-wider">
          <FileCheck className="w-3.5 h-3.5 text-[#10B981]" />
          <span>Legal Agreement</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Terms of <span className="text-emerald-gradient">Service</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Please read these Terms of Service carefully before commissioning custom website development, UI/UX design, or website maintenance from Drazon.
        </p>
        <p className="text-xs font-semibold text-slate-500">
          Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Main Content Card */}
      <div className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-xl space-y-10 text-slate-700 text-sm leading-relaxed">
        
        {/* Section 1 */}
        <section className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-[#10B981]">
              <Scale className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms & Agency Scope</h2>
          </div>
          <p>
            By accessing drazon.net, requesting an AI project proposal, or entering into an agreement with Drazon ("Agency", "we", "us"), you agree to be bound by these Terms of Service.
          </p>
          <p>
            Drazon provides high-performance web engineering, custom UI/UX design, AI automations, and ongoing website maintenance for corporate clients, SMBs, and startups.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-[#10B981]">
              <CreditCard className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">2. Official Services & Pricing Structure</h2>
          </div>
          <p>Our official primary packages are fixed-rate transparent offerings:</p>
          
          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-[#059669] uppercase tracking-wider">Package 1</span>
              <h3 className="text-base font-black text-slate-900">Website Development</h3>
              <p className="text-xl font-black text-[#10B981]">NZ$699</p>
              <p className="text-xs text-slate-600">One-time payment. Full custom design, responsive build, mobile optimization, fast speed setup, and launch support.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-[#059669] uppercase tracking-wider">Package 2</span>
              <h3 className="text-base font-black text-slate-900">UI/UX Design</h3>
              <p className="text-xl font-black text-[#10B981]">NZ$299</p>
              <p className="text-xs text-slate-600">One-time payment. High-fidelity Figma prototypes, interactive wireframes, custom design system, and developer handoff.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-[#059669] uppercase tracking-wider">Package 3</span>
              <h3 className="text-base font-black text-slate-900">Website Maintenance</h3>
              <p className="text-xl font-black text-[#10B981]">NZ$199<span className="text-xs text-slate-500 font-normal">/mo</span></p>
              <p className="text-xs text-slate-600">Recurring plan. 24/7 security monitoring, automated backups, speed optimizations, content edits, and uptime guarantee.</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-[#10B981]">
              <Award className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">3. Intellectual Property & Code Ownership</h2>
          </div>
          <p>
            Upon full settlement of invoice fees, full 100% intellectual property ownership of the custom website code, UI assets, custom graphics, and copy authored for your project transfers unconditionally to the client.
          </p>
          <p>
            Drazon retains rights to display non-confidential visual thumbnails of completed works in our agency portfolio, unless an explicit Non-Disclosure Agreement (NDA) is executed prior to commencement.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-[#10B981]">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">4. Service Level Commitments & Revisions</h2>
          </div>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
              <span><strong>Development Timeline:</strong> Custom websites are completed within 5 to 10 business days following asset handover.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
              <span><strong>Revisions Included:</strong> All fixed-price contracts include 3 comprehensive revision rounds prior to final sign-off.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
              <span><strong>Maintenance SLA:</strong> Active NZ$199/mo maintenance subscribers receive priority email support response within 2 hours.</span>
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">5. Limitation of Liability</h2>
          <p>
            In no event shall Drazon be liable for indirect, incidental, or consequential damages arising from client domain outages caused by third-party hosting providers, domain registry failures, or unauthorized client modifications.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3 pt-4 border-t border-slate-200/80">
          <h2 className="text-xl font-bold text-slate-900">6. Governing Law & Contact Details</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of New Zealand. For formal inquiries or billing questions:
          </p>
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#10B981] shrink-0" />
            <div>
              <p className="text-xs font-bold text-slate-900">Official Support & Legal Contact</p>
              <a href="mailto:hello@drazon.cc.cd" className="text-sm font-bold text-[#059669] hover:underline">
                hello@drazon.cc.cd
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
