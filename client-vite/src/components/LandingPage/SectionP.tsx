const SectinP = () => {
  return (
    <>
      <main className="flex-grow container mx-auto px-6  py-16 flex gap-40  items-center">
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-4">
            Welcome to Our Service
          </h1>
          <p className="text-gray-700 text-lg lg:text-xl mb-6">
            We provide the best solutions for your business. Join us and see the
            difference.
          </p>
          <a
            href="#services"
            className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-500"
          >
            Get Started
          </a>
        </div>
        <div className="hidden lg:block lg:w-1/2">
          <img
            src="https://via.placeholder.com/500"
            alt="Service"
            className="w-90 h-96 "
          />
        </div>
      </main>
    </>
  );
};

export default SectinP;
