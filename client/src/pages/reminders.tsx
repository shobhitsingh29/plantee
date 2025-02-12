
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Calendar, Plus } from "lucide-react";
import { mockPlants } from "@/data/mockData";

export default function RemindersPage() {
  const reminders = mockPlants.map(plant => ({
    id: plant.id,
    plantName: plant.name,
    nextWatering: new Date(new Date(plant.lastWatered).getTime() + plant.wateringFrequency * 24 * 60 * 60 * 1000)
  }));

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Plant Care Reminders</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Reminder
        </Button>
      </div>
      
      <div className="grid gap-4">
        {reminders.map(reminder => (
          <Card key={reminder.id}>
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <Bell className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">{reminder.plantName}</p>
                  <p className="text-sm text-muted-foreground">
                    Water on {reminder.nextWatering.toLocaleDateString()}
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Mark Done
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
