import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Plant } from "@/types";
import { Droplets, Sun } from "lucide-react";
import { Link } from "wouter";

interface PlantCardProps {
  plant: Plant;
}

export function PlantCard({ plant }: PlantCardProps) {
  return (
    <Link href={`/plant/${plant.id}`}>
      <a className="block transform transition-all hover:scale-[1.02]">
        <Card className="overflow-hidden animate-scale hover:shadow-lg transition-shadow duration-300">
          <div className="aspect-square relative overflow-hidden">
            <img
              src={plant.image}
              alt={plant.name}
              className="object-cover w-full h-full"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg mb-1">{plant.name}</h3>
            <p className="text-sm text-muted-foreground">{plant.species}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Droplets className="h-4 w-4" />
              <span>{plant.wateringFrequency}d</span>
            </div>
            <div className="flex items-center gap-1">
              <Sun className="h-4 w-4" />
              <span>{plant.sunlight}</span>
            </div>
          </CardFooter>
        </Card>
      </a>
    </Link>
  );
}