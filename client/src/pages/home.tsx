import { PlantGrid } from "@/components/plants/PlantGrid";
import { mockPlants } from "@/data/mockData";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Plants</h1>
        <p className="text-muted-foreground">
          Keep track of your plants and their care schedules
        </p>
      </div>
      <PlantGrid plants={mockPlants} />
    </div>
  );
}
