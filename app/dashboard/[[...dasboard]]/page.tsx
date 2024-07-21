import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import AddResume from "@/app/dashboard/components/AddResume";

const Dashboard = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }
  return (
    <div className="my-8  h-full w-full">
      <p className="text-2xl">Welcome, {user?.firstName}</p>
      <h2 className="mt-1 text-xl">
        Create amazing resumes with the help of AI
      </h2>
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10">
        <AddResume />
      </div>
    </div>
  );
};

export default Dashboard;
