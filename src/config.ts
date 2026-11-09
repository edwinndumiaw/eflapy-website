// Site wide settings. Change values here and they update everywhere.

/** Booking link for the free Operations Review. Change this one line to update every button. */
export const BOOKING_URL = 'https://link.eflapydigital.com/widget/bookings/book-a-call-with-eflapy-digital';

export const SITE = {
  name: 'Eflapy Digital',
  url: 'https://www.eflapydigital.com',
  description:
    'Eflapy Digital is an AI operations firm based in Nairobi, Kenya, founded in October 2025. We find where AI fits in your business, build it, and get your company using it.',
  tagline: 'Off you. On us.',
  process: 'Find. Build. Use.',
  coreLine: 'We find where AI fits in your business, build it, and get your company using it.',
  email: 'edwin@eflapydigital.com',
  phone: '+254 740 896002',
  phoneHref: '+254740896002',
  city: 'Nairobi',
  country: 'Kenya',
  founder: 'Edwin Ndumia',
  founderImage: '/edwin-ndumia.jpg',
  foundingDate: '2025-10',
  countries: 'the UK, Kenya, the US, the Gulf, Panama, Spain and India',
  /** Longer company description used in JSON-LD and llms.txt. Keep it in step with the About page. */
  about:
    'Eflapy Digital is an AI operations firm based in Nairobi, Kenya, founded in October 2025. We work with organisations of 20 to 500 people to find where AI fits in their operations, build it, and get their people using it. We have built for clients in the UK, Kenya, the US, the Gulf, Panama, Spain and India, working remotely with clients abroad and on site with clients in and around Nairobi.',
  ogImage: '/og-default.png',
  logo: '/logo-light.png',
};

export const NAV = [
  { label: 'Services', href: '/services/' },
  { label: 'Case studies', href: '/case-studies/' },
  { label: 'About', href: '/about/' },
  { label: 'Blog', href: '/blog/' },
];

export const CTA = {
  heading: 'Bring one process. We will show you where AI fits.',
  body: 'Book a free 30 minute Operations Review. You leave with a written summary whether you hire us or not.',
  button: 'Book an operations review',
};
