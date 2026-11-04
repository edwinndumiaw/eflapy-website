import { SITE } from '../config';

export type Crumb = { name: string; href: string };

const ORG_ID = `${SITE.url}/#organization`;

const areaServed = [
  { '@type': 'Country', name: 'Kenya' },
  { '@type': 'Country', name: 'United Kingdom' },
  { '@type': 'Country', name: 'United Arab Emirates' },
  { '@type': 'Country', name: 'United States' },
];

const address = {
  '@type': 'PostalAddress',
  addressLocality: 'Nairobi',
  addressCountry: 'KE',
};

export function organizationSchema() {
  return [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}${SITE.logo}`,
      email: SITE.email,
      telephone: SITE.phoneHref,
      address,
      slogan: SITE.tagline,
      founder: { '@type': 'Person', name: SITE.founder, jobTitle: 'Founder and Managing Director' },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE.url}/#service`,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}${SITE.logo}`,
      image: `${SITE.url}${SITE.ogImage}`,
      description: SITE.description,
      email: SITE.email,
      telephone: SITE.phoneHref,
      address,
      areaServed,
      slogan: SITE.tagline,
      parentOrganization: { '@id': ORG_ID },
    },
  ];
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: new URL(c.href, SITE.url).href,
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    '@type': 'Service',
    name,
    description,
    url: new URL(path, SITE.url).href,
    serviceType: name,
    provider: { '@id': ORG_ID },
    areaServed,
  };
}
