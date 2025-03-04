import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Upload } from "lucide-react";
import { identifyPlantFromImage, analyzePlantHealth } from "@/lib/gemini";
import { PlantHealth } from "@/components/plants/PlantHealth";

export default function IdentifyPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isIdentifying, setIsIdentifying] = useState(false);
  const [isAnalyzingHealth, setIsAnalyzingHealth] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [healthAnalysis, setHealthAnalysis] = useState<any>(null);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setResult(null);
        setHealthAnalysis(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIdentify = async () => {
    if (!selectedImage) return;

    try {
      setIsIdentifying(true);
      const identificationResult = await identifyPlantFromImage(selectedImage);
      setResult(identificationResult);
    } catch (error) {
      console.error('Error identifying plant:', error);
    } finally {
      setIsIdentifying(false);
    }
  };

  const handleHealthCheck = async () => {
    if (!selectedImage) return;

    try {
      setIsAnalyzingHealth(true);
      const healthResult = await analyzePlantHealth(selectedImage);
      setHealthAnalysis(healthResult);
    } catch (error) {
      console.error('Error analyzing plant health:', error);
    } finally {
      setIsAnalyzingHealth(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-xl font-semibold mb-4">Identify & Analyze Plant</h2>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              {selectedImage ? (
                <div className="relative w-full max-w-md">
                  <img
                    src={selectedImage}
                    alt="Selected plant"
                    className="w-full h-auto rounded-lg"
                  />
                  <Button
                    variant="outline"
                    className="absolute top-2 right-2"
                    onClick={() => {
                      setSelectedImage(null);
                      setResult(null);
                      setHealthAnalysis(null);
                    }}
                  >
                    Change
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex flex-col items-center">
                    <Camera className="h-12 w-12 text-gray-400 mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Take a photo or upload an image of your plant
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="gap-2">
                      <Camera className="h-4 w-4" />
                      Take Photo
                    </Button>
                    <label>
                      <Button variant="outline" className="gap-2" asChild>
                        <div>
                          <Upload className="h-4 w-4" />
                          Upload Image
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageSelect}
                          />
                        </div>
                      </Button>
                    </label>
                  </div>
                </div>
              )}
            </div>

            {selectedImage && (
              <div className="flex gap-2">
                <Button 
                  className="flex-1" 
                  onClick={handleIdentify}
                  disabled={isIdentifying}
                >
                  {isIdentifying ? "Identifying..." : "Identify Plant"}
                </Button>
                <Button 
                  className="flex-1" 
                  onClick={handleHealthCheck}
                  disabled={isAnalyzingHealth}
                  variant="secondary"
                >
                  {isAnalyzingHealth ? "Analyzing..." : "Check Health"}
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{result.commonName}</h3>
              <p className="text-sm text-muted-foreground italic">{result.scientificName}</p>
              <div className="space-y-2">
                <p className="text-sm">{result.description}</p>
                <h4 className="font-medium mt-4">Care Instructions:</h4>
                <ul className="text-sm space-y-2">
                  <li>Water: {result.careInstructions.water}</li>
                  <li>Sunlight: {result.careInstructions.sunlight}</li>
                  <li>Soil: {result.careInstructions.soil}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {healthAnalysis && (
        <PlantHealth analysis={healthAnalysis} isLoading={isAnalyzingHealth} />
      )}
    </div>
  );
}