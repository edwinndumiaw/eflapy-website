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
    slug: 'systems-and-crm',
    name: 'Systems and CRM',
    short: 'AI is only as good as the data underneath it. We set up or fix the CRM and systems first.',
    href: '/services/systems-and-crm/',
  },
  {
    slug: 'growth-and-ai-visibility',
    name: 'Growth and AI Visibility',
    short: 'Performance marketing that brings in demand, and visibility where buyers now ask for recommendations.',
    href: '/services/growth-and-ai-visibility/',
  },
];

export const INDUSTRIES = [
  'SACCOs and financial services',
  'Insurance',
  'Manufacturing and logistics',
  'Law and professional services',
  'NGOs and regional offices',
  'Healthcare',
  'Real estate',
];
