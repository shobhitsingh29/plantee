import { Plant, User } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
};

export const mockPlants: Plant[] = [
  {
    id: '1',
    name: 'Snake Plant',
    species: 'Sansevieria trifasciata',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?w=400&q=80',
    wateringFrequency: 14,
    sunlight: 'low',
    lastWatered: '2024-02-10',
    description: 'A hardy indoor plant known for its air-purifying qualities.',
    careInstructions: 'Water every 2 weeks, tolerates low light conditions.'
  },
  {
    id: '2',
    name: 'Monstera',
    species: 'Monstera deliciosa',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80',
    wateringFrequency: 7,
    sunlight: 'medium',
    lastWatered: '2024-02-15',
    description: 'Tropical plant with distinctive split leaves.',
    careInstructions: 'Weekly watering, bright indirect light preferred.'
  },
  {
    id: '3',
    name: 'Peace Lily',
    species: 'Spathiphyllum',
    image: 'https://images.unsplash.com/photo-1593691528492-f84c1dfb8174?w=400&q=80',
    wateringFrequency: 5,
    sunlight: 'medium',
    lastWatered: '2024-02-18',
    description: 'Elegant flowering plant that improves air quality.',
    careInstructions: 'Keep soil moist, medium indirect light.'
  }
];
