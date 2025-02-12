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
import { Slider } from "@/components/ui/slider";
import { mockPlants } from "@/data/mockData";
import { calculateWateringSchedule } from "@/lib/waterCalculator";
import { Droplets, Thermometer, Waves } from "lucide-react";

export default function WaterCalculator() {
  const [selectedPlant, setSelectedPlant] = useState("");
  const [season, setSeason] = useState<'spring' | 'summer' | 'fall' | 'winter'>('spring');
  const [humidity, setHumidity] = useState(50);
  const [temperature, setTemperature] = useState(20);
  const [sunExposure, setSunExposure] = useState<'low' | 'medium' | 'high'>('medium');
  const [soilType, setSoilType] = useState<'sandy' | 'loamy' | 'clay'>('loamy');
  const [potSize, setPotSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [schedule, setSchedule] = useState<any>(null);

  const calculateSchedule = () => {
    const plant = mockPlants.find(p => p.id === selectedPlant);
    if (!plant) return;

    const result = calculateWateringSchedule(plant, {
      season,
      humidity,
      temperature,
      sunExposure,
      soilType,
      potSize
    });

    setSchedule(result);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-xl font-semibold mb-4">Water Calculator</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Plant & Environment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Select Plant</label>
                <Select value={selectedPlant} onValueChange={setSelectedPlant}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a plant" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockPlants.map(plant => (
                      <SelectItem key={plant.id} value={plant.id}>
                        {plant.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Season</label>
                <Select value={season} onValueChange={(value: any) => setSeason(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spring">Spring</SelectItem>
                    <SelectItem value="summer">Summer</SelectItem>
                    <SelectItem value="fall">Fall</SelectItem>
                    <SelectItem value="winter">Winter</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Temperature (°C)</label>
                <div className="flex items-center gap-4">
                  <Thermometer className="h-4 w-4 text-muted-foreground" />
                  <Slider
                    value={[temperature]}
                    onValueChange={([value]) => setTemperature(value)}
                    min={10}
                    max={35}
                    step={1}
                  />
                  <span className="w-12 text-sm">{temperature}°C</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Humidity (%)</label>
                <div className="flex items-center gap-4">
                  <Waves className="h-4 w-4 text-muted-foreground" />
                  <Slider
                    value={[humidity]}
                    onValueChange={([value]) => setHumidity(value)}
                    min={20}
                    max={90}
                    step={5}
                  />
                  <span className="w-12 text-sm">{humidity}%</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Sunlight Exposure</label>
                <Select value={sunExposure} onValueChange={(value: any) => setSunExposure(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Soil Type</label>
                <Select value={soilType} onValueChange={(value: any) => setSoilType(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sandy">Sandy</SelectItem>
                    <SelectItem value="loamy">Loamy</SelectItem>
                    <SelectItem value="clay">Clay</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Pot Size</label>
                <Select value={potSize} onValueChange={(value: any) => setPotSize(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                className="w-full" 
                onClick={calculateSchedule}
                disabled={!selectedPlant}
              >
                Calculate Watering Schedule
              </Button>
            </CardContent>
          </Card>
        </div>

        {schedule && (
          <Card>
            <CardHeader>
              <CardTitle>Watering Schedule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Water Every</span>
                  </div>
                  <p className="text-2xl font-bold">{schedule.daysInterval} days</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Waves className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Amount</span>
                  </div>
                  <p className="text-2xl font-bold">{schedule.waterAmount} ml</p>
                </div>
              </div>

              {schedule.notes.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium">Care Notes</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    {schedule.notes.map((note: string, index: number) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
