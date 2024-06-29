const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center ">
      <main className="">{children}</main>
    </div>
  );
};

export default DashboardLayout;
