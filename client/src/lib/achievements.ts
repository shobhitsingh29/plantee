
export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: (userStats: UserStats) => boolean;
}

export interface UserStats {
  plantsGrown: number;
  successfulIdentifications: number;
  wateringStreak: number;
  healthyPlants: number;
}

export const achievements: Achievement[] = [
  {
    id: 'green-thumb',
    title: 'Green Thumb',
    description: 'Successfully grow 5 plants',
    icon: '🌱',
    condition: (stats) => stats.plantsGrown >= 5
  },
  {
    id: 'plant-whisperer',
    title: 'Plant Whisperer',
    description: 'Maintain perfect health for 3 plants',
    icon: '🌿',
    condition: (stats) => stats.healthyPlants >= 3
  },
  {
    id: 'watering-master',
    title: 'Watering Master',
    description: 'Maintain a 7-day watering streak',
    icon: '💧',
    condition: (stats) => stats.wateringStreak >= 7
  }
];
