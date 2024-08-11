import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl sm:text-center ">
        <h2 className="text-base text-center font-semibold leading-7 text-indigo-600">
          Your ultimate Ai Resume builder
        </h2>

        <p className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-6xl">
          Build a job tailored resume with AI
        </p>
        <p className="mt-6 text-center text-lg leading-8 text-gray-600">
          {" "}
          Introducing{" "}
          <span className="font-bold text-indigo-600">✨Monk Resume.</span>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          cupiditate quod architecto accusamus? Ullam tempore distinctio
          corporis quaerat at dignissimos.
        </p>
      </div>
      <Button asChild className="mt-10">
        <Link href="/dashboard">Get Started</Link>
      </Button>
    </main>
  );
}
