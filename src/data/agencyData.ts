import { ServiceItem, PortfolioProject, PricingPlan, Testimonial, ProcessStep, BenefitItem } from '../types';

export const HERO_IMAGE_PATH = '/src/assets/images/drazon_hero_3d_1785668906125.jpg';
export const DRAZON_OFFICIAL_LOGO_PATH = '/src/assets/images/drazon_official_logo_1785672620875.jpg';
export const DRAZON_FAVICON_PATH = '/src/assets/images/drazon_favicon_mark_1785672645275.jpg';
export const ARCHITECTURAL_BW_IMAGE_PATH = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Professional, modern, responsive websites designed for businesses to build their online presence. We create fast, mobile-friendly websites with a premium user experience.',
    pricing: 'Starting from NZ$699 (One-time)',
    billingType: 'one-time',
    icon: 'Code2',
    isPrimary: true,
    includes: [
      'Custom business website',
      'Responsive design for all devices',
      'Modern UI implementation',
      'Basic website setup',
      'Deployment assistance'
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Premium website interface design focused on user experience, visual appeal, and converting visitors into customers.',
    pricing: 'Starting from NZ$299 (One-time)',
    billingType: 'one-time',
    icon: 'Palette',
    isPrimary: false,
    includes: [
      'Website layout design',
      'User experience planning',
      'Modern visual design',
      'Professional design concepts',
      'Design improvement suggestions'
    ]
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance',
    description: 'Reliable ongoing website support to keep your website updated, secure, and running smoothly.',
    pricing: 'NZ$199/month',
    billingType: 'monthly',
    icon: 'ShieldCheck',
    isPrimary: false,
    includes: [
      'Website updates',
      'Bug fixes',
      'Technical support',
      'Regular maintenance',
      'Performance monitoring'
    ]
  }
];

