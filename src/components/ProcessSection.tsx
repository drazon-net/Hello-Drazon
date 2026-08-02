import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { CheckCircle2, Clock, FileCheck, Layers, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Our Streamlined <span className="text-orange-gradient">5-Step Process</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            A transparent, stress-free workflow designed to get your high-converting website live in days, not months.
          </p>
        </div>

        {/* Desktop Step Numbers Bar */}
        <div className="hidden md:grid grid-cols-5 gap-4 mb-12 relative">
          {/* Connector Line behind steps */}
          <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-white/10 -translate-y-1/2 z-0" />

          {PROCESS_STEPS.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(index)}
                className={`relative z-10 flex flex-col items-center p-4 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#FF6B00] text-white shadow-xl shadow-[#FF6B00]/30 scale-105'
                    : 'bg-[#0D0E12] border border-white/10 text-gray-400 hover:text-white hover:border-[#FF6B00]/40'
                }`}
              >
                <span className="text-xs font-black uppercase tracking-widest mb-1">
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
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/15 relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Left Summary */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#FF6B00] text-white font-black flex items-center justify-center text-lg shadow-md shadow-[#FF6B00]/30">
                  {PROCESS_STEPS[activeStep].stepNumber}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {PROCESS_STEPS[activeStep].title}
                  </h3>
                  <p className="text-xs text-[#FF6B00] font-semibold">
                    {PROCESS_STEPS[activeStep].subtitle}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {PROCESS_STEPS[activeStep].description}
              </p>

              {/* Deliverables List */}
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-[#FF6B00]" />
                  What You Get In Step {PROCESS_STEPS[activeStep].stepNumber}:
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {PROCESS_STEPS[activeStep].deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-200 bg-white/5 p-2.5 rounded-lg border border-white/10">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Step Right Info Card */}
            <div className="lg:col-span-5 bg-[#0A0B0E]/90 p-6 rounded-xl border border-white/10 space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs text-gray-400">Estimated Duration:</span>
                <span className="text-xs font-extrabold text-[#FF6B00] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {PROCESS_STEPS[activeStep].duration}
                </span>
              </div>

              <div>
                <p className="text-xs font-bold text-gray-400 mb-1">Your Involvement:</p>
                <p className="text-xs text-gray-200 font-medium">
                  {PROCESS_STEPS[activeStep].clientRole}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 text-xs font-semibold text-gray-400 disabled:opacity-30 hover:text-white cursor-pointer"
                >
                  ← Previous
                </button>

                <span className="text-xs text-gray-500 font-mono">
                  {activeStep + 1} / {PROCESS_STEPS.length}
                </span>

                <button
                  disabled={activeStep === PROCESS_STEPS.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                  className="px-3 py-1.5 text-xs font-bold text-[#FF6B00] disabled:opacity-30 hover:text-white flex items-center gap-1 cursor-pointer"
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
