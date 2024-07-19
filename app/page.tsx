import { SignedIn, SignedOut } from "@clerk/nextjs";
import Dashboard from "./dashboard/[[...dasboard]]/page";

export default function Home() {
  return (
    <main className="flex  items-center justify-center h-full">
      <SignedIn>
        <Dashboard />
      </SignedIn>

      <SignedOut>This is the landing page</SignedOut>
    </main>
  );
}
