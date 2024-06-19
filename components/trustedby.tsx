const TrustedBy = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center
      justify-center container mx-auto py-1 px-4 "
      >
        <div
          className="w-2/3 flex flex-col items-center
        justify-center text-center"
        >
          <h1
            className="text-3xl text-gray-700 md:text-7xl
          font-semibold"
          >
            Trusted by{" "}
            <span className="text-violet-500 font-bold">over 50 users</span>
          </h1>
          <div className="mt-4 pb-10">
            <p className="text-muted-foreground font-bold ">
              We have helped over 100 users create professional resumes
              <br />
              that have helped them land their dream jobs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrustedBy;
