import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-4 bg-gradient-to-bl from-white to-indigo-800">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <Hero />
      </div>
    </main>
  );
}
