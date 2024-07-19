import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Dashboard = () => {
  const user = currentUser();

  if (!user) {
    redirect("/");
  }
  return (
    <div>
      <h2>This is the dashboard page</h2>
    </div>
  );
};

export default Dashboard;
