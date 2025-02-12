import { PlantDetails } from "@/components/plants/PlantDetails";
import { mockPlants } from "@/data/mockData";
import { useRoute } from "wouter";

export default function PlantPage() {
  const [, params] = useRoute("/plant/:id");
  const plant = mockPlants.find((p) => p.id === params?.id);

  if (!plant) {
    return <div>Plant not found</div>;
  }

  return <PlantDetails plant={plant} />;
}
