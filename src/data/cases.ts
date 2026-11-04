export type CaseStudy = {
  title: string;
  client: string;
  location: string;
  sector?: string;
  summary: string;
  work: string[];
  href?: string;
  featured?: boolean;
};

export const CASES: CaseStudy[] = [
  {
    title: 'Five AI systems for a busy Dubai team',
    client: 'A Dubai company',
    location: 'Dubai, United Arab Emirates',
    sector: 'Sales and client service',
    summary:
      'Leads arrived by email, Instagram, Facebook, WhatsApp, SMS and phone, and the founder ran client check in calls himself. We built five connected AI systems so the team could spend its time on conversations that need a person.',
    work: ['Email AI', 'Social media AI', 'SMS AI', 'Voice AI', 'Data detective AI'],
    href: '/case-studies/dubai-five-ai-systems/',
    featured: true,
  },
  {
    title: 'AI agent systems for a security and facilities firm',
    client: 'Nationwide Management Services',
    location: 'United Kingdom',
    sector: 'Security and facilities management',
    summary: 'We built AI agent systems for a UK security and facilities management company.',
    work: ['AI agent systems'],
  },
  {
    title: 'An AI workforce and reputation work for a removals franchise',
    client: 'Your Man With A Van',
    location: 'United Kingdom',
    sector: 'Removals franchise',
    summary:
      'We built AI workforce agents for a UK removals franchise and supported its reputation and crisis communication work.',
    work: ['AI workforce agents', 'Reputation and crisis communication'],
  },
  {
    title: 'A co branded inspection app with AI',
    client: 'Spectra Group',
    location: 'United Kingdom',
    summary: 'We built a co branded inspection app with AI for Spectra Group.',
    work: ['Inspection app', 'AI'],
  },
  {
    title: 'AI agent systems for GroundGuards',
    client: 'GroundGuards',
    location: 'United Kingdom',
    summary: 'We built AI agent systems for GroundGuards in the UK.',
    work: ['AI agent systems'],
  },
  {
    title: 'Bitflow Technology',
    client: 'Bitflow Technology',
    location: 'Panama',
    summary: 'We worked with Bitflow Technology, a technology company based in Panama.',
    work: [],
  },
  {
    title: 'Marketing for a home textiles brand',
    client: 'Urban Nest and Nook',
    location: 'United States',
    sector: 'Home textiles',
    summary: 'We ran marketing for Urban Nest and Nook, a home textiles brand in the US.',
    work: ['Marketing'],
  },
];
