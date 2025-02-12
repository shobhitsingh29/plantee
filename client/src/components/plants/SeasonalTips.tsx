import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SeasonalTip } from "@/types";
import { Sun } from "lucide-react";

interface SeasonalTipsProps {
  tips: SeasonalTip[];
  currentSeason: 'spring' | 'summer' | 'fall' | 'winter';
}

export function SeasonalTips({ tips, currentSeason }: SeasonalTipsProps) {
  const seasonalTips = tips.filter(tip => tip.season === currentSeason);

  if (seasonalTips.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sun className="h-5 w-5" />
          Seasonal Tips
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {seasonalTips.map((tip) => (
            <Card key={tip.id} className="bg-primary/5">
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">{tip.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
