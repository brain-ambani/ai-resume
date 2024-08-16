import Resumes from "@/components/resumes";
import { checkUser } from "@/lib/checkUser";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const user = await checkUser();
  return (
    <main className="">
      <h1 className="text-3xl p-5 bg-gray-100 font-extralight text-indigo-600">
        My Resumes
      </h1>
      <Resumes />
    </main>
  );
}
