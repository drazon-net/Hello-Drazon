export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  pricing: string;
  billingType: 'one-time' | 'monthly';
  icon: string;
  isPrimary?: boolean;
  includes: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Restaurant' | 'Fitness' | 'Real Estate' | 'Startup' | 'E-Commerce';
  clientName: string;
  description: string;
  imageUrl: string;
  demoUrl?: string;
  lighthouseScore: number;
  conversionBoost: string;
  deliveryTime: string;
  tags: string[];
  caseStudy: {
    challenge: string;
    solution: string;
    results: string[];
    features: string[];
    techStack: string[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
  };
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  priceDisplay: string;
  billingType: 'one-time' | 'monthly';
  isPrimary?: boolean;
  badge?: string;
  includes: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  role: string;
  industry: string;
  avatarUrl: string;
  rating: number;
  quote: string;
  impactMetric: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
  clientRole: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface AiProposal {
  recommendedPlan: string;
  estimatedTimeline: string;
  executiveSummary: string;
  coreDeliverables: string[];
  growthStrategy: string;
  suggestedAddons: string[];
}
