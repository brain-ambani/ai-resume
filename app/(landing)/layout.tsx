const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="h-full
        bg-[#111827] text-white"
    >
      {children}
    </div>
  );
};
export default LandingPageLayout;
