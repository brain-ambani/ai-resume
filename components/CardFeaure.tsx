import {
  Card,
  //   CardContent,
  //   CardDescription,
  //   CardHeader,
  //   CardTitle,
} from "./ui/card";
import Image from "next/image";
import Pencil from "@/public/pencil.svg";

export function CardFeature() {
  return (
    <Card className="w-[350px] bg-sky-950 p-4 text-start">
      <div className="flex flex-col justify-start">
        <Image
          src={Pencil}
          alt="pencil"
          width={50}
          height={50}
          className="bg-black shadow-md rounded-md p-2"
        />
      </div>
      <h2 className="text-2xl  ">AI-powered scripts</h2>

      <p>
        Videotok has analyzed thousands of videos and knows how to create the
        best viral scripts with AI
      </p>
    </Card>
  );
}
