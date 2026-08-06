import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { CheckCircle2, Clock, FileCheck, Layers, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-20 md:py-28 relative bg-[#F9F0ED] border-y border-[#5B443D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#5B443D]/15 text-xs font-bold text-[#8B0E2D] uppercase tracking-wider shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#F35A24]" />
            <span>How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight">
            Our Streamlined <span className="text-orange-gradient">5-Step Process</span>
          </h2>
          <p className="text-[#4A4A4A] text-base sm:text-lg leading-relaxed">
            A transparent, stress-free workflow designed to get your high-converting website live in days, not months.
          </p>
        </div>

        {/* Desktop Step Numbers Bar */}
        <div className="hidden md:grid grid-cols-5 gap-4 mb-12 relative">
          {/* Connector Line behind steps */}
          <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-[#5B443D]/15 -translate-y-1/2 z-0" />

          {PROCESS_STEPS.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(index)}
                className={`relative z-10 flex flex-col items-center p-4 rounded-2xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#F35A24] to-[#D86A43] text-white shadow-md shadow-[#F35A24]/20 scale-105'
                    : 'bg-white border border-[#5B443D]/15 text-[#5B443D] hover:text-[#111111] hover:border-[#F35A24]/30 shadow-xs'
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
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#5B443D]/10 relative overflow-hidden shadow-lg">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Left Summary */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F35A24] to-[#D86A43] text-white font-black flex items-center justify-center text-xl shadow-md shadow-[#F35A24]/20">
                  {PROCESS_STEPS[activeStep].stepNumber}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#111111]">
                    {PROCESS_STEPS[activeStep].title}
                  </h3>
                  <p className="text-xs text-[#F35A24] font-bold">
                    {PROCESS_STEPS[activeStep].subtitle}
                  </p>
                </div>
              </div>

              <p className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed">
                {PROCESS_STEPS[activeStep].description}
              </p>

              {/* Deliverables List */}
              <div className="space-y-2">
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#5B443D] flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-[#F35A24]" />
                  What You Get In Step {PROCESS_STEPS[activeStep].stepNumber}:
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {PROCESS_STEPS[activeStep].deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#111111] bg-[#F9F0ED] p-3 rounded-2xl border border-[#5B443D]/10">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F35A24] shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Step Right Info Card */}
            <div className="lg:col-span-5 bg-[#F3EEEC] p-6 rounded-2xl border border-[#5B443D]/10 space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#5B443D]/10">
                <span className="text-xs text-[#5B443D] font-medium">Estimated Duration:</span>
                <span className="text-xs font-black text-[#8B0E2D] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#F35A24]" />
                  {PROCESS_STEPS[activeStep].duration}
                </span>
              </div>

              <div>
                <p className="text-xs font-bold text-[#5B443D] mb-1">Your Involvement:</p>
                <p className="text-xs text-[#111111] font-medium leading-relaxed">
                  {PROCESS_STEPS[activeStep].clientRole}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="pt-4 border-t border-[#5B443D]/10 flex items-center justify-between">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 text-xs font-bold text-[#5B443D] disabled:opacity-30 hover:text-[#111111] cursor-pointer"
                >
                  ← Previous
                </button>

                <span className="text-xs text-[#5B443D] font-mono font-bold">
                  {activeStep + 1} / {PROCESS_STEPS.length}
                </span>

                <button
                  disabled={activeStep === PROCESS_STEPS.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                  className="px-3 py-1.5 text-xs font-extrabold text-[#F35A24] disabled:opacity-30 hover:text-[#8B0E2D] flex items-center gap-1 cursor-pointer"
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
