import ResumeCard from "@/components/resume-card";
import { UserButton, UserProfile } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-8">
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Build your Resume with Genius AI
        </h2>
        <p
          className="text-muted-foreground font-light text-sm
        md:text-lg text-center"
        >
          Create a professional resume in minutes with our AI-powered resume
          builder.
        </p>
        <div className="p-6">
          <ResumeCard />
        </div>
      </div>
    </div>
  );
}
