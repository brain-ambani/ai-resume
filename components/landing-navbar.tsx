import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const LandingNavbar = () => {
  return (
    <nav className="max-w-7xl mx-auto p-4 flex items-center justify-between">
      <Link
        href="/"
        className="flex
        items-center pl-3 mb-14"
      >
        <div className="relative w-8 h-8 mr-4">
          <Image fill alt="Logo" src="/logo.svg" />
        </div>
        <h1 className={cn("text-2xl font-bold text-pink-600", font.className)}>
          Genius
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href="/sign-in" className="pl-3 mb-14">
          <Button variant="secondary">Sign in</Button>
        </Link>
      </div>
    </nav>
  );
};
export default LandingNavbar;
