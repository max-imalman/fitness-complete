export const SITE_URL = 'https://www.fitness-complete.com';
export const SITE_NAME = 'fitness-complete';

export const absolute = (path: string) => new URL(path, SITE_URL).toString();

/**
 * Serialize JSON-LD for a <script> tag. Escaping "<" keeps any string in the
 * data from closing the script element early.
 */
export const jsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c');

export const organization = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: absolute('/favicon.svg'),
  contactPoint: { '@type': 'ContactPoint', email: 'hello@fitness-complete.com', contactType: 'customer support' },
};
