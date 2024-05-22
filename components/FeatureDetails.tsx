import { Card } from "./ui/card";
import Image from "next/image";
import Pencil from "@/public/pencil.svg";

const featuresDetails = [
  {
    id: 1,
    image: "pencil",
    title: "AI-powered scripts",
    description:
      "Videotok has analyzed thousands of videos and knows how to create the best viral scripts with AI",
  },
  {
    id: 2,
    image: "pencil",
    title: "AI Images, Videos & Gifs",
    description:
      "Videotok also generates the images of your video with AI, creating high quality and useful images that fit in the story",
  },
  {
    id: 3,
    image: "pencil",
    title: "Auto captions & templates",
    description:
      "Videotok adds fancy and auto generated captions thanks to our AI",
  },
  {
    id: 4,
    image: "pencil",
    title: "AAuto captions & templates",
    description:
      "Videotok has analyzed thousands of videos and knows how to create the best viral scripts with AI",
  },
  {
    id: 5,
    image: "pencil",
    title: "Background music & sound effects",
    description:
      "Get effects and audio sounds added automatically, without needing to waste hours to generate them",
  },
  {
    id: 6,
    image: "pencil",
    title: "Auto zooms & transitions",
    description:
      "Do you like the videos that have auto zooms added into them? Don't worry, Videotok will add them too",
  },
];

export function FeaturesDetails() {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {featuresDetails.map((feature, key) => (
        <Card key={feature.id} className="w-[350px] bg-sky-950 p-4 text-start">
          <div className="flex flex-col justify-start">
            <Image
              src={Pencil}
              alt="pencil"
              width={50}
              height={50}
              className="bg-black shadow-md rounded-md p-2"
            />
          </div>
          <h2 className="text-2xl text-sky-300  ">{feature.title}</h2>

          <p className="mt-2">{feature.description}</p>
        </Card>
      ))}
    </div>
  );
}
