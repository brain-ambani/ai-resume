import MobileSidebar from "@/components/mobile-sidebar";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex items-center p-4 relative">
      <MobileSidebar />
      <div className="absolute top-5 right-4">
        <UserButton />
      </div>
    </nav>
  );
};
export default Navbar;
