import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { checkUser } from "@/lib/checkUser";
import { Button } from "./ui/button";

const Header = async () => {
  const User = await checkUser();
  return (
    <nav className="container py-2">
      <div className="flex justify-between items-center">
        <h2>Genius</h2>
        <div>
          <SignedOut>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;
