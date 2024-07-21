import { SignedIn, SignedOut } from "@clerk/nextjs";
import Dashboard from "./dashboard/[[...dasboard]]/page";
import { checkUser } from "@/lib/checkUser";

export default async function Home() {
  const user = await checkUser();

  return (
    <main className="flex  h-full">
      <SignedIn>
        <Dashboard />
      </SignedIn>

      <SignedOut>This is the landing page</SignedOut>
    </main>
  );
}
