import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  isPremium: boolean("is_premium").notNull().default(false),
});

export const plantMeasurements = pgTable("plant_measurements", {
  id: serial("id").primaryKey(),
  plantId: integer("plant_id").references(() => plants.id),
  height: integer("height").notNull(),
  width: integer("width").notNull(),
  numberOfLeaves: integer("number_of_leaves").notNull(),
  date: timestamp("date").notNull(),
});

export const plantJournals = pgTable("plant_journals", {
  id: serial("id").primaryKey(),
  plantId: integer("plant_id").references(() => plants.id),
  date: timestamp("date").notNull(),
  entry: text("entry").notNull(),
  mood: text("mood").notNull(),
  images: text("images").array(),
});

export const plantCare = pgTable("plant_care", {
  id: serial("id").primaryKey(),
  plantId: integer("plant_id").references(() => plants.id),
  careType: text("care_type").notNull(),
  frequency: integer("frequency").notNull(),
  lastPerformed: timestamp("last_performed").notNull(),
  notes: text("notes"),
});

export const plantDiseases = pgTable("plant_diseases", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  symptoms: text("symptoms").array(),
  treatments: text("treatments").array(),
  preventions: text("preventions").array(),
});

export const plantGoals = pgTable("plant_goals", {
  id: serial("id").primaryKey(),
  plantId: integer("plant_id").references(() => plants.id),
  title: text("title").notNull(),
  targetDate: timestamp("target_date").notNull(),
  type: text("type").notNull(),
  status: text("status").notNull(),
});

export const gardenZones = pgTable("garden_zones", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  plants: integer("plants").array(),
  lightConditions: text("light_conditions").notNull(),
  humidity: integer("humidity").notNull(),
  temperature: integer("temperature").notNull(),
});

export const plantTags = pgTable("plant_tags", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  color: text("color").notNull(),
});

export const plantAchievements = pgTable("plant_achievements", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  unlockedAt: timestamp("unlocked_at").notNull(),
});

export const plants = pgTable("plants", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  species: text("species").notNull(),
  image: text("image").notNull(),
  wateringFrequency: integer("watering_frequency").notNull(),
  sunlight: text("sunlight").notNull(),
  lastWatered: timestamp("last_watered").notNull(),
  description: text("description").notNull(),
  careInstructions: text("care_instructions").notNull(),
});

export const seasonalTips = pgTable("seasonal_tips", {
  id: serial("id").primaryKey(),
  season: text("season").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  applicablePlants: integer("applicable_plants").array()
});

export const reminders = pgTable("reminders", {
  id: serial("id").primaryKey(),
  plantId: integer("plant_id").references(() => plants.id),
  type: text("type").notNull(),
  dueDate: timestamp("due_date").notNull(),
  completed: boolean("completed").notNull().default(false),
  notes: text("notes"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
