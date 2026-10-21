import type { Kit, Tier } from './types';

export type GearKind =
  | 'duffel' | 'bottle' | 'gloves' | 'shaker' | 'towel' | 'mat' | 'socks' | 'bands'
  | 'shoe' | 'court-shoe' | 'belt' | 'shirt' | 'dumbbell' | 'pullup' | 'roller'
  | 'paddle' | 'balls' | 'backpack' | 'glasses';

/** Which illustration stands for each kit category. */
export const categoryArt: Record<string, GearKind> = {
  'gym-bag': 'duffel',
  'water-bottle': 'bottle',
  'workout-gloves': 'gloves',
  'shaker-bottle': 'shaker',
  'gym-towel': 'towel',
  'pilates-mat': 'mat',
  'grip-socks': 'socks',
  'resistance-bands': 'bands',
  'grip-gloves': 'gloves',
  'running-shoes': 'shoe',
  'running-socks': 'socks',
  'running-belt-hydration': 'belt',
  'moisture-wicking-shirt': 'shirt',
  'adjustable-dumbbells': 'dumbbell',
  'pull-up-bar': 'pullup',
  'exercise-mat': 'mat',
  'foam-roller': 'roller',
  paddle: 'paddle',
  balls: 'balls',
  'court-shoes': 'court-shoe',
  bag: 'backpack',
  eyewear: 'glasses',
};

export const artFor = (categoryId: string): GearKind => {
  const kind = categoryArt[categoryId];
  if (!kind) throw new Error(`No illustration for category: ${categoryId}`);
  return kind;
};

/** Colors per tier: plain paper for budget, the sport color for our pick, ink and volt for the long term buy. */
export const tierColors = (kit: Pick<Kit, 'color'>, tier: Tier) =>
  tier === 'budget'
    ? { fill: '#e9e5da', accent: kit.color }
    : tier === 'pick'
      ? { fill: kit.color, accent: '#fbfaf6' }
      : { fill: '#3a3f39', accent: '#d8ff36' };
