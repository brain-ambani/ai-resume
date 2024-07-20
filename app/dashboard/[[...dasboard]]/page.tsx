import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }
  return (
    <div>
      <p>Welcome, {user?.firstName}</p>
      <h2>This is the dashboard page</h2>
    </div>
  );
};

export default Dashboard;
