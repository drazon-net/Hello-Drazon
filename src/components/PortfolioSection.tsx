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
    <section id="portfolio" className="py-20 md:py-28 relative bg-[#F3EEEC] border-y border-[#5B443D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#5B443D]/15 text-xs font-bold text-[#8B0E2D] uppercase tracking-wider shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#F35A24]" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight">
            Proof Of <span className="text-orange-gradient">Digital Excellence</span>
          </h2>
          <p className="text-[#4A4A4A] text-base sm:text-lg leading-relaxed">
            Explore recent client websites engineered by Drazon for restaurants, fitness studios, real estate brokers, and high-growth startups.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#F35A24] to-[#D86A43] text-white shadow-md shadow-[#F35A24]/20'
                  : 'bg-white text-[#4A4A4A] hover:text-[#111111] border border-[#5B443D]/15 hover:border-[#F35A24]/30'
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
              className="bg-white rounded-3xl overflow-hidden border border-[#5B443D]/10 hover:border-[#F35A24]/40 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Mockup Banner Image Container */}
                <div className="relative h-64 w-full overflow-hidden bg-[#111111]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#5B443D]/15 text-xs font-bold text-[#111111] shadow-xs">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#5B443D]/15 text-xs font-extrabold text-[#8B0E2D] shadow-xs">
                    <Zap className="w-3.5 h-3.5 fill-[#F35A24] text-[#F35A24]" />
                    <span>Lighthouse {project.lighthouseScore}/100</span>
                  </div>

                  {/* Bottom Impact Banner */}
                  <div className="absolute bottom-4 left-4 right-4 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#5B443D]/10 flex items-center justify-between shadow-xs">
                    <span className="text-xs text-[#5B443D] font-bold">Conversion Impact:</span>
                    <span className="text-xs font-black text-[#F35A24]">{project.conversionBoost}</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-black text-[#111111] group-hover:text-[#F35A24] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-extrabold text-[#5B443D]">Client: {project.clientName}</p>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-bold text-[#5B443D] bg-[#F9F0ED] px-2.5 py-1 rounded-full border border-[#5B443D]/10">
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
                  className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-bold uppercase tracking-wider text-[#111111] bg-[#F9F0ED] hover:bg-gradient-to-r hover:from-[#F35A24] hover:to-[#D86A43] hover:text-white border border-[#5B443D]/15 hover:border-transparent rounded-full transition-all duration-200 cursor-pointer shadow-xs"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-white border border-[#5B443D]/15 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-4 right-4 p-2 text-[#5B443D] hover:text-[#111111] bg-[#F9F0ED] rounded-full border border-[#5B443D]/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase text-[#8B0E2D] bg-[#F9F0ED] px-3 py-1 rounded-full border border-[#5B443D]/10">
                  {activeProjectModal.category} Case Study
                </span>
                <span className="text-xs text-[#5B443D] font-semibold">Delivery: {activeProjectModal.deliveryTime}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#111111]">{activeProjectModal.title}</h3>
              <p className="text-sm text-[#5B443D] font-medium">Client: {activeProjectModal.clientName}</p>
            </div>

            {/* Image Preview Window */}
            <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-[#5B443D]/10">
              <img
                src={activeProjectModal.imageUrl}
                alt={activeProjectModal.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="p-5 rounded-2xl bg-[#F9F0ED] border border-[#5B443D]/10 space-y-2">
                <p className="font-extrabold text-[#8B0E2D] uppercase tracking-wider text-xs">The Challenge</p>
                <p className="text-[#4A4A4A] leading-relaxed">{activeProjectModal.caseStudy.challenge}</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F9F0ED] border border-[#F35A24]/20 space-y-2">
                <p className="font-extrabold text-[#F35A24] uppercase tracking-wider text-xs">The Drazon Solution</p>
                <p className="text-[#4A4A4A] leading-relaxed">{activeProjectModal.caseStudy.solution}</p>
              </div>
            </div>

            {/* Key Results */}
            <div className="space-y-3">
              <h4 className="text-sm font-extrabold text-[#111111] uppercase tracking-wider">Quantifiable Business Results</h4>
              <div className="grid sm:grid-cols-3 gap-3">
                {activeProjectModal.caseStudy.results.map((res, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-[#F3EEEC] border border-[#5B443D]/10 text-xs font-bold text-[#111111] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F35A24] shrink-0" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            {activeProjectModal.caseStudy.testimonial && (
              <div className="p-6 rounded-2xl bg-[#F9F0ED] border border-[#F35A24]/30 space-y-2">
                <div className="flex items-center gap-1 text-[#F35A24]">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#F35A24]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm italic text-[#111111] font-medium leading-relaxed">
                  &ldquo;{activeProjectModal.caseStudy.testimonial.quote}&rdquo;
                </p>
                <p className="text-xs font-bold text-[#111111]">
                  — {activeProjectModal.caseStudy.testimonial.author},{' '}
                  <span className="text-[#F35A24]">{activeProjectModal.caseStudy.testimonial.role}</span>
                </p>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
