import Link from "next/link";
import { Navlinks } from "./NavLinks";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="w-3/4 mx-auto flex justify-between items-center mt-12 p-4 ">
      <div className="text-4xl font-semibold text-gray-400">
        <Link href="/">
          Social<span className="text-primary">Ace</span>
        </Link>
      </div>
      <div>
        <Navlinks />
      </div>
      <div className="mt-4">
        <Button className="text-lg font-semibold">Sign In</Button>
      </div>
    </nav>
  );
}
