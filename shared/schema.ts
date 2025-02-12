import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
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
