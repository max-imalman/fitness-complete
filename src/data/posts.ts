import type { Post } from './types';

export const posts: Post[] = [
  {
    slug: 'what-to-bring-to-the-gym-first-day',
    title: 'What to Bring to the Gym on Your First Day',
    description: 'A short, honest list. No overcomplicating it.',
    kit: 'gym',
    published: '2026-03-01',
    readMinutes: 2,
  },
  {
    slug: 'how-many-days-per-week-gym-beginner',
    title: 'How Many Days a Week Should a Beginner Go to the Gym?',
    description: 'The honest answer based on actual research, not gym bro advice. You need less than you think.',
    kit: 'gym',
    published: '2026-03-01',
    readMinutes: 3,
  },
  {
    slug: 'mat-pilates-vs-reformer',
    title: 'Mat Pilates vs Reformer Pilates: Which Should Beginners Start With?',
    description: 'The honest answer depends on what you actually want from it.',
    kit: 'pilates',
    published: '2026-03-01',
    readMinutes: 2,
  },
  {
    slug: 'how-long-to-see-results-from-pilates',
    title: 'How Long Until You See Results from Pilates? The Honest Answer',
    description: 'No hype, no before and after filters. What research and physiology actually say about the Pilates timeline.',
    kit: 'pilates',
    published: '2026-03-01',
    readMinutes: 3,
  },
  {
    slug: 'what-to-wear-first-run',
    title: 'What to Wear on Your First Run',
    description: 'Cotton kills. Everything else is negotiable.',
    kit: 'running',
    published: '2026-03-01',
    readMinutes: 2,
  },
  {
    slug: 'home-gym-apartment-under-500',
    title: 'How to Build a Home Gym in an Apartment for Under $500',
    description: 'A realistic buying guide for small spaces. No power racks, no treadmills, no wasted money on single use machines.',
    kit: 'home-gym',
    published: '2026-03-01',
    readMinutes: 3,
  },
  {
    slug: 'how-to-start-playing-pickleball',
    title: 'How to Start Playing Pickleball: What Nobody Tells Beginners',
    description: 'Before you buy a paddle, read this. A practical guide to starting pickleball without wasting money on gear you might not need.',
    kit: 'pickleball',
    published: '2026-03-15',
    readMinutes: 3,
  },
  {
    slug: 'what-shoes-for-pickleball',
    title: 'What Shoes Should You Wear for Pickleball?',
    description: 'Not running shoes. Here is what actually matters and why.',
    kit: 'pickleball',
    published: '2026-03-01',
    readMinutes: 2,
  },
];

export const getPost = (slug: string) => {
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Unknown post: ${slug}`);
  return post;
};

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
