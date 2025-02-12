import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI('AIzaSyDm7tH-5zNtQ3FeKur9EDFr3k9ZS1TX0hQ');

export async function identifyPlantFromImage(imageBase64: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

    const prompt = "Identify this plant and provide detailed information about it. Include: species name, common name, care requirements (water, sunlight, soil), and any interesting facts. Format the response as JSON with these fields: commonName, scientificName, careInstructions (object with water, sunlight, soil), description, funFacts (array)";

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: imageBase64.split(',')[1] // Remove the data URL prefix
        }
      }
    ]);

    const response = result.response;
    return JSON.parse(response.text());
  } catch (error) {
    console.error('Error identifying plant:', error);
    throw new Error('Failed to identify plant');
  }
}
