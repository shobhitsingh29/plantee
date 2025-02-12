import { Plant } from "@/types";
import { PlantCard } from "./PlantCard";

interface PlantGridProps {
  plants: Plant[];
}

export function PlantGrid({ plants }: PlantGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
}
