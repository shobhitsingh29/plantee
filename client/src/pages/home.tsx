import { Card, CardContent } from "@/components/ui/card";
import { Sprout, Flower2, Droplets, Sun, Bell } from "lucide-react";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    icon: <Sprout className="h-8 w-8 text-primary" />,
    title: "Diagnose",
    description: "Check your plant's health"
  },
  {
    icon: <Flower2 className="h-8 w-8 text-primary" />,
    title: "Identify",
    description: "Discover plant species"
  },
  {
    icon: <Droplets className="h-8 w-8 text-primary" />,
    title: "Water Calculator",
    description: "Optimize watering by season"
  },
  {
    icon: <Bell className="h-8 w-8 text-primary" />,
    title: "Reminders",
    description: "Stay on top of your plant care"
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to Plantoo</h1>
        <p className="text-muted-foreground">
          Your personal plant care assistant
        </p>
      </div>

      <div className="mb-8">
        <Card className="bg-primary/5 border-0">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-primary mb-2">
              <Sun className="h-5 w-5" />
              <span className="font-medium">Try Premium Features</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Access advanced plant care features and unlimited plant identification
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <Card key={index} className="hover:bg-primary/5 transition-colors cursor-pointer">
            <CardContent className="p-6">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}