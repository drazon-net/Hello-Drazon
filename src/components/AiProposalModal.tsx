import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Sparkles, Loader2, CheckCircle2, ArrowRight, Check, Copy } from 'lucide-react';
import { AiProposal } from '../types';
import { DrazonLogo } from './DrazonLogo';

interface AiProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const AiProposalModal: React.FC<AiProposalModalProps> = ({ isOpen, onClose, defaultService }) => {
  const navigate = useNavigate();
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('Restaurant / Local Business');
  const [goals, setGoals] = useState('Attract local clients & boost online sales');
  const [budget, setBudget] = useState('$500 - $1,500');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Mobile Responsive Design',
    'SEO Optimization',
    'Contact Lead Form'
  ]);

  const [loading, setLoading] = useState(false);
  const [proposal, setProposal] = useState<AiProposal | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const featureOptions = [
    'Mobile Responsive Design',
    'SEO Optimization',
    'Contact Lead Form',
    'AI Instant Chatbot',
    'Table Booking / Scheduling System',
    'E-Commerce Online Payments',
    'Custom CMS & Admin Panel',
    'Multi-Language Support'
  ];

  const toggleFeature = (feat: string) => {
    if (selectedFeatures.includes(feat)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feat));
    } else {
      setSelectedFeatures([...selectedFeatures, feat]);
    }
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setProposal(null);

    try {
      const res = await fetch('/api/ai/proposal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName,
          businessType,
          goals,
          budget,
          requestedFeatures: selectedFeatures
        }),
      });

      const data = await res.json();
      if (data.proposal) {
        setProposal(data.proposal);
      } else if (data.fallback) {
        setProposal(data.fallback);
      }
    } catch (err) {
      console.error('Failed to generate AI proposal:', err);
      // Fallback proposal
      setProposal({
        recommendedPlan: 'Website Development (Starting NZ$699)',
        estimatedTimeline: '5 - 10 Days',
        executiveSummary: `Drazon will engineer a professional, responsive, modern website for ${businessName || 'your business'} designed to build your online presence and convert visitors.`,
        coreDeliverables: [
          'Custom Business Website Architecture',
          'Responsive Design for All Screen Sizes',
          'Modern UI Implementation',
          'Basic Website Setup & Meta Tags',
          'Deployment & Domain Assistance'
        ],
        growthStrategy: 'By pairing clean modern visual design with fast mobile performance, your website will build immediate trust and drive client inquiries.',
        suggestedAddons: ['UI/UX Interface Design (NZ$299)', 'Ongoing Website Maintenance (NZ$199/mo)']
      });
    } finally {
      setLoading(false);
    }
  };

  const copyProposal = () => {
    if (!proposal) return;
    const text = `DRAZON PROPOSAL SUMMARY
Plan: ${proposal.recommendedPlan}
Timeline: ${proposal.estimatedTimeline}

Summary: ${proposal.executiveSummary}

Deliverables:
${proposal.coreDeliverables.map(d => `- ${d}`).join('\n')}

Strategy: ${proposal.growthStrategy}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white border border-[#E2E8F0] rounded-[24px] p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#475569] hover:text-[#0F172A] bg-[#F8FAFC] rounded-full border border-[#E2E8F0] cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="p-1 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shadow-xs">
            <DrazonLogo variant="icon-only" size="sm" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-[#0F172A] flex items-center gap-2">
              <span>Instant Proposal Engine</span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1D4ED8] border border-blue-200 font-extrabold uppercase tracking-wider">
                DRAZON
              </span>
            </h3>
            <p className="text-xs text-[#475569]">Get a tailored scope, timeline, and strategy generated by Drazon AI</p>
          </div>
        </div>

        {!proposal ? (
          <form onSubmit={handleGenerate} className="space-y-4 pt-2">
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0F172A] mb-1">Business Name</label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Bella Italia Bistro"
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] text-xs focus:border-[#1D4ED8] focus:bg-white focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F172A] mb-1">Industry / Category</label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] text-xs focus:border-[#1D4ED8] focus:bg-white focus:outline-none transition"
                >
                  <option value="Restaurant / Dining">Restaurant / Dining</option>
                  <option value="Fitness / Gym Studio">Fitness / Gym Studio</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Startup / Tech">Startup / Tech</option>
                  <option value="Local Service Business">Local Service Business</option>
                  <option value="E-Commerce">E-Commerce</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F172A] mb-1">Primary Business Goal</label>
              <input
                type="text"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                placeholder="e.g. Generate 50 new lead inquiries every month"
                className="w-full px-4 py-2.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] text-xs focus:border-[#1D4ED8] focus:bg-white focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F172A] mb-2">Select Key Website Features Needed</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {featureOptions.map((feat) => {
                  const isSel = selectedFeatures.includes(feat);
                  return (
                    <button
                      type="button"
                      key={feat}
                      onClick={() => toggleFeature(feat)}
                      className={`p-2.5 rounded-2xl text-[11px] font-bold text-left border transition cursor-pointer flex items-center justify-between ${
                        isSel
                          ? 'bg-[#1D4ED8] border-transparent text-white shadow-xs'
                          : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:text-[#0F172A]'
                      }`}
                    >
                      <span className="truncate">{feat}</span>
                      {isSel && <Check className="w-3.5 h-3.5 text-white shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Analyzing Business Scope with AI...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate AI Website Proposal</span>
                </>
              )}
            </button>

          </form>
        ) : (
          /* Proposal Display View */
          <div className="space-y-6 pt-2 animate-in fade-in duration-300">
            
            {/* Proposal Badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-blue-50/60 border border-blue-200">
              <div>
                <p className="text-[10px] text-[#475569] uppercase font-bold">Recommended Package</p>
                <p className="text-lg font-black text-[#1D4ED8]">{proposal.recommendedPlan}</p>
              </div>
              <div>
                <p className="text-[10px] text-[#475569] uppercase font-bold">Estimated Turnaround</p>
                <p className="text-base font-bold text-[#0F172A]">{proposal.estimatedTimeline}</p>
              </div>
              <button
                onClick={copyProposal}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#0F172A] bg-white hover:bg-[#F8FAFC] rounded-full border border-[#E2E8F0] cursor-pointer shadow-xs"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#1D4ED8]" /> : <Copy className="w-3.5 h-3.5 text-[#475569]" />}
                <span>{copied ? 'Copied' : 'Copy Scope'}</span>
              </button>
            </div>

            {/* Executive Summary */}
            <div className="space-y-2">
              <h4 className="text-xs font-extrabold text-[#475569] uppercase tracking-wider">Executive Summary</h4>
              <p className="text-sm text-[#475569] leading-relaxed p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                {proposal.executiveSummary}
              </p>
            </div>

            {/* Deliverables */}
            <div className="space-y-2">
              <h4 className="text-xs font-extrabold text-[#475569] uppercase tracking-wider">Project Deliverables</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {proposal.coreDeliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#0F172A]">
                    <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth Strategy */}
            <div className="space-y-2">
              <h4 className="text-xs font-extrabold text-[#475569] uppercase tracking-wider">Digital Growth Strategy</h4>
              <p className="text-xs text-[#475569] leading-relaxed p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                {proposal.growthStrategy}
              </p>
            </div>

            {/* Buttons */}
            <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setProposal(null)}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold text-[#475569] hover:text-[#0F172A] cursor-pointer"
              >
                ← Edit Business Details
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  navigate('/contact');
                }}
                className="btn-primary"
              >
                Proceed & Contact Drazon
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
