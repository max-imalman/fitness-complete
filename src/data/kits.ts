import type { Kit, Option, Score, Tier } from './types';
import { gym, pilates, running, homeGym, pickleball } from './categories';

export const kits: Kit[] = [
  {
    slug: 'gym',
    sport: 'Gym',
    tag: 'GYM 01',
    color: '#ff6a2b',
    onColor: '#0d0f0c',
    headline: 'Gym Starter Kit',
    headlineAccent: 'What beginners actually need',
    subtitle: 'What you actually need for your first 90 days. Researched from real beginners, not gym influencers.',
    title: 'Gym Starter Kit: What Beginners Actually Need',
    description: 'The exact gear a beginner needs for their first 90 days at the gym. Researched from Reddit and real Amazon reviews, with no influencer picks.',
    cardBlurb: 'Bag, bottle, gloves, shaker, towel. The five things that make your first session feel normal.',
    giftPitch: 'Know someone who just got a gym membership? A bag, bottle, and a pair of gloves is a better gift than a gift card. It shows you thought about what they actually need.',
    reviewed: 'March 2026',
    blog: ['how-many-days-per-week-gym-beginner', 'what-to-bring-to-the-gym-first-day'],
    categories: gym,
  },
  {
    slug: 'pilates',
    sport: 'Pilates',
    tag: 'PIL 02',
    color: '#c9a7ff',
    onColor: '#0d0f0c',
    headline: 'Pilates Starter Kit',
    headlineAccent: 'What to buy before your first class',
    subtitle: 'What you actually need before your first class, and what to skip.',
    title: 'Pilates Starter Kit: What to Buy Before Your First Class',
    description: 'What you actually need before your first Pilates class. Researched from Reddit and real reviews, with no influencer picks.',
    cardBlurb: 'Mat, grip socks, bands. Studio ready from class one, without overbuying.',
    giftPitch: 'Know someone who just signed up for Pilates? A mat and grip socks make a thoughtful, practical gift. Add a band set and their first month of classes is covered.',
    reviewed: 'March 2026',
    blog: ['how-long-to-see-results-from-pilates', 'mat-pilates-vs-reformer'],
    categories: pilates,
  },
  {
    slug: 'running',
    sport: 'Running',
    tag: 'RUN 03',
    color: '#3ddc84',
    onColor: '#0d0f0c',
    headline: 'Running Starter Kit',
    headlineAccent: 'Start here, not with the expensive stuff',
    subtitle: "The right shoes are 90% of it. Here's the other 10%.",
    title: 'Running Starter Kit: Start Here, Not With the Expensive Stuff',
    description: "The right shoes are 90% of it. Here's everything a beginner runner actually needs, researched from Reddit and real reviews.",
    cardBlurb: 'Shoes are 90% of it. Socks, a belt, and a shirt that does not chafe cover the rest.',
    giftPitch: 'Know someone who just signed up for a 5K? Running socks and a FlipBelt make a surprisingly thoughtful gift. Add the shoes if you know their size.',
    reviewed: 'March 2026',
    blog: ['what-to-wear-first-run', 'how-many-days-per-week-gym-beginner'],
    categories: running,
  },
  {
    slug: 'home-gym',
    sport: 'Home Gym',
    tag: 'HOM 04',
    color: '#5b9bff',
    onColor: '#0d0f0c',
    headline: 'Home Gym Starter Kit',
    headlineAccent: 'A corner setup that actually works',
    subtitle: 'A functional setup that fits in a corner. No treadmill required.',
    title: 'Home Gym Starter Kit: A Corner Setup That Actually Works',
    description: 'A functional home gym setup that fits in a corner. No treadmill required. Researched from Reddit and real reviews.',
    cardBlurb: 'Dumbbells, bands, a bar, a mat, a roller. A full body setup that fits in one corner.',
    giftPitch: 'Know someone who keeps saying they want to work out at home? A band set and a foam roller is a practical gift under $60 that actually gets used.',
    reviewed: 'March 2026',
    blog: ['home-gym-apartment-under-500', 'how-many-days-per-week-gym-beginner'],
    categories: homeGym,
  },
  {
    slug: 'pickleball',
    sport: 'Pickleball',
    tag: 'PKL 05',
    color: '#2ccbb9',
    onColor: '#0d0f0c',
    headline: 'Pickleball Starter Kit',
    headlineAccent: 'What beginners actually need',
    subtitle: 'Paddle, shoes with lateral support, and the right balls for your surface. Everything you need before your first game.',
    title: 'Pickleball Starter Kit: What Beginners Actually Need',
    description: 'The exact gear a beginner needs before their first pickleball game. Paddle, court shoes, balls for your surface, and the safety gear most beginners skip.',
    cardBlurb: 'Paddle, court shoes, the right balls, a bag, and the eyewear most beginners skip.',
    giftPitch: 'Know someone who just picked up pickleball? A paddle and court shoes is a better gift than a gift card. It shows you thought about what they need to start well.',
    reviewed: 'March 2026',
    blog: ['how-to-start-playing-pickleball', 'what-shoes-for-pickleball'],
    categories: pickleball,
  },
];

export const kitPath = (kit: Pick<Kit, 'slug'>) => `/${kit.slug}-starter-set`;

export const getKit = (slug: string) => {
  const kit = kits.find((k) => k.slug === slug);
  if (!kit) throw new Error(`Unknown kit: ${slug}`);
  return kit;
};

export const tierLabel: Record<Tier, string> = {
  budget: 'Best value',
  pick: 'Our pick',
  premium: 'Long term',
};

export const pickOf = (options: Option[]) => options.find((o) => o.tier === 'pick') ?? options[0];

export const scoreTotal = (s: Score) => s.amazon + s.tests + s.beginner;

/** The score that belongs to an option: its own, or the category score when it is the pick. */
export const scoreOf = (option: Option, categoryScore?: Score) =>
  option.score ?? (option.tier === 'pick' ? categoryScore : undefined);

export const kitTotals = (kit: Kit) => {
  const sum = (choose: (o: Option[]) => Option) =>
    kit.categories.reduce((total, c) => total + choose(c.options).price, 0);
  return {
    cheapest: sum((o) => o.reduce((a, b) => (b.price < a.price ? b : a))),
    picks: sum(pickOf),
    allIn: sum((o) => o.reduce((a, b) => (b.price > a.price ? b : a))),
  };
};

export const siteStats = () => {
  const categories = kits.flatMap((k) => k.categories);
  return {
    kits: kits.length,
    categories: categories.length,
    products: categories.reduce((n, c) => n + c.options.length, 0),
  };
};
