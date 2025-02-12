
import { db } from './db';
import { plants, seasonalTips, reminders } from '../shared/schema';

async function seed() {
  try {
    // Insert mock plants
    const insertedPlants = await db.insert(plants).values([
      {
        name: 'Snake Plant',
        species: 'Sansevieria trifasciata',
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?w=400&q=80',
        wateringFrequency: 14,
        sunlight: 'low',
        lastWatered: new Date('2024-02-10'),
        description: 'A hardy indoor plant known for its air-purifying qualities.',
        careInstructions: 'Water every 2 weeks, tolerates low light conditions.'
      },
      {
        name: 'Monstera',
        species: 'Monstera deliciosa',
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80',
        wateringFrequency: 7,
        sunlight: 'medium',
        lastWatered: new Date('2024-02-15'),
        description: 'Tropical plant with distinctive split leaves.',
        careInstructions: 'Weekly watering, bright indirect light preferred.'
      }
    ]).returning();

    // Insert mock seasonal tips
    await db.insert(seasonalTips).values([
      {
        season: 'winter',
        title: 'Winter Care Essentials',
        description: 'Reduce watering frequency as plant growth slows down.',
        applicablePlants: [insertedPlants[0].id, insertedPlants[1].id]
      },
      {
        season: 'spring',
        title: 'Spring Growth Boost',
        description: 'Start fertilizing again as plants enter growth phase.',
        applicablePlants: [insertedPlants[0].id, insertedPlants[1].id]
      }
    ]);

    // Insert mock reminders
    await db.insert(reminders).values([
      {
        plantId: insertedPlants[0].id,
        type: 'watering',
        dueDate: new Date('2024-02-24'),
        completed: false,
        notes: 'Check soil moisture before watering'
      },
      {
        plantId: insertedPlants[1].id,
        type: 'fertilizing',
        dueDate: new Date('2024-03-01'),
        completed: false,
        notes: 'Use balanced fertilizer'
      }
    ]);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seed();
