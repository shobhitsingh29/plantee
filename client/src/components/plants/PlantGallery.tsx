
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plant } from "@/types";

interface PlantGalleryProps {
  plant: Plant;
}

export function PlantGallery({ plant }: PlantGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <img
              src={plant.images?.[activeIndex] || plant.image}
              alt={plant.name}
              className="object-cover w-full h-full"
            />
          </div>
          
          {plant.images && plant.images.length > 1 && (
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {plant.images.map((img, idx) => (
                <Button
                  key={idx}
                  variant={idx === activeIndex ? "default" : "outline"}
                  size="icon"
                  className="w-12 h-12 p-0"
                  onClick={() => setActiveIndex(idx)}
                >
                  <img
                    src={img}
                    alt={`${plant.name} ${idx + 1}`}
                    className="object-cover w-full h-full rounded"
                  />
                </Button>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
