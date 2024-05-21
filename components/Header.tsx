import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="w-3/4 mx-auto mt-40">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-7xl font-semibold px-4 leading-12">
          Create viral <span>Youtube</span> and shorts <br />
          <span>from text to video with AI</span>
        </h1>
        <p className="text-center text-xl w-1/2 mt-8">
          Automate your videocreation and save hundreds of hours Provide the
          idea or web urland the AI will generate the video based on it
          AI-powered effects, captions, and transitions - fully customizable
        </p>
        <Button className="mt-4">Get Started</Button>
      </div>
      <div></div>
    </header>
  );
}
