import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUp, Sparkles } from 'lucide-react';
import { DrazonLogo } from './DrazonLogo';

interface FooterProps {
  onOpenProposal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProposal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#F3EEEC] border-t border-[#5B443D]/10 text-[#4A4A4A] pt-16 pb-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#5B443D]/10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <DrazonLogo size="lg" showTagline={true} />

            <p className="text-[#4A4A4A] text-xs sm:text-sm leading-relaxed">
              Drazon is a digital agency focused on helping businesses build a strong online presence through professional website development, UI/UX design, and reliable website maintenance.
            </p>
            
            <a 
              href="mailto:hello@drazon.cc.cd" 
              className="inline-flex items-center gap-2 text-xs font-bold text-[#F35A24] hover:underline pt-1"
            >
              <Mail className="w-4 h-4 text-[#F35A24]" />
              <span>hello@drazon.cc.cd</span>
            </a>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <p className="text-xs font-black text-[#111111] uppercase tracking-wider">Navigation</p>
            <ul className="space-y-2 text-xs text-[#4A4A4A] font-medium">
              <li><Link to="/" className="hover:text-[#F35A24] transition">Home</Link></li>
              <li><Link to="/services" className="hover:text-[#F35A24] transition">Services</Link></li>
              <li><Link to="/pricing" className="hover:text-[#F35A24] transition">Pricing</Link></li>
              <li><Link to="/about" className="hover:text-[#F35A24] transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#F35A24] transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Official Services */}
          <div className="space-y-3">
            <p className="text-xs font-black text-[#111111] uppercase tracking-wider">Official Services</p>
            <ul className="space-y-2 text-xs text-[#4A4A4A] font-medium">
              <li><Link to="/services" className="hover:text-[#F35A24] transition">Website Development (NZ$699)</Link></li>
              <li><Link to="/services" className="hover:text-[#F35A24] transition">UI/UX Design (NZ$299)</Link></li>
              <li><Link to="/services" className="hover:text-[#F35A24] transition">Website Maintenance (NZ$199/mo)</Link></li>
            </ul>
          </div>

          {/* Col 4: Action CTA */}
          <div className="space-y-3">
            <p className="text-xs font-black text-[#111111] uppercase tracking-wider">Start Your Project</p>
            <p className="text-xs text-[#4A4A4A] leading-relaxed">
              Ready for a modern website that drives real customer growth? Get an instant proposal today.
            </p>
            <button
              onClick={onOpenProposal}
              className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-[#F35A24] to-[#D86A43] hover:shadow-lg text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#F35A24]/20 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get AI Proposal</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5B443D]">
          <p>© {new Date().getFullYear()} DRAZON. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy" className="hover:text-[#111111] transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#111111] transition">Terms of Service</Link>
            <Link to="/contact" className="hover:text-[#111111] transition">Contact Support</Link>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white border border-[#5B443D]/15 text-[#111111] hover:border-[#F35A24] transition flex items-center justify-center cursor-pointer shadow-xs"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-[#F35A24]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
