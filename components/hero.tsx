import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return <main className="flex gap-6">
    <p>This is a saas project</p>
    <Button>
      <Link href='/sign-up'>Get started</Link>
    </Button>
  </main>;
}