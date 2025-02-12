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
export interface PlantMeasurement {
  id: string;
  plantId: string;
  height: number;
  width: number;
  numberOfLeaves: number;
  date: string;
}

export interface PlantJournal {
  id: string;
  plantId: string;
  date: string;
  entry: string;
  mood: 'happy' | 'neutral' | 'concerned';
  images?: string[];
}

export interface PlantCare {
  id: string;
  plantId: string;
  careType: 'watering' | 'fertilizing' | 'pruning' | 'repotting' | 'misting';
  frequency: number;
  lastPerformed: string;
  notes: string;
}

export interface PlantDisease {
  id: string;
  name: string;
  symptoms: string[];
  treatments: string[];
  preventions: string[];
}

export interface PlantGoal {
  id: string;
  plantId: string;
  title: string;
  targetDate: string;
  type: 'growth' | 'bloom' | 'propagation';
  status: 'pending' | 'achieved' | 'missed';
}

export interface GardenZone {
  id: string;
  name: string;
  plants: string[];
  lightConditions: 'full-sun' | 'partial-shade' | 'full-shade';
  humidity: number;
  temperature: number;
}

export interface PlantTag {
  id: string;
  name: string;
  color: string;
}

export interface PlantSocial {
  likes: number;
  comments: Comment[];
  shared: boolean;
}

export interface PlantSchedule {
  morning: CareTask[];
  afternoon: CareTask[];
  evening: CareTask[];
}

export interface CareTask {
  id: string;
  plantId: string;
  task: string;
  completed: boolean;
  time: string;
}

export interface WeatherImpact {
  condition: string;
  impact: 'positive' | 'negative' | 'neutral';
  recommendation: string;
}

export interface PlantAchievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: string;
}
