import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sprout, Flower2, Droplets, Sun, Bell } from "lucide-react";
import { mockSeasonalTips } from "@/data/mockData";
import { SeasonalTips } from "@/components/plants/SeasonalTips";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    icon: <Sprout className="h-10 w-10 text-primary" />,
    title: "Diagnose",
    description: "Check your plant's health"
  },
  {
    icon: <Flower2 className="h-10 w-10 text-primary" />,
    title: "Identify",
    description: "Discover plant species"
  },
  {
    icon: <Droplets className="h-10 w-10 text-primary" />,
    title: "Water Calculator",
    description: "Optimize watering by season"
  },
  {
    icon: <Bell className="h-10 w-10 text-primary" />,
    title: "Reminders",
    description: "Stay on top of your plant care"
  }
];

// Helper function to determine current season
function getCurrentSeason(): 'spring' | 'summer' | 'fall' | 'winter' {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'fall';
  return 'winter';
}

export default function Home() {
  const currentSeason = getCurrentSeason();

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">All Feature</h2>
      </div>

      <div className="mb-6">
        <Card className="bg-background border shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">Try Premium Features</span>
                  <Button size="sm" variant="default" className="h-7 px-3 text-xs">
                    Try
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Access advanced plant care features and unlimited plant identification
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {features.map((feature, index) => (
          <Card key={index} className="hover:bg-primary/5 transition-colors cursor-pointer border shadow-sm">
            <CardContent className="p-4">
              <div className="mb-3">{feature.icon}</div>
              <h3 className="font-medium text-base mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mb-6">
        <SeasonalTips tips={mockSeasonalTips} currentSeason={currentSeason} />
      </div>
    </div>
  );
}