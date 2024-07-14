import { currentUser } from "@clerk/nextjs/server";

import Guest from "@/components/Guest";
import Dashboard from "./dashboard/page";

const HomePage = async () => {
  const user = await currentUser();

  if (!user) return <Guest />;

  return (
    <main className="p-10 md:px-20 lg:px-32">
      <h1>Welcome {user.firstName},</h1>

      <Dashboard />
    </main>
  );
};

export default HomePage;
