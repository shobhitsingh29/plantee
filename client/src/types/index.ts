export interface Plant {
  id: string;
  name: string;
  species: string;
  image: string;
  wateringFrequency: number; // days
  sunlight: 'low' | 'medium' | 'high';
  lastWatered?: string;
  description: string;
  careInstructions: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Reminder {
  id: string;
  plantId: string;
  type: 'watering' | 'fertilizing' | 'pruning' | 'repotting';
  dueDate: string;
  completed: boolean;
  createdAt: string;
  notes?: string;
}

export interface SeasonalTip {
  id: string;
  season: 'spring' | 'summer' | 'fall' | 'winter';
  title: string;
  description: string;
  applicablePlants: string[]; // plant IDs
}