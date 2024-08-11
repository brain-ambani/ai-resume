import Resumes from "@/components/resumes";

export const dynamic = "force-dynamic";

export default function Dashboard() {
  return (
    <main className="">
      <h1 className="text-3xl p-5 bg-gray-100 font-extralight text-indigo-600">
        My Resumes
      </h1>
      <Resumes />
    </main>
  );
}
