import LandinHero from "@/components/landing-hero";
import LandingNavbar from "@/components/landing-navbar";

export default function Home() {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandinHero />
    </div>
  );
}
