import Link from "next/link";
import { Button } from "./ui/button";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { userId } = auth();

  return (
    <div className="bg-background/95 border rounded-b-xl shadow-md">
      <div className="flex justify-between items-center py-4 px-6">
        <div>
          <Link href="/" className="text-3xl">
            Genius
          </Link>
        </div>
        <div className="flex items-center gap-6 text-xl font-semibold">
          <Link href="/pricing">Pricing</Link>
          <Link href="/faqs">FAQs</Link>
          <Link href="/docs">Docs</Link>
        </div>
        <div className="flex gap-6 items-center">
          {!userId ? (
            <Button>
              <Link href="/sign-in" className="font-semibold text-xl">
                Sign in
              </Link>
            </Button>
          ) : (
            <UserButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
