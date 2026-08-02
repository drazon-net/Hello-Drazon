import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, Sparkles, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] py-24 sm:py-32 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-xl w-full text-center space-y-8 glass-card rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-2xl relative overflow-hidden">
        
        {/* Glow orb background */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/10 blur-[90px] rounded-full pointer-events-none" />

        {/* 404 Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-black text-[#059669] uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-[#10B981]" />
          <span>Error 404</span>
        </div>

        {/* Big Graphic Display */}
        <div className="relative">
          <h1 className="text-7xl sm:text-8xl font-black text-slate-900 tracking-tight">
            4<span className="text-emerald-gradient">0</span>4
          </h1>
          <p className="text-xl font-bold text-slate-800 mt-2">Page Not Found</p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
          The page you are looking for might have been moved, renamed, or does not exist. Let's get you back on track!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#10B981]/25 transition flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider transition flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <p className="text-xs text-slate-500 pt-4">
          Need help? Contact support at <a href="mailto:hello@drazon.cc.cd" className="text-[#10B981] font-bold hover:underline">hello@drazon.cc.cd</a>
        </p>

      </div>
    </div>
  );
};