export const BENEFITS_DATA: BenefitItem[] = [
  {
    title: 'Affordable Pricing',
    description: 'Get agency-level design and engineering without the traditional 5-figure agency price markup.',
    iconName: 'DollarSign',
    highlight: 'Transparent Flat Rates'
  },
  {
    title: 'Modern Designs',
    description: 'Futuristic, dark glassmorphic or crisp light aesthetics that immediately position you as an industry leader.',
    iconName: 'Sparkles',
    highlight: '2026 UI/UX Standards'
  },
  {
    title: 'Fast Delivery',
    description: 'Our streamlined agile workflow gets your website online in as little as 7 to 14 days.',
    iconName: 'Zap',
    highlight: '7-14 Day Delivery'
  },
  {
    title: 'Mobile Optimized',
    description: 'Every site is built mobile-first, ensuring smooth performance on iPhones, Androids, and tablets.',
    iconName: 'Smartphone',
    highlight: '100% Responsive'
  },
  {
    title: 'AI-Powered Workflow',
    description: 'We leverage cutting-edge AI tools to accelerate development speed and build smarter client tools.',
    iconName: 'Bot',
    highlight: 'Next-Gen Technology'
  },
  {
    title: 'Dedicated Support',
    description: 'Direct communication via WhatsApp & Email with post-launch maintenance to keep your site updated.',
    iconName: 'Headphones',
    highlight: 'Continuous Care'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Discovery & Requirements',
    subtitle: 'Understanding Your Business Goals',
    description: 'We discuss your business model, target audience, brand aesthetic preferences, and key feature requirements to build a clear project roadmap.',
    deliverables: ['Brand Discovery Brief', 'Feature Scope Checklist', 'Architecture Sitemap'],
    duration: '1-2 Days',
    clientRole: 'Provide business details and brand preferences'
  },
  {
    stepNumber: 2,
    title: 'Design & Approval',
    subtitle: 'Crafting Your Custom Visual Mockup',
    description: 'Our designers craft high-fidelity, futuristic UI/UX mockups. You review interactive visual previews and request adjustments until 100% satisfied.',
    deliverables: ['Interactive UI/UX Wireframe', 'Color & Typography System', 'Mobile & Desktop Layout Preview'],
    duration: '3-4 Days',
    clientRole: 'Review design concept and approve visual direction'
  },
  {
    stepNumber: 3,
    title: 'Development',
    subtitle: 'Bringing the Code to Life',
    description: 'We write clean, production-ready React code styled with Tailwind CSS and animated with Framer Motion, integrating dynamic forms and AI capabilities.',
    deliverables: ['Full Codebase Assembly', 'CMS/Database Integration', 'Interactive Form Logic'],
    duration: '4-6 Days',
    clientRole: 'Sit back while we build your platform'
  },
  {
    stepNumber: 4,
    title: 'Testing & Launch',
    subtitle: 'Quality Assurance & Go-Live',
    description: 'We conduct comprehensive Core Web Vitals performance testing, cross-browser audits, mobile optimization check, and launch your domain.',
    deliverables: ['Google Core Web Vitals Audit', 'SEO Meta Tag Check', 'Live Domain Deployment'],
    duration: '1-2 Days',
    clientRole: 'Final sign-off and domain connection'
  },
  {
    stepNumber: 5,
    title: 'Support & Growth',
    subtitle: 'Continuous Optimization',
    description: 'Post-launch support, security monitoring, and growth advice to keep your website converting visitors into long-term clients.',
    deliverables: ['30-Day Post Launch Support', 'Analytics Dashboard Access', 'Monthly Performance Report'],
    duration: 'Ongoing',
    clientRole: 'Enjoy incoming business inquiries'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'restaurant-app',
    title: 'Savory Table & Bar',
    category: 'Restaurant',
    clientName: 'Savory Table Culinary Group',
    description: 'High-end restaurant website featuring an interactive digital menu, real-time table reservation system, and direct online takeout ordering.',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    lighthouseScore: 99,
    conversionBoost: '+185% Table Bookings',
    deliveryTime: '10 Days',
    tags: ['Restaurant', 'Online Ordering', 'Reservation Engine', 'Mobile Menu'],
    caseStudy: {
      challenge: 'The client lost potential patrons due to a clunky PDF menu and third-party reservation commissions.',
      solution: 'Drazon built a sleek mobile-first website with an interactive instant menu and integrated commission-free booking widget.',
      results: [
        'Over 340 direct table reservations in month 1',
        'Saved $1,200/month in third-party platform fees',
        'Mobile page load speed improved by 3.2 seconds'
      ],
      features: ['Interactive Category Menu Filter', 'Table Reservation Modal', 'Google Maps Location & Directions', 'Instagram Feed Embed'],
      techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'WhatsApp Booking Sync'],
      testimonial: {
        quote: 'Drazon transformed our restaurant online presence. Our direct table bookings doubled in the first month without any middleman fees!',
        author: 'Chef Marcus Vance',
        role: 'Owner, Savory Table'
      }
    }
  },
  {
    id: 'fitness-app',
    title: 'Apex Fit Studio',
    category: 'Fitness',
    clientName: 'Apex High Performance Fitness',
    description: 'Dynamic boutique fitness club portal with live class schedule selector, membership pricing calculator, and trainer booking.',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
    lighthouseScore: 98,
    conversionBoost: '+210% Free Trial Signups',
    deliveryTime: '8 Days',
    tags: ['Fitness', 'Class Schedule', 'Membership Portal', 'Trainer Profiles'],
    caseStudy: {
      challenge: 'Apex needed an energetic website that converted social media traffic into free trial gym passes.',
      solution: 'We engineered a high-impact dark theme web portal with video hero background, instant schedule filters, and 1-click WhatsApp signup.',
      results: [
        '210% increase in free pass requests',
        'Reduced customer bounce rate from 68% down to 22%',
        'Seamless integration with gym management system'
      ],
      features: ['Weekly Interactive Class Schedule', 'Trainer Bio & Booking Cards', 'Membership Pricing Toggle', 'Client Transformation Gallery'],
      techStack: ['React 19', 'Tailwind CSS', 'Framer Motion', 'Stripe Payments'],
      testimonial: {
        quote: 'The website looks like a million bucks! The fast booking flow doubled our weekly trial pass leads within two weeks.',
        author: 'Sarah Jenkins',
        role: 'Founder, Apex Fit Studio'
      }
    }
  },
  {
    id: 'real-estate-app',
    title: 'Aura Luxury Estates',
    category: 'Real Estate',
    clientName: 'Aura Real Estate Group',
    description: 'Premier luxury property showcase with high-res gallery carousels, filterable property listings, and instant agent consultation booking.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
    lighthouseScore: 97,
    conversionBoost: '+140% Qualified Inquiries',
    deliveryTime: '12 Days',
    tags: ['Real Estate', 'Property Listings', 'Virtual Tour', 'Lead Capture'],
    caseStudy: {
      challenge: 'High-end buyers expected an ultra-luxury visual experience when browsing multi-million dollar property listings online.',
      solution: 'Drazon created a glassmorphism luxury dark aesthetic with crisp property filter tags, virtual tour embeds, and private viewing schedules.',
      results: [
        '$4.2M in property inquiries generated in 60 days',
        'Average visitor duration increased to 4.5 minutes',
        'Seamless mobile search experience for buyers on the move'
      ],
      features: ['Multi-Parametric Property Search', '360° Virtual Tour Modal', 'Agent Direct Inquiry Form', 'Mortgage Estimator Tool'],
      techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Lead CRM Integration'],
      testimonial: {
        quote: 'Drazon delivered a stunning digital showroom. Our high-net-worth clients constantly praise the elegant design and fast property search.',
        author: 'David Sterling',
        role: 'Principal Broker, Aura Estates'
      }
    }
  },
  {
    id: 'startup-saas-app',
    title: 'Nova AI SaaS Platform',
    category: 'Startup',
    clientName: 'Nova Intelligence Inc.',
    description: 'Futuristic product landing page for an AI automation startup with interactive feature demo tabs, live pricing calculator, and investor deck pitch.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    lighthouseScore: 100,
    conversionBoost: '+310% Early Beta Signups',
    deliveryTime: '7 Days',
    tags: ['Startup', 'SaaS Landing Page', 'Interactive Demo', 'Waitlist Engine'],
    caseStudy: {
      challenge: 'Nova needed a world-class SaaS landing page to launch their product waitlist and impress seed investors.',
      solution: 'We crafted a sleek dark-mode website with animated neon orange gradients, interactive product preview tabs, and viral waitlist counter.',
      results: [
        '1,450+ waitlist subscribers in 14 days',
        'Successfully closed $750k pre-seed round with website as pitch backdrop',
        'Featured on Product Hunt Top 5 of the Day'
      ],
      features: ['Interactive Tabbed Feature Showcase', 'Interactive Product Demo', 'Live Subscriber Counter', 'FAQ Accordion'],
      techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Gemini AI API'],
      testimonial: {
        quote: 'Working with Drazon felt like hiring a Silicon Valley design agency at a fraction of the cost. The site converted beyond our wildest expectations!',
        author: 'Elena Rostova',
        role: 'Co-Founder & CEO, Nova AI'
      }
    }
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'website-development-plan',
    name: 'Website Development',
    description: 'Professional, modern, responsive websites designed for businesses to build their online presence. We create fast, mobile-friendly websites with a premium user experience.',
    priceDisplay: 'Starting from NZ$699',
    billingType: 'one-time',
    isPrimary: true,
    badge: 'Primary Service',
    includes: [
      'Custom business website',
      'Responsive design for all devices',
      'Modern UI implementation',
      'Basic website setup',
      'Deployment assistance'
    ],
    ctaText: 'Get Started'
  },
  {
    id: 'ui-ux-design-plan',
    name: 'UI/UX Design',
    description: 'Premium website interface design focused on user experience, visual appeal, and converting visitors into customers.',
    priceDisplay: 'Starting from NZ$299',
    billingType: 'one-time',
    isPrimary: false,
    includes: [
      'Website layout design',
      'User experience planning',
      'Modern visual design',
      'Professional design concepts',
      'Design improvement suggestions'
    ],
    ctaText: 'Get Started'
  },
  {
    id: 'website-maintenance-plan',
    name: 'Website Maintenance',
    description: 'Reliable ongoing website support to keep your website updated, secure, and running smoothly.',
    priceDisplay: 'NZ$199/month',
    billingType: 'monthly',
    isPrimary: false,
    includes: [
      'Website updates',
      'Bug fixes',
      'Technical support',
      'Regular maintenance',
      'Performance monitoring'
    ],
    ctaText: 'Subscribe Now'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    clientName: 'Marcus Vance',
    company: 'Savory Table & Bar',
    role: 'Owner & Executive Chef',
    industry: 'Hospitality & Dining',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'Drazon built our website in just 10 days. The design is sleek, mobile ordering works flawlessly, and we saved thousands in third-party delivery fees!',
    impactMetric: '+185% Table Bookings'
  },
  {
    id: 't2',
    clientName: 'Sarah Jenkins',
    company: 'Apex Fit Studio',
    role: 'Founder',
    industry: 'Health & Fitness',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'The team at Drazon understood our brand vision instantly. Our gym trial pass signups shot up by 210% right after launching.',
    impactMetric: '+210% Free Trial Signups'
  },
  {
    id: 't3',
    clientName: 'David Sterling',
    company: 'Aura Luxury Estates',
    role: 'Managing Principal Broker',
    industry: 'Real Estate',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'Professionalism, speed, and breathtaking design. Drazon delivers the quality of an international high-end creative studio.',
    impactMetric: '$4.2M Lead Pipeline'
  },
  {
    id: 't4',
    clientName: 'Elena Rostova',
    company: 'Nova AI SaaS',
    role: 'Co-Founder & CEO',
    industry: 'Tech Startup',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'Our landing page converted 1,450+ early adopters in two weeks. Drazon’s AI-powered workflow is unmatched in speed and polish.',
    impactMetric: '1,450+ Waitlist Users'
  }
];

