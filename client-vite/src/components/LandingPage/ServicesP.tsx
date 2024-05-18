const ServicesP = () => {
  return (
    <>
      <section id="services" className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-8">Our Services</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-1/3 px-4 py-6">
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4">Service One</h3>
                <p className="text-gray-700">
                  Description of the first service offered.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 py-6">
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4">Service Two</h3>
                <p className="text-gray-700">
                  Description of the second service offered.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 py-6">
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4">Service Three</h3>
                <p className="text-gray-700">
                  Description of the third service offered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesP;
