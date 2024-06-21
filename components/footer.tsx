import { InstagramIcon, Linkedin, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-3/4 mx-auto flex flex-col items-center justify-center py-16">
      <div>
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
        </Link>
      </div>
      <div className="w-[300px] text-center pt-4">
        <p className="text-lg ">
          Genius is a digital service that allow ou create resume and cover
          letter easily with the help of AI.
        </p>
      </div>
      <div className="flex gap-8 py-8">
        <InstagramIcon size={24} className="text-pink-500 cursor-pointer" />
        <Linkedin size={24} className="text-blue-500 cursor-pointer" />
        <XIcon size={24} className="text-red-gray-500 cursor-pointer" />
      </div>
      <div>
        <ul className="flex gap-12 ">
          <li className="cursor-pointer hover:underline">Privacy</li>
          <li className="cursor-pointer hover:underline">Terms of use</li>
          <li className="cursor-pointer hover:underline">
            Software lifecycle policy
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
