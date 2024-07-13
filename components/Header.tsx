import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  const User = await checkUser();
  return (
    <nav className="w-3/4 mx-auto py-4">
      <div className="flex justify-between items-center">
        <h2>Genius Resume</h2>
        <div>
          <SignedOut>
            <SignInButton />
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
