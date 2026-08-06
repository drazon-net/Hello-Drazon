import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Eye, FileText, Server, UserCheck, ArrowLeft, Mail } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
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
          <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
          <span>Privacy & Security</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Privacy <span className="text-emerald-gradient">Policy</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          At Drazon, we are committed to safeguarding your personal data, project requirements, and proprietary business information with enterprise-grade security protocols.
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
              <Lock className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">1. Commitment to Data Protection</h2>
          </div>
          <p>
            Drazon ("we", "our", or "us") operates the website and digital services at drazon.cc.cd. This Privacy Policy details how we collect, process, store, and protect information when you visit our website, interact with our AI proposal generators, or hire us for web development, UI/UX design, or website maintenance services.
          </p>
          <p>
            We strictly comply with applicable privacy regulations, including the New Zealand Privacy Act 2020 and global standards such as the General Data Protection Regulation (GDPR).
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-[#10B981]">
              <Eye className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">2. Information We Collect</h2>
          </div>
          <p>We collect information in three primary ways:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>
              <strong className="text-slate-900">Information You Provide Directly:</strong> When submitting forms or requesting an instant AI proposal, we collect your name, business name, email address, phone number, and project specifications.
            </li>
            <li>
              <strong className="text-slate-900">Project & Asset Submissions:</strong> Logos, copy assets, branding guidelines, and domain credentials provided to execute web development or maintenance contracts.
            </li>
            <li>
              <strong className="text-slate-900">Automated Technical Data:</strong> Browser type, IP address, device telemetry, referral sources, and interaction data collected via performance telemetry cookies.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-[#10B981]">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">3. How We Use Your Information</h2>
          </div>
          <p>Collected data is strictly used for legitimate business operations:</p>
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">Service Execution</h3>
              <p className="text-xs text-slate-600">Delivering custom web development, UI/UX prototypes, and ongoing maintenance.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">AI Proposal Generation</h3>
              <p className="text-xs text-slate-600">Generating tailored scope breakdowns, feature roadmaps, and instant estimates.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">Client Communication</h3>
              <p className="text-xs text-slate-600">Sending project updates, invoice receipts, and priority technical support alerts.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">Security & Fraud Prevention</h3>
              <p className="text-xs text-slate-600">Monitoring website health, preventing automated spam, and protecting client data.</p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-[#10B981]">
              <Server className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">4. AI Processing & Asset Security</h2>
          </div>
          <p>
            Our instant AI proposal generators process project parameters using secure, encrypted API endpoints. Prompt inputs and proprietary business descriptions are <strong>never sold, leased, or used to train public machine learning models</strong>.
          </p>
          <p>
            All production assets and customer databases managed under our maintenance packages are housed in SOC-2 compliant, multi-region cloud infrastructure protected by SSL/TLS 1.3 encryption.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-[#10B981]">
              <UserCheck className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">5. Your Data Rights</h2>
          </div>
          <p>Regardless of your jurisdiction, Drazon accords you full control over your data:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li><strong>Access:</strong> Request a copy of all personal information held about you.</li>
            <li><strong>Correction:</strong> Request immediate updates to inaccurate contact or billing details.</li>
            <li><strong>Deletion:</strong> Request permanent removal of non-essential records ("Right to be Forgotten").</li>
            <li><strong>Data Export:</strong> Obtain custom website source code and database backups upon contract completion.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="space-y-3 pt-4 border-t border-slate-200/80">
          <h2 className="text-xl font-bold text-slate-900">6. Contact Our Privacy Lead</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to exercise your data rights, please contact our lead data protection team:
          </p>
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#10B981] shrink-0" />
            <div>
              <p className="text-xs font-bold text-slate-900">Official Privacy Inquiry Email</p>
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
