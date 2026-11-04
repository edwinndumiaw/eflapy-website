import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../lib/posts';
import { SITE } from '../config';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: 'Eflapy Digital blog',
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/blog/${p.id}/`,
      author: `${SITE.email} (${p.data.author})`,
      categories: p.data.tags,
    })),
    customData: '<language>en</language>',
  });
}
