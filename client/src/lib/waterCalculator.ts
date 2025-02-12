import { type Plant } from "@/types";

interface WateringFactors {
  season: 'spring' | 'summer' | 'fall' | 'winter';
  humidity: number; // percentage
  temperature: number; // celsius
  sunExposure: 'low' | 'medium' | 'high';
  soilType: 'sandy' | 'loamy' | 'clay';
  potSize: 'small' | 'medium' | 'large';
}

interface WateringSchedule {
  daysInterval: number;
  waterAmount: number; // ml
  notes: string[];
}

const seasonMultiplier = {
  spring: 1,
  summer: 1.3,
  fall: 0.8,
  winter: 0.6
};

const sunExposureMultiplier = {
  low: 0.7,
  medium: 1,
  high: 1.3
};

const soilTypeRetention = {
  sandy: 0.7, // drains quickly
  loamy: 1, // balanced
  clay: 1.3 // retains water
};

const potSizeMultiplier = {
  small: 0.7,
  medium: 1,
  large: 1.4
};

export function calculateWateringSchedule(
  plant: Plant,
  factors: WateringFactors
): WateringSchedule {
  // Base watering interval from plant's requirements
  let interval = plant.wateringFrequency;

  // Adjust for season
  interval *= seasonMultiplier[factors.season];

  // Adjust for temperature
  // Increase frequency for higher temperatures
  if (factors.temperature > 25) {
    interval *= 0.8;
  } else if (factors.temperature < 15) {
    interval *= 1.2;
  }

  // Adjust for humidity
  // Higher humidity means less frequent watering
  if (factors.humidity > 70) {
    interval *= 1.2;
  } else if (factors.humidity < 40) {
    interval *= 0.8;
  }

  // Adjust for sun exposure
  interval *= sunExposureMultiplier[factors.sunExposure];

  // Adjust for soil type
  interval *= soilTypeRetention[factors.soilType];

  // Calculate water amount based on pot size
  const baseAmount = 250; // base amount in ml
  const waterAmount = baseAmount * potSizeMultiplier[factors.potSize];

  // Generate care notes
  const notes: string[] = [];
  
  if (factors.temperature > 25) {
    notes.push("Consider misting the plant between waterings due to high temperature");
  }
  if (factors.humidity < 40) {
    notes.push("Use a humidity tray to maintain moisture");
  }
  if (factors.season === 'winter') {
    notes.push("Reduce watering frequency during dormant winter period");
  }

  return {
    daysInterval: Math.round(interval),
    waterAmount: Math.round(waterAmount),
    notes
  };
}
