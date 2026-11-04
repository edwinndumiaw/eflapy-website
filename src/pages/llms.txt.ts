import { SITE, BOOKING_URL } from '../config';
import { SERVICES, INDUSTRIES } from '../data/services';
import { CASES } from '../data/cases';
import { getPosts } from '../lib/posts';

export async function GET() {
  const posts = await getPosts();
  const u = (p: string) => `${SITE.url}${p}`;
  const body = `# Eflapy Digital

> Eflapy Digital is an AI operations firm based in Nairobi, Kenya. We find where AI fits in your business, build it, and get your company using it. Tagline: "Off you. On us." Process: Find. Build. Use.

Most companies already pay for AI tools like ChatGPT, Copilot or Claude. Very few of their people use them well. That gap is where we work.

- Founder and Managing Director: Edwin Ndumia, Nairobi, Kenya
- More than 15 businesses served across 9 countries, with clients in Kenya, the UK, the Gulf (Dubai), the US, Panama and Spain
- Works with organisations of 30 to 500 people
- Industries: ${INDUSTRIES.join(', ')}
- Contact: ${SITE.email}, ${SITE.phone}
- Free 30 minute Operations Review: bring one process and we show you where AI fits. You leave with a written summary whether you hire us or not. Book: ${BOOKING_URL}

## Services

${SERVICES.map((s) => `- [${s.name}](${u(s.href)}): ${s.short}`).join('\n')}

## Case studies

- [All case studies](${u('/case-studies/')})
${CASES.map((c) => `- ${c.href ? `[${c.title}](${u(c.href)})` : c.client} (${c.location}): ${c.summary}`).join('\n')}

## Company

- [About](${u('/about/')}): founder, approach and principle ("Structure first. Then scale.")
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
