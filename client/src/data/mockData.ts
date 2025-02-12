import { Plant, User, SeasonalTip } from '../types';

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

export const mockReminders = [
  {
    id: '1',
    plantId: '1',
    type: 'watering',
    dueDate: '2024-02-24',
    completed: false,
    createdAt: '2024-02-10',
    notes: 'Check soil moisture before watering'
  },
  {
    id: '2',
    plantId: '2',
    type: 'fertilizing',
    dueDate: '2024-03-01',
    completed: false,
    createdAt: '2024-02-15',
    notes: 'Use balanced fertilizer'
  },
  {
    id: '3',
    plantId: '3',
    type: 'pruning',
    dueDate: '2024-02-25',
    completed: false,
    createdAt: '2024-02-18',
    notes: 'Remove yellow leaves'
  }
];

export const mockSeasonalTips: SeasonalTip[] = [
  {
    id: '1',
    season: 'winter',
    title: 'Winter Care Essentials',
    description: 'Reduce watering frequency as plant growth slows down. Move plants away from cold drafts and ensure they get enough light during shorter days.',
    applicablePlants: ['1', '2', '3']
  },
  {
    id: '2',
    season: 'winter',
    title: 'Humidity Management',
    description: 'Indoor heating can dry out the air. Consider using a humidifier or pebble tray to maintain moisture levels for your tropical plants.',
    applicablePlants: ['2', '3']
  },
  {
    id: '3',
    season: 'spring',
    title: 'Spring Growth Boost',
    description: 'As days get longer, gradually increase watering frequency. Start fertilizing again as plants enter their growth phase.',
    applicablePlants: ['1', '2', '3']
  },
  {
    id: '4',
    season: 'summer',
    title: 'Summer Heat Protection',
    description: 'Protect plants from intense afternoon sun. Increase watering frequency and mist tropical plants to maintain humidity.',
    applicablePlants: ['2', '3']
  },
  {
    id: '5',
    season: 'fall',
    title: 'Fall Preparation',
    description: 'Gradually reduce watering and fertilizing as growth slows. Clean leaves and check for pests before bringing outdoor plants inside.',
    applicablePlants: ['1', '2', '3']
  }
];