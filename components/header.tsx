import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between shadow-sm p-5">
      <Link href="/dashboard" className="text-2xl">
        Monk<span className="text-indigo-600">Resume</span>
      </Link>

      <SignedIn>
        <div className="flex text-center space-x-2">
          <Button asChild variant="link" className="hidden md:flex">
            <Link href="/dashboard/upgrade">Pricing</Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/dashboard">My Resumes</Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/dashboard/create">
              <FilePlus2 className="text-indigo-600" />
            </Link>
          </Button>

          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}
