import AddResume from "./components/AddResume";

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold">My Resume</h2>
      <p className="text-muted-foreground">
        Create AI powered resume for your dream interview
      </p>
      <div className="grid rid-cols-2 md:grid-cols-4 gap-2 lg:grid-col-4 mt-10">
        <AddResume />
      </div>
    </div>
  );
};

export default Dashboard;
