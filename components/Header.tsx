import { Button } from "./ui/button";
import Image from "next/image";
import headerPic from "@/public/header.jpg";

export function Header() {
  return (
    <header className="w-3/4 mx-auto mt-40">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-7xl font-semibold px-4 leading-12 text-gray-600">
          Create viral <span>Youtube</span> and shorts <br />
          <span className="text-indigo-400">from text to video with AI</span>
        </h1>
        <p className="text-center text-2xl w-1/2 mt-8 text-gray-400 leading-8">
          Automate your videocreation and save hundreds of hours Provide the
          idea or web urland the AI will generate the video based on it
          AI-powered effects, captions, and transitions - fully customizable
        </p>
        <Button className="mt-8 text-xl text-gray-100">Get Started</Button>
      </div>
      <div className="w-full border-4  my-12 flex items-center justify-center shadow-md rounded-md">
        <Image src={headerPic} alt="header-pic" className="rounded-md" />
      </div>
    </header>
  );
}
