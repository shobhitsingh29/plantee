
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Plant } from "@/types";

interface PlantStatisticsProps {
  plant: Plant;
}

export function PlantStatistics({ plant }: PlantStatisticsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium mb-2">Growth Progress</h3>
          <Progress value={plant.growthProgress || 0} className="h-2" />
          <p className="text-sm text-muted-foreground mt-2">
            {plant.growthProgress}% of expected size
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium mb-2">Health Score</h3>
          <div className="text-2xl font-bold text-primary">
            {plant.healthScore || 0}/100
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Based on recent analyses
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