export const AGENCY_STATS = [
  { label: 'Websites Delivered', value: '150+', iconName: 'Globe' },
  { label: 'Average Delivery Time', value: '7-12 Days', iconName: 'Clock' },
  { label: 'Client Satisfaction', value: '99.4%', iconName: 'Smile' },
  { label: 'Average Client ROI Boost', value: '3.4x', iconName: 'TrendingUp' }
];

export const FAQS_DATA = [
  {
    question: 'What official services does Drazon offer?',
    answer: 'We offer three main launch services: Website Development (starting from NZ$699 one-time), UI/UX Design (starting from NZ$299 one-time), and Website Maintenance (NZ$199/month).'
  },
  {
    question: 'How much does Website Development cost?',
    answer: 'Website Development starts from NZ$699 as a one-time project fee. It includes a custom business website, responsive design across all devices, modern UI implementation, basic website setup, and deployment assistance.'
  },
  {
    question: 'Are there any hidden or recurring fees?',
    answer: 'No hidden fees! Website Development and UI/UX Design are transparent one-time investments. Ongoing Website Maintenance is an optional support plan for NZ$199/month to keep your site updated, secure, and running smoothly.'
  },
  {
    question: 'Will my website look good on mobile devices?',
    answer: '100% yes! Every website we build is designed mobile-first and tested rigorously on mobile phones, tablets, and desktop displays.'
  }
];
