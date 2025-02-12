import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Bell, Check } from "lucide-react";
import { Plant, Reminder } from "@/types";

interface PlantRemindersProps {
  plant: Plant;
  reminders?: Reminder[];
  onAddReminder?: (reminder: Omit<Reminder, 'id' | 'createdAt'>) => void;
  onCompleteReminder?: (reminderId: string) => void;
}

export function PlantReminders({
  plant,
  reminders = [],
  onAddReminder,
  onCompleteReminder,
}: PlantRemindersProps) {
  const [selectedType, setSelectedType] = useState<Reminder['type']>('watering');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [notes, setNotes] = useState('');

  const handleAddReminder = () => {
    if (onAddReminder) {
      onAddReminder({
        plantId: plant.id,
        type: selectedType,
        dueDate: selectedDate.toISOString(),
        completed: false,
        notes,
      });
      // Reset form
      setSelectedType('watering');
      setSelectedDate(new Date());
      setNotes('');
    }
  };

  const activeReminders = reminders.filter(r => !r.completed);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Care Reminders
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <Select value={selectedType} onValueChange={(value: any) => setSelectedType(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Reminder type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="watering">Watering</SelectItem>
                  <SelectItem value="fertilizing">Fertilizing</SelectItem>
                  <SelectItem value="pruning">Pruning</SelectItem>
                  <SelectItem value="repotting">Repotting</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {format(selectedDate, 'PP')}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => date && setSelectedDate(date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <Button onClick={handleAddReminder} className="w-full">
            Add Reminder
          </Button>
        </div>

        {activeReminders.length > 0 ? (
          <div className="space-y-2">
            {activeReminders.map((reminder) => (
              <Card key={reminder.id}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium capitalize">{reminder.type}</p>
                    <p className="text-sm text-muted-foreground">
                      Due: {format(new Date(reminder.dueDate), 'PPP')}
                    </p>
                    {reminder.notes && (
                      <p className="text-sm text-muted-foreground mt-1">{reminder.notes}</p>
                    )}
                  </div>
                  {onCompleteReminder && (
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => onCompleteReminder(reminder.id)}
                    >
                      <Check className="h-4 w-4" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No active reminders</p>
        )}
      </CardContent>
    </Card>
  );
}
