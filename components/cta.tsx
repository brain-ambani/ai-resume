import { Button } from "./ui/button";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-8 ">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-6xl font-semibold pb-4">
          Ready to get started?
        </h2>
        <p className="text-muted-foreground pb-4 w-72 text-center text-wrap">
          Sign up for free. No credit card required. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Veritatis, explicabo.
        </p>
        <Button
          variant="secondary"
          className="w-64 bg-violet-700
        text-white font-semibold text-xl hover:bg-violet-800 transition"
        >
          Get started
        </Button>
      </div>
    </div>
  );
};
export default CallToAction;
