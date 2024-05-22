import { FeaturesDetails } from "./FeatureDetails";

export function Features() {
  return (
    <div className="w-3/4 mx-auto text-center">
      <h1 className="text-2xl "> This is the features section</h1>
      <div className="my-12 flex gap-4">
        <FeaturesDetails />
      </div>
    </div>
  );
}
