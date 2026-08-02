import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/agencyData';
import { PortfolioProject } from '../types';
import { ExternalLink, Star, Zap, CheckCircle2, X, Award, ArrowUpRight, Monitor, Smartphone } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<PortfolioProject | null>(null);

  const categories = ['All', 'Restaurant', 'Fitness', 'Real Estate', 'Startup'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 relative bg-slate-900/40 backdrop-blur-sm border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Proof Of <span className="text-orange-gradient">Digital Excellence</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Explore recent client websites engineered by Drazon for restaurants, gym studios, real estate brokers, and high-growth startups.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#FF6B00] text-white shadow-lg shadow-[#FF6B00]/30'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-white/10 group flex flex-col justify-between"
            >
              <div>
                {/* Mockup Banner Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-[#0A0B0E]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E12] via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-xs font-bold text-white">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 text-xs font-extrabold text-emerald-400">
                    <Zap className="w-3.5 h-3.5 fill-emerald-400" />
                    <span>Lighthouse {project.lighthouseScore}/100</span>
                  </div>

                  {/* Bottom Impact Banner */}
                  <div className="absolute bottom-4 left-4 right-4 px-3.5 py-2 rounded-xl bg-[#0A0B0E]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <span className="text-xs text-gray-300 font-medium">Conversion Impact:</span>
                    <span className="text-xs font-black text-[#FF6B00]">{project.conversionBoost}</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#FF6B00] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-gray-400">Client: {project.clientName}</p>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-semibold text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Case Study Trigger */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-white bg-white/5 hover:bg-[#FF6B00] border border-white/10 hover:border-[#FF6B00] rounded-xl transition-all duration-200 cursor-pointer"
                >
                  <span>View Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#0f172a] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/10 rounded-full border border-white/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase text-[#FF6B00] bg-[#FF6B00]/10 px-2.5 py-1 rounded-md border border-[#FF6B00]/20">
                  {activeProjectModal.category} Case Study
                </span>
                <span className="text-xs text-gray-400">Delivery: {activeProjectModal.deliveryTime}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">{activeProjectModal.title}</h3>
              <p className="text-sm text-gray-400">Client: {activeProjectModal.clientName}</p>
            </div>

            {/* Image Preview Window */}
            <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-white/10">
              <img
                src={activeProjectModal.imageUrl}
                alt={activeProjectModal.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E12] via-transparent to-transparent opacity-70" />
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <p className="font-bold text-[#FF6B00] uppercase tracking-wider text-xs">The Challenge</p>
                <p className="text-gray-300 leading-relaxed">{activeProjectModal.caseStudy.challenge}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <p className="font-bold text-emerald-400 uppercase tracking-wider text-xs">The Drazon Solution</p>
                <p className="text-gray-300 leading-relaxed">{activeProjectModal.caseStudy.solution}</p>
              </div>
            </div>

            {/* Key Results */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quantifiable Business Results</h4>
              <div className="grid sm:grid-cols-3 gap-3">
                {activeProjectModal.caseStudy.results.map((res, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#0A0B0E] border border-white/10 text-xs font-semibold text-gray-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            {activeProjectModal.caseStudy.testimonial && (
              <div className="p-5 rounded-xl bg-gradient-to-r from-white/5 via-[#FF6B00]/10 to-white/5 border border-[#FF6B00]/30 space-y-2">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm italic text-gray-200">
                  &ldquo;{activeProjectModal.caseStudy.testimonial.quote}&rdquo;
                </p>
                <p className="text-xs font-bold text-white">
                  — {activeProjectModal.caseStudy.testimonial.author},{' '}
                  <span className="text-[#FF6B00]">{activeProjectModal.caseStudy.testimonial.role}</span>
                </p>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
