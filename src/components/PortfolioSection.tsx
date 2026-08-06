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
    <section id="portfolio" className="py-28 md:py-32 relative bg-[#F8FAFC]/80 border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-xs font-bold text-[#1D4ED8] uppercase tracking-wider shadow-xs">
            <Award className="w-3.5 h-3.5 text-[#1D4ED8]" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Proof Of <span className="text-blue-gradient">Digital Excellence</span>
          </h2>
          <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
            Explore recent client websites engineered by Drazon for restaurants, fitness studios, real estate brokers, and high-growth startups.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1D4ED8] text-white shadow-md'
                  : 'bg-white text-[#475569] hover:text-[#0F172A] border border-[#E2E8F0] hover:border-[#1D4ED8]/40'
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
              className="premium-card overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/* Mockup Banner Image Container */}
                <div className="relative h-64 w-full overflow-hidden bg-[#0F172A]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/90 border border-[#E2E8F0] text-xs font-bold text-[#0F172A] shadow-xs backdrop-blur-xs">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#E2E8F0] text-xs font-extrabold text-[#1D4ED8] shadow-xs backdrop-blur-xs">
                    <Zap className="w-3.5 h-3.5 fill-[#1D4ED8] text-[#1D4ED8]" />
                    <span>Lighthouse {project.lighthouseScore}/100</span>
                  </div>

                  {/* Bottom Impact Banner */}
                  <div className="absolute bottom-4 left-4 right-4 px-4 py-2.5 rounded-2xl bg-white/95 border border-[#E2E8F0] flex items-center justify-between shadow-xs backdrop-blur-xs">
                    <span className="text-xs text-[#475569] font-bold">Conversion Impact:</span>
                    <span className="text-xs font-black text-[#1D4ED8]">{project.conversionBoost}</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-black text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-extrabold text-[#475569]">Client: {project.clientName}</p>
                  <p className="text-[#475569] text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-bold text-[#475569] bg-[#F8FAFC] px-2.5 py-1 rounded-full border border-[#E2E8F0]">
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
                  className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0F172A] bg-[#F8FAFC] hover:bg-[#1D4ED8] hover:text-white border border-[#E2E8F0] hover:border-transparent rounded-full transition-all duration-200 cursor-pointer shadow-xs"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-white border border-[#E2E8F0] rounded-[20px] p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-4 right-4 p-2 text-[#475569] hover:text-[#0F172A] bg-[#F8FAFC] rounded-full border border-[#E2E8F0] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  {activeProjectModal.category} Case Study
                </span>
                <span className="text-xs text-[#475569] font-semibold">Delivery: {activeProjectModal.deliveryTime}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A]">{activeProjectModal.title}</h3>
              <p className="text-sm text-[#475569] font-medium">Client: {activeProjectModal.clientName}</p>
            </div>

            {/* Image Preview Window */}
            <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-[#E2E8F0]">
              <img
                src={activeProjectModal.imageUrl}
                alt={activeProjectModal.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <p className="font-extrabold text-[#0F172A] uppercase tracking-wider text-xs">The Challenge</p>
                <p className="text-[#475569] leading-relaxed">{activeProjectModal.caseStudy.challenge}</p>
              </div>

              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2">
                <p className="font-extrabold text-[#1D4ED8] uppercase tracking-wider text-xs">The Drazon Solution</p>
                <p className="text-[#475569] leading-relaxed">{activeProjectModal.caseStudy.solution}</p>
              </div>
            </div>

            {/* Key Results */}
            <div className="space-y-3">
              <h4 className="text-sm font-extrabold text-[#0F172A] uppercase tracking-wider">Quantifiable Business Results</h4>
              <div className="grid sm:grid-cols-3 gap-3">
                {activeProjectModal.caseStudy.results.map((res, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-bold text-[#0F172A] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            {activeProjectModal.caseStudy.testimonial && (
              <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-2">
                <div className="flex items-center gap-1 text-[#1D4ED8]">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#1D4ED8]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm italic text-[#0F172A] font-medium leading-relaxed">
                  &ldquo;{activeProjectModal.caseStudy.testimonial.quote}&rdquo;
                </p>
                <p className="text-xs font-bold text-[#0F172A]">
                  — {activeProjectModal.caseStudy.testimonial.author},{' '}
                  <span className="text-[#1D4ED8]">{activeProjectModal.caseStudy.testimonial.role}</span>
                </p>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
