import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { CheckCircle2, Clock, FileCheck, Layers, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-28 md:py-32 relative bg-[#F8FAFC]/80 border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-xs font-bold text-[#1D4ED8] uppercase tracking-wider shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#1D4ED8]" />
            <span>How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Our Streamlined <span className="text-blue-gradient">5-Step Process</span>
          </h2>
          <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
            A transparent, stress-free workflow designed to get your high-converting website live in days, not months.
          </p>
        </div>

        {/* Desktop Step Numbers Bar */}
        <div className="hidden md:grid grid-cols-5 gap-4 mb-12 relative">
          {/* Connector Line behind steps */}
          <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-[#E2E8F0] -translate-y-1/2 z-0" />

          {PROCESS_STEPS.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(index)}
                className={`relative z-10 flex flex-col items-center p-4 rounded-2xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1D4ED8] text-white shadow-md scale-105'
                    : 'bg-white border border-[#E2E8F0] text-[#475569] hover:text-[#0F172A] hover:border-blue-300 shadow-xs'
                }`}
              >
                <span className="text-[11px] font-extrabold uppercase tracking-widest mb-1">
                  Step {step.stepNumber}
                </span>
                <span className="text-xs font-bold text-center line-clamp-1">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Inspector Box */}
        <div className="bg-white rounded-[18px] p-6 sm:p-10 border border-[#E2E8F0] relative overflow-hidden shadow-[0_10px_35px_rgba(15,23,42,0.06)]">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Left Summary */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-[#1D4ED8] text-white font-black flex items-center justify-center text-xl shadow-md">
                  {PROCESS_STEPS[activeStep].stepNumber}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
                    {PROCESS_STEPS[activeStep].title}
                  </h3>
                  <p className="text-xs text-[#1D4ED8] font-bold">
                    {PROCESS_STEPS[activeStep].subtitle}
                  </p>
                </div>
              </div>

              <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
                {PROCESS_STEPS[activeStep].description}
              </p>

              {/* Deliverables List */}
              <div className="space-y-2">
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-[#1D4ED8]" />
                  What You Get In Step {PROCESS_STEPS[activeStep].stepNumber}:
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {PROCESS_STEPS[activeStep].deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#0F172A] bg-[#F8FAFC] p-3 rounded-2xl border border-[#E2E8F0]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Step Right Info Card */}
            <div className="lg:col-span-5 bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0] space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                <span className="text-xs text-[#475569] font-medium">Estimated Duration:</span>
                <span className="text-xs font-black text-[#1D4ED8] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  {PROCESS_STEPS[activeStep].duration}
                </span>
              </div>

              <div>
                <p className="text-xs font-bold text-[#475569] mb-1">Your Involvement:</p>
                <p className="text-xs text-[#0F172A] font-medium leading-relaxed">
                  {PROCESS_STEPS[activeStep].clientRole}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 text-xs font-bold text-[#475569] disabled:opacity-30 hover:text-[#0F172A] cursor-pointer"
                >
                  ← Previous
                </button>

                <span className="text-xs text-[#475569] font-mono font-bold">
                  {activeStep + 1} / {PROCESS_STEPS.length}
                </span>

                <button
                  disabled={activeStep === PROCESS_STEPS.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                  className="px-3 py-1.5 text-xs font-extrabold text-[#1D4ED8] disabled:opacity-30 hover:text-[#1E40AF] flex items-center gap-1 cursor-pointer"
                >
                  Next Step →
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
