export interface Author {
  name: string;
  slug: string;
  title: string;
  bio: string;
  credentials: string[];
  initials: string;
  social: {
    x?: string;
    linkedin?: string;
  };
}

export const authors: Record<string, Author> = {
  'ryan-mitchell': {
    name: 'fitness-complete Editorial Team',
    slug: 'ryan-mitchell',
    title: 'Researched from real beginners',
    bio: 'Every recommendation on fitness-complete is researched from Reddit community consensus, independently tested by sources like Wirecutter and Garage Gym Reviews, and verified against Amazon purchase patterns. Commission rates play no role in our picks.',
    credentials: [
      'Reddit community consensus (r/fitness, r/xxfitness, r/beginnerfitness)',
      'Independent testing: Wirecutter, Garage Gym Reviews, OutdoorGearLab',
      'Amazon verified purchase patterns',
      'No commission influence on recommendations',
    ],
    initials: 'FC',
    social: {},
  },
};

export function getAuthor(slug: string): Author | undefined {
  return authors[slug];
}
