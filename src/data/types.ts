export type Tier = 'budget' | 'pick' | 'premium';

/** Amazon verified reviews (max 50) + independent tests (max 35) + beginner failure prevention (max 15). */
export interface Score {
  amazon: number;
  tests: number;
  beginner: number;
}

export interface Option {
  tier: Tier;
  name: string;
  /** Approximate US retail price in dollars. */
  price: number;
  bestFor: string;
  img?: string;
  url: string;
  /** Per product score, when the option was scored on its own. */
  score?: Score;
}

export interface Category {
  id: string;
  name: string;
  why: string;
  pickReason: string;
  preNote?: string;
  note?: string;
  safetyNote?: string;
  quote?: string;
  quoteSource?: string;
  /** Score of the "Our pick" option, when options were not scored individually. */
  score?: Score;
  options: Option[];
}

export interface BlogLink {
  slug: string;
  title: string;
  teaser: string;
}

export interface Kit {
  slug: string;
  sport: string;
  /** Locker tag shown across the site, e.g. "GYM 01". */
  tag: string;
  color: string;
  /** Text color that stays readable on top of `color`. */
  onColor: string;
  headline: string;
  headlineAccent: string;
  subtitle: string;
  title: string;
  description: string;
  cardBlurb: string;
  giftPitch: string;
  reviewed: string;
  blog: string[];
  categories: Category[];
}

export interface GiftIdea {
  kit: string;
  tier: 'budget' | 'mid' | 'premium';
  name: string;
  min: number;
  max: number;
  note?: string;
  url: string;
  featured?: boolean;
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  kit: string;
  published: string;
  readMinutes: number;
}
