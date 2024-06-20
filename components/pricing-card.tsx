import { Button } from "./ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const PricingCard = () => {
  return (
    <div className="sm:flex sm:flex-col md:flex-row  items-center justify-center gap-8">
      <Card className="w-[280px] p-4">
        <h3 className="text-muted-foreground">Free</h3>
        <div>
          <h1 className="text-3xl font-semibold py-4">
            $0,00<span className="text-lg font-normal">/month</span>
          </h1>
          <div className="text-sm text-gray-600">
            Great for small teams or solopreneurs
          </div>
        </div>
        <Button className="w-full my-4">Start for Free</Button>
        <hr />
        <div className="">
          <h3>Features</h3>
        </div>
        <div>
          <ul className="list-disc pl-4">
            <li>Unlimited projects</li>
            <li>Unlimited storage</li>
            <li>Unlimited users</li>
            <li>24/7 support</li>
          </ul>
        </div>
      </Card>
      <Card className="w-[280px] p-4">
        <h3 className="text-muted-foreground">Free</h3>
        <div>
          <h1 className="text-3xl font-semibold py-4">
            $0,00<span className="text-lg font-normal">/month</span>
          </h1>
          <div className="text-sm text-gray-600">
            Great for small teams or solopreneurs
          </div>
        </div>
        <Button className="w-full my-4 bg-violet-900">Start for Free</Button>
        <hr />
        <div className="">
          <h3>Features</h3>
        </div>
        <div>
          <ul className="list-disc pl-4">
            <li>Unlimited projects</li>
            <li>Unlimited storage</li>
            <li>Unlimited users</li>
            <li>24/7 support</li>
          </ul>
        </div>
      </Card>
      <Card className="w-[280px] p-4">
        <h3 className="text-muted-foreground">Free</h3>
        <div>
          <h1 className="text-3xl font-semibold py-4">
            $0,00<span className="text-lg font-normal">/month</span>
          </h1>
          <div className="text-sm text-gray-600">
            Great for small teams or solopreneurs
          </div>
        </div>
        <Button className="w-full my-4 ">Start for Free</Button>
        <hr />
        <div className="">
          <h3>Features</h3>
        </div>
        <div>
          <ul className="list-disc pl-4">
            <li>Unlimited projects</li>
            <li>Unlimited storage</li>
            <li>Unlimited users</li>
            <li>24/7 support</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};
