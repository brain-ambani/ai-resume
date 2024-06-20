import { PricingCard } from "./pricing-card";

const Pricing = () => {
  return (
    <div className="container mx-auto py-8">
      <div
        className="flex flex-col items-center
      justify-center"
      >
        <h2 className="w-2/43 text-center text-3xl font-semibold mt-5">
          Our pricing is simple with no hidden fees
        </h2>
        <p className="text-muted-foreground py-4">
          Choose a plan that fits your needs
        </p>

        <div className="flex ite">
          <PricingCard />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
