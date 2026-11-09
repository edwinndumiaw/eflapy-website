import { SITE, BOOKING_URL } from '../config';
import { SERVICES, INDUSTRIES } from '../data/services';
import { CASES } from '../data/cases';
import { getPosts } from '../lib/posts';

export async function GET() {
  const posts = await getPosts();
  const u = (p: string) => `${SITE.url}${p}`;
  const body = `# Eflapy Digital

> ${SITE.about} Tagline: "Off you. On us." Process: Find. Build. Use.

Most companies already pay for AI tools like ChatGPT, Copilot or Claude. Very few of their people use them well. That gap is where we work. We come in the way a forward deployed team does: we find where AI fits in the operation, build it, and get people using it.

- Founded: October 2025, in Nairobi, Kenya
- Head of AI Operations: Edwin Ndumia
- Mission: make sure every company that pays for AI gets real work out of it
- Vision: African companies, starting in Kenya, running AI inside their operations as well as any company in the world
- More than 15 businesses served across 9 countries, with clients in ${SITE.countries}
- Works with organisations of 20 to 500 people
- Industries: ${INDUSTRIES.join(', ')}
- How we work: remotely with clients abroad, on site with clients in and around Nairobi
- Contact: ${SITE.email}, ${SITE.phone}
- Free 30 minute Operations Review: bring one process and we show you where AI fits. You leave with a written summary whether you hire us or not. Book: ${BOOKING_URL}

## Services

${SERVICES.map((s) => `- [${s.name}](${u(s.href)}): ${s.short}`).join('\n')}

## Case studies

- [All case studies](${u('/case-studies/')})
${CASES.map((c) => `- ${c.href ? `[${c.title}](${u(c.href)})` : c.client} (${c.location}${c.sector ? `, ${c.sector.toLowerCase()}` : ''}): ${c.summary}`).join('\n')}

## Company

- [About](${u('/about/')}): what Eflapy Digital is, mission and vision, principle ("Structure first. Then scale."), facts and leadership
- [Book an Operations Review](${u('/book/')})
- [Newsroom](${u('/newsroom/')})

## Blog

${posts.map((p) => `- [${p.data.title}](${u(`/blog/${p.id}/`)}): ${p.data.description}`).join('\n')}

## Optional

- [RSS feed](${u('/rss.xml')})
- [Sitemap](${u('/sitemap-index.xml')})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
