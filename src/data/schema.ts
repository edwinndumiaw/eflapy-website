import { SITE } from '../config';

export type Crumb = { name: string; href: string };

const ORG_ID = `${SITE.url}/#organization`;

const areaServed = [
  { '@type': 'Country', name: 'United Kingdom' },
  { '@type': 'Country', name: 'Kenya' },
  { '@type': 'Country', name: 'United States' },
  { '@type': 'Country', name: 'United Arab Emirates' },
  { '@type': 'Country', name: 'Panama' },
  { '@type': 'Country', name: 'Spain' },
  { '@type': 'Country', name: 'India' },
];

const founder = {
  '@type': 'Person',
  '@id': `${SITE.url}/about/#edwin-ndumia`,
  name: SITE.founder,
  jobTitle: 'Head of AI Operations',
  image: `${SITE.url}${SITE.founderImage}`,
  email: SITE.email,
  worksFor: { '@id': ORG_ID },
};

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
      description: SITE.about,
      foundingDate: SITE.foundingDate,
      foundingLocation: { '@type': 'Place', name: 'Nairobi, Kenya' },
      areaServed,
      slogan: SITE.tagline,
      founder,
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE.url}/#service`,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}${SITE.logo}`,
      image: `${SITE.url}${SITE.ogImage}`,
      description: SITE.about,
      foundingDate: SITE.foundingDate,
      founder: { '@id': founder['@id'] },
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
