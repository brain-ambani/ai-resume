import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }
  return (
    <div className="my-8 border h-full w-full">
      <p className="text-2xl">Welcome, {user?.firstName}</p>
      <h2 className="mt-4 text-xl">
        Create amazing resumes with the help of AI
      </h2>
    </div>
  );
};

export default Dashboard;
