export interface Author {
  name: string;
  slug: string;
  title: string;
  bio: string;
  credentials: string[];
  photo: string;
  social: {
    x?: string;
    linkedin?: string;
  };
}

export const authors: Record<string, Author> = {
  'ryan-mitchell': {
    name: 'Ryan Mitchell',
    slug: 'ryan-mitchell',
    title: 'NASM-CPT | Fitness Writer',
    bio: 'Ryan spent his early 20s buying the wrong gear, skipping leg day, and wondering why he wasn\'t seeing results. A decade later, he\'s a NASM-certified personal trainer who writes about exactly the mistakes he made so beginners don\'t have to repeat them. He\'s been a member of seven gyms across four cities and has tested more water bottles than he\'d like to admit.',
    credentials: ['NASM-CPT', '10+ years of training experience', 'Former beginner who wasted a lot of money on the wrong gear'],
    photo: '/images/authors/ryan-mitchell.jpg',
    social: {
      x: 'https://x.com/ryanmitchellfitness',
    },
  },
};

export function getAuthor(slug: string): Author | undefined {
  return authors[slug];
}
