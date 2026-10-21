// Outbound product links. Amazon Associates tags live in the environment (see .env.example)
// and are only added at build time.
//
// Every page area can carry its own Amazon tracking ID, so the Associates reports show which
// page actually sells. An area without its own ID falls back to AMAZON_ASSOCIATE_TAG.

export type Placement = 'gym' | 'pilates' | 'running' | 'home-gym' | 'pickleball' | 'gifts' | 'holiday';

const defaultTag: string | undefined = import.meta.env.AMAZON_ASSOCIATE_TAG;

// Literal env access on purpose: Vite only exposes variables it can see statically.
const placementTags: Record<Placement, string | undefined> = {
  gym: import.meta.env.AMAZON_TAG_GYM,
  pilates: import.meta.env.AMAZON_TAG_PILATES,
  running: import.meta.env.AMAZON_TAG_RUNNING,
  'home-gym': import.meta.env.AMAZON_TAG_HOME_GYM,
  pickleball: import.meta.env.AMAZON_TAG_PICKLEBALL,
  gifts: import.meta.env.AMAZON_TAG_GIFTS,
  holiday: import.meta.env.AMAZON_TAG_HOLIDAY,
};

if (!defaultTag) {
  // Without the tag the site still works, it just earns nothing on Amazon. Shout about it in the build log.
  console.warn('[links] AMAZON_ASSOCIATE_TAG is not set, Amazon links will be built without an affiliate tag.');
}

/** The Amazon tag used for a page area. */
export const amazonTagFor = (placement?: Placement) => (placement && placementTags[placement]) || defaultTag;

const retailers: Record<string, string> = {
  'amazon.com': 'Amazon',
  'aersf.com': 'Aer',
  'yeti.com': 'YETI',
  'rei.com': 'REI',
  'dickssportinggoods.com': "Dick's",
  'roguefitness.com': 'Rogue',
  'manduka.com': 'Manduka',
  'hydroflask.com': 'Hydro Flask',
  'brooksrunning.com': 'Brooks',
  'hoka.com': 'HOKA',
  'darntough.com': 'Darn Tough',
  'oakley.com': 'Oakley',
  'crbnpickleball.com': 'CRBN',
  'bowflex.com': 'Bowflex',
  'powerblock.com': 'PowerBlock',
  'trxtraining.com': 'TRX',
  'transparentlabs.com': 'Transparent Labs',
  'onnit.com': 'Onnit',
  'honolulusport.com': 'Honolulu',
  'hyperice.com': 'Hyperice',
  'lululemon.com': 'lululemon',
  'pointestudio.co': 'Pointe Studio',
  'sixzeropickleball.com': 'Six Zero',
};

const hostOf = (url: string) => new URL(url).hostname.replace(/^www\./, '');

/** Shop name for a product URL, derived from the link itself so the label can never disagree with the destination. */
export function retailerName(url: string): string {
  const host = hostOf(url);
  const known = Object.keys(retailers).find((domain) => host === domain || host.endsWith(`.${domain}`));
  if (known) return retailers[known];
  const name = host.split('.').slice(-2, -1)[0] ?? host;
  return name.charAt(0).toUpperCase() + name.slice(1);
}

/** Final outbound URL with the affiliate tag for this page area applied where we have one. */
export function affiliateUrl(url: string, placement?: Placement): string {
  const parsed = new URL(url);
  const tag = amazonTagFor(placement);
  if (tag && hostOf(url) === 'amazon.com') parsed.searchParams.set('tag', tag);
  return parsed.toString();
}

/** Attributes for every outbound product link. "sponsored" is how Google asks affiliate links to be marked. */
export const outboundRel = 'sponsored noopener noreferrer';

export const formatPrice = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`;

export const formatRange = (min: number, max: number) =>
  min === max ? formatPrice(min) : `${formatPrice(min)} to ${formatPrice(max)}`;
