# eflapydigital.com

Static marketing site and blog for Eflapy Digital, built with [Astro](https://astro.build). The build is plain HTML, CSS and fonts in `dist/`, with no runtime network calls (fonts are self hosted through `@fontsource`).

## Run it locally

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the built dist/ folder
```

## Add a blog post

1. Create a Markdown file in `src/content/blog/`. The file name becomes the URL, so `my-new-post.md` is published at `/blog/my-new-post/`. Use lowercase words joined by hyphens in the file name.
2. Start the file with this frontmatter:

   ```markdown
   ---
   title: The title of the post
   description: One or two sentences used on the blog list, in search results and when the link is shared.
   date: 2026-11-20
   author: Eflapy Digital
   tags: [company, lessons]
   ---

   The post starts here. Use normal Markdown: ## for headings, **bold**, [links](/book/).
   ```

3. Build. The post appears on `/blog/`, in the latest posts on the home page, in `/rss.xml`, in `/llms.txt` and in the sitemap.

Optional fields:

- `draft: true` hides a post from the site until you remove it.
- Add the tag `press` to a post to also list it on `/newsroom/` (Press releases and announcements).

## Change the booking link

Open `src/config.ts` and edit:

```ts
export const BOOKING_URL = 'https://link.eflapydigital.com/widget/bookings/book-a-call-with-eflapy-digital';
```

Every "Book an operations review" button, the `/book/` page and `llms.txt` read from this one value. The same file holds the email, phone number, tagline and navigation.

## Change the colours and fonts

All colours are CSS variables in `src/styles/theme.css` (background, text, muted text, rules, accent, dark sections). Change the values there and the whole site follows. The site is black and white for now; to add brand colours, set `--color-accent` (buttons and highlights) and `--color-inverse-bg` (dark sections and footer) first.

Fonts are Comfortaa (headings) and Inter (body), imported in `src/layouts/Base.astro` and named in `theme.css`.

## Where things are

| What | Where |
| --- | --- |
| Pages | `src/pages/` (one file per page, services in `src/pages/services/`) |
| Services list used on home, overview and llms.txt | `src/data/services.ts` |
| Case study cards | `src/data/cases.ts` |
| Header, footer, call to action | `src/components/` |
| SEO tags and JSON-LD | `src/layouts/Base.astro`, `src/data/schema.ts` |
| robots.txt, llms.txt, RSS | `src/pages/robots.txt.ts`, `src/pages/llms.txt.ts`, `src/pages/rss.xml.ts` |
| Logos, favicon, social share image | `public/` |

## Deploy on Cloudflare Pages

1. Push this repository to GitHub (or GitLab).
2. In the Cloudflare dashboard go to **Workers and Pages**, then **Create**, then **Pages**, then **Connect to Git**, and pick the repository.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variable (recommended): `NODE_VERSION` = `22`
4. Save and deploy. You get a `*.pages.dev` address. Every push to the main branch redeploys.

`dist/404.html` is used automatically by Cloudflare Pages for missing pages.

## Point the Squarespace domain to Cloudflare Pages

In the Pages project, open **Custom domains** and add `eflapydigital.com` and `www.eflapydigital.com`. Then choose one of these:

**Option A (recommended): move DNS to Cloudflare.** This is the only way the bare domain `eflapydigital.com` works cleanly on Pages.

1. In Cloudflare, **Add a site**, enter `eflapydigital.com`, choose the Free plan. Cloudflare copies your existing DNS records. Check that the email (MX) records are there before going further, so mail to edwin@eflapydigital.com keeps working.
2. Cloudflare shows two nameservers.
3. In Squarespace, go to **Domains**, select `eflapydigital.com`, open **DNS** then **Domain nameservers**, switch to custom nameservers and enter the two Cloudflare nameservers.
4. Wait for Cloudflare to show the domain as active (usually within a few hours). Then add the custom domains in the Pages project; Cloudflare creates the DNS records for you.
5. Optionally add a redirect rule from `www` to the bare domain (or the other way) so there is one canonical address. The site's canonical URLs use `https://eflapydigital.com`.

**Option B: keep DNS at Squarespace.** Works for `www` only.

1. In the Pages project, add `www.eflapydigital.com` as a custom domain.
2. In Squarespace DNS settings, add a CNAME record: host `www`, value `<your-project>.pages.dev`. Remove any old Squarespace website records for `www`.
3. Set up domain forwarding in Squarespace from `eflapydigital.com` to `https://www.eflapydigital.com`.
4. If you use this option, change `site` in `astro.config.mjs` and `url` in `src/config.ts` to `https://www.eflapydigital.com` so canonical URLs match.

## Copy rules for this site

- No hyphens or dashes in visible copy. Use commas, colons and full stops.
- Plain, direct sentences. No hype words.
- No invented numbers, results, testimonials or quotes.
