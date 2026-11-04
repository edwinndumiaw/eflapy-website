export type Service = {
  slug: string;
  name: string;
  short: string;
  href: string;
};

export const SERVICES: Service[] = [
  {
    slug: 'ai-operations-assessment',
    name: 'AI Operations Assessment',
    short: 'We study how your business actually runs, find the gaps that cost the most, and show you where AI fits and where it does not.',
    href: '/services/ai-operations-assessment/',
  },
  {
    slug: 'ai-workforce-build',
    name: 'AI Workforce Build',
    short: 'We build what the assessment found: agents, workflows and assistants that work inside your operations.',
    href: '/services/ai-workforce-build/',
  },
  {
    slug: 'ai-adoption-program',
    name: 'AI Adoption Program',
    short: 'We get your people using the AI you already pay for, in their real work, safely.',
    href: '/services/ai-adoption-program/',
  },
  {
    slug: 'crm-systems-and-business-software',
    name: 'CRM Systems and Business Software',
    short: 'We set up a full CRM built around how you sell and serve, connect the software you already run, and build custom software where nothing else fits. AI then works on clean, connected data.',
    href: '/services/crm-systems-and-business-software/',
  },
  {
    slug: 'performance-marketing-and-ai-visibility',
    name: 'Performance Marketing and AI Visibility',
    short: 'Paid advertising on Meta, Google, LinkedIn, TikTok and X, judged by cost per customer. Plus SEO, GEO and AEO so search engines and AI assistants find and recommend you.',
    href: '/services/performance-marketing-and-ai-visibility/',
  },
];

export const INDUSTRIES = [
  'SACCOs and financial services',
  'Insurance',
  'Manufacturing and logistics',
  'Law and professional services',
  'NGOs and regional offices',
  'Real estate',
  'Tours and travel',
  'Security and facilities',
  'Software companies',
  'Removals and home services',
];
