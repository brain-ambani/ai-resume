import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import MobileToggle from "./MobileToggle";

function Navbar() {
  return (
    <div
      className="max-w-7xl mx-auto flex items-center justify-between
      px-4 py-2"
    >
      <div>
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="logo" width={24} height={24} />
            <h1 className="text-xl font-semibold">AI Resume</h1>
          </div>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 items-center ">
        <Link href="/features">
          <h1 className="text-lg font-semibold">Features</h1>
        </Link>

        <Link href="/pricing">
          <h1 className="text-lg font-semibold">Pricing</h1>
        </Link>

        <Link href="/contact">
          <h1 className="text-lg font-semibold">Docs</h1>
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <Button variant="outline" className="cursor-pointer">
          Sign In
        </Button>

        <Button>
          <Link href="/signup" className="cursor-pointer">
            Sign Up
          </Link>
        </Button>
      </div>
      <div>
        <MobileToggle />
      </div>
    </div>
  );
}

export default Navbar;
