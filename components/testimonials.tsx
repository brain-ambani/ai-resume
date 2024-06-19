import TestimonialCard from "./testimonialCard";

const Testimonials = () => {
  return (
    <div
      className=" flex flex-col items-center
    justify-center py-8 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
    >
      <div className="w-2/3 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl mb-4">What people Say</h2>
        <p className="text-neutral-50 text-center mb-2">
          Discover what our satisfied customers have to say about
          <br /> their experience with our platform.
        </p>
      </div>
      <TestimonialCard />
    </div>
  );
};
export default Testimonials;
