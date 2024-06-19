import Image from "next/image";

const Testimonials = [
  {
    profile: "/profile.jpg",
    name: "Brian",
    title: "full stack dev",
    quote:
      "Creating a standout resume has never been easier! This AI-powered tool made my job search seamless and efficient.",
  },
  {
    profile: "/profile.jpg",
    name: "Brian",
    title: "full stack dev",
    quote:
      "Creating a standout resume has never been easier! This AI-powered tool made my job search seamless and efficient.",
  },
  {
    profile: "/profile.jpg",
    name: "Brian",
    title: "full stack dev",
    quote:
      "Creating a standout resume has never been easier! This AI-powered tool made my job search seamless and efficient. ",
  },
];

const TestimonialCard = () => {
  return (
    <div className="mt-8 flex gap-8 flex-wrap justify-center text-gray-600">
      {Testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="w-[280px] h-[280px] bg-black rounded-lg
           flex flex-col p-5 gap-1 shadow-md border border-gray-500"
        >
          <Image
            src={testimonial.profile}
            alt="profile"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <h3 className="font-semibold text-white text-lg ">
            {testimonial.name}
          </h3>
          <p className="text-muted-foreground text-xl">{testimonial.title}</p>
          <p className="text-white">{testimonial.quote}</p>
        </div>
      ))}
    </div>
  );
};
export default TestimonialCard;
