import { Plant } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Sun, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { PlantReminders } from "./PlantReminders";

interface PlantDetailsProps {
  plant: Plant;
}

export function PlantDetails({ plant }: PlantDetailsProps) {
  return (
    <div className="container mx-auto px-4 py-6">
      <Link href="/">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Plants
        </Button>
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square relative rounded-lg overflow-hidden">
          <img
            src={plant.image}
            alt={plant.name}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{plant.name}</h1>
            <p className="text-lg text-muted-foreground">{plant.species}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4 flex items-center gap-2">
                <Droplets className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Water every</p>
                  <p className="font-medium">{plant.wateringFrequency} days</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-2">
                <Sun className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Sunlight</p>
                  <p className="font-medium capitalize">{plant.sunlight}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="text-muted-foreground">{plant.description}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Care Instructions</h2>
            <p className="text-muted-foreground">{plant.careInstructions}</p>
          </div>

          <PlantReminders 
            plant={plant}
            onAddReminder={(reminder) => {
              console.log('Add reminder:', reminder);
              // TODO: Implement reminder addition
            }}
            onCompleteReminder={(reminderId) => {
              console.log('Complete reminder:', reminderId);
              // TODO: Implement reminder completion
            }}
          />
        </div>
      </div>
    </div>
  );
}