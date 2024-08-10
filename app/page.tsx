import { ModeToggle } from "@/components/themeToggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return <main className="flex gap-6">
    <p>This is a saas project</p>
    <Button>Get Started</Button>
    <ModeToggle/>
  </main>;
}
