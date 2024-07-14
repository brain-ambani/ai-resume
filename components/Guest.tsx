import { SignUpButton } from "@clerk/nextjs";

import { Button } from "./ui/button";
const Guest = () => {
  return (
    <div className="container flex flex-col items-center justify-center text-center">
      <h1>Welcome</h1>
      <p>
        Create an account to create an AI powered for your dream job interview
      </p>
      <div className="mt-4">
        <SignUpButton>
          <Button variant="outline">Get Started</Button>
        </SignUpButton>
      </div>
    </div>
  );
};

export default Guest;
