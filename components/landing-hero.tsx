import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const LandinHero = () => {
  return (
    <div
      className="flex flex-col items-center 
    justify-center container mx-auto  py-8 px-4"
    >
      <div
        className="w-2/3 flex flex-col items-center
      justify-center text-center"
      >
        <h1
          className="text-5xl md:text-7xl
         font-semibold"
        >
          Significantly impress{" "}
          <span className="text-violet-500 font-bold">potential employers</span>
        </h1>

        <div className="mt-8">
          <p className="text-muted-foreground font-bold ">
            We help you create a professional resume that will
            <br />
            make you stand out from the crowd
          </p>
        </div>
        <div className="mt-8">
          <Button
            variant="ghost"
            className="bg-violet-500
          hover:text-muted-foreground"
          >
            <Link href="/register">Get Started</Link>
          </Button>
        </div>
      </div>
      <div className="mt-8 p-8 ">
        <Image
          src="/landing.png"
          alt="landing-page"
          // fill
          width={800}
          height={750}
          className="rounded-lg 
          shadow-lg border-4 border-muted-foreground"
        />
      </div>
    </div>
  );
};
export default LandinHero;
