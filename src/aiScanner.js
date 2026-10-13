
import * as mobilenet from "@tensorflow-models/mobilenet";

let modelPromise = null;

export async function scanProductImage(imageElement) {
  if (!imageElement || !imageElement.complete || !imageElement.naturalWidth) {
    throw new Error("Please upload a valid product image and try again.");
  }

  if (!modelPromise) {
    modelPromise = mobilenet.load().catch((error) => {
      modelPromise = null;
      throw new Error(
        "AI model failed to load. Check your internet connection and try again."
      );
    });
  }

  const model = await modelPromise;
  const predictions = await model.classify(imageElement, 5);

  return predictions.map((item) => ({
    name: item.className,
    confidence: Math.round(item.probability * 100),
  }));
}
