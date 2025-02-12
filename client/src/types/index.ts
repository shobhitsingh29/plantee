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
