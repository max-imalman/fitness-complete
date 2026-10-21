// Holiday and Black Friday 2026 gift guide. Every gift points at a scored product in
// categories.ts, so prices, links and scores stay in one place.
import type { Tier } from './types';

export const blackFriday = '2026-11-27';
export const cyberMonday = '2026-11-30';

export interface HolidayPick {
  kit: string;
  category: string;
  tier: Tier;
  /** Why it works as a gift, in one or two sentences. */
  note: string;
  /** Shown instead of the kit price when the price swings a lot. */
  priceNote?: string;
  safety?: string;
}

export interface HolidayBucket {
  id: string;
  title: string;
  blurb: string;
  picks: HolidayPick[];
}

export const holidayBuckets: HolidayBucket[] = [
  {
    id: 'stocking-stuffers',
    title: 'Stocking stuffers under $25',
    blurb: 'Small, useful, and impossible to get wrong. These are the things beginners use every single session.',
    picks: [
      { kit: 'pickleball', category: 'balls', tier: 'pick', note: 'The ball most outdoor courts play with. Nobody ever has enough of them, and they wear out faster than people expect.' },
      { kit: 'running', category: 'running-socks', tier: 'pick', note: 'Blister protection that lasts for years. Lifetime guarantee, and once someone runs in them they never go back to cotton.' },
      { kit: 'pilates', category: 'resistance-bands', tier: 'pick', note: 'The loop bands Pilates instructors actually use. Light, packable, and good for home sessions between classes.' },
      { kit: 'pilates', category: 'grip-socks', tier: 'pick', note: 'Most studios require grip socks. Beginners usually find out at the door, so this one is a guaranteed win.' },
      { kit: 'gym', category: 'gym-towel', tier: 'pick', note: 'Some gyms turn you away without a towel. This one dries fast and clips to the bag so it does not end up on the floor.' },
      { kit: 'gym', category: 'shaker-bottle', tier: 'pick', note: 'The standard shaker for a reason. Lump free shakes and a lid that survives a gym bag.' },
    ],
  },
  {
    id: 'under-50',
    title: 'Under $50',
    blurb: 'The sweet spot for a coworker, a sibling, or the friend who just signed up. Each of these is our top pick in its category.',
    picks: [
      { kit: 'gym', category: 'water-bottle', tier: 'pick', note: 'Our highest scoring gym item. One handed drinking between sets, leakproof in a bag, dishwasher safe.' },
      { kit: 'pilates', category: 'water-bottle', tier: 'pick', note: 'Keeps water cold through a long class and a commute. The wide mouth takes ice cubes and is easy to clean.' },
      { kit: 'home-gym', category: 'foam-roller', tier: 'pick', note: 'Recovery gear people do not buy for themselves but use every day once they own it.' },
      { kit: 'gym', category: 'gym-bag', tier: 'pick', note: 'A real bag with a shoe compartment removes the last excuse not to go straight from work.' },
      { kit: 'gym', category: 'workout-gloves', tier: 'pick', note: 'Protects new lifters from torn palms in the first weeks, with wrist support built in.' },
      { kit: 'home-gym', category: 'pull-up-bar', tier: 'pick', note: 'Fits most door frames with no screws. A full upper body workout for someone who trains at home.' },
    ],
  },
  {
    id: 'under-150',
    title: '$50 to $150',
    blurb: 'Gifts that feel like an upgrade. Shoes are the best gift you can give a beginner runner, as long as you know their size.',
    picks: [
      { kit: 'running', category: 'running-shoes', tier: 'pick', note: 'The most recommended beginner running shoe we found, and one of our top scorers. Include a gift receipt, fit is personal.' },
      { kit: 'pilates', category: 'pilates-mat', tier: 'pick', note: 'The mat people upgrade to after a year of classes. Dense and grippy, it lasts for years of daily use.' },
      { kit: 'pickleball', category: 'paddle', tier: 'pick', note: 'The first serious paddle most players buy. A big step up from the wooden or loaner paddles beginners start with.' },
      { kit: 'pickleball', category: 'court-shoes', tier: 'pick', note: 'Running shoes on a court are an ankle injury waiting to happen. Court shoes are the gift that keeps them playing.' },
    ],
  },
  {
    id: 'splurge',
    title: 'The splurge',
    blurb: 'For the person who already committed and deserves the long term version.',
    picks: [
      {
        kit: 'home-gym',
        category: 'adjustable-dumbbells',
        tier: 'pick',
        note: 'Replaces an entire rack of dumbbells in one corner. The gift that gets mentioned every time they train.',
        priceNote: 'about $300 to $400',
        safety: 'Buy the Results Series only. The original SelectTech 552 and 1090 were recalled in June 2025, so skip used or suspiciously cheap listings of older models.',
      },
      { kit: 'pickleball', category: 'eyewear', tier: 'pick', note: 'Eye injuries are a real risk at the kitchen line. Sport frames they will actually wear, not safety goggles.' },
      { kit: 'pickleball', category: 'paddle', tier: 'premium', note: 'A tour level paddle for the friend who plays four times a week and talks about nothing else.' },
    ],
  },
];

export interface DealNote {
  brand: string;
  what: string;
  source: string;
  url: string;
}

/** What actually happened last Black Friday, so readers know what a real discount looks like. */
export const lastYear: DealNote[] = [
  {
    brand: 'Owala',
    what: 'The 40 oz tumbler dropped about 20%, from $39.99 to $31.99.',
    source: 'NBC Select, 2025',
    url: 'https://www.nbcnews.com/select/shopping/owala-black-friday-deals-2025-rcna245924',
  },
  {
    brand: 'HOKA',
    what: 'Roughly 20% to 30% off popular models like the Bondi 9 and Mach 6.',
    source: 'Forbes, 2025',
    url: 'https://www.forbes.com/sites/forbes-personal-shopper/2025/11/28/hoka-black-friday-sale-2025/',
  },
  {
    brand: 'Brooks',
    what: 'Running deals advertised at up to 46% off. Check which model and version a deal is for.',
    source: "Tom's Guide, 2025",
    url: 'https://www.tomsguide.com/deals/brooks-running-black-friday-deals-save-up-to-46-with-5-deals-i-recommend',
  },
  {
    brand: 'Bowflex',
    what: 'Results Series 552 pairs listed around $400 at Amazon and Best Buy outside sales, with used units far cheaper.',
    source: 'Slickdeals, March 2026',
    url: 'https://slickdeals.net/f/19347105-bowflex-results-series-selecttech-dumbbells-552-series-227-98',
  },
];
