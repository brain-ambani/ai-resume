import LandinHero from "@/components/landing-hero";
import LandingNavbar from "@/components/landing-navbar";
import Testimonials from "@/components/testimonials";
import TrustedBy from "@/components/trustedby";

export default function Home() {
  return (
    <div
      className="max-h-full
        bg-[#111827] text-white"
    >
      <LandingNavbar />
      <LandinHero />
      <TrustedBy />
      <Testimonials />
    </div>
  );
}
