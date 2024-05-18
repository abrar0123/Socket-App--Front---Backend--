import { LandingPage } from '../../components';

function ServicesPage() {
  return (
    <LandingPage>
      <main className="flex-grow container mx-auto px-6 py-16">
        <section id="home" className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
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
        </section>

        <section id="services" className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Our Services</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-1/3 px-4 py-6">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4">Service One</h3>
                <p className="text-gray-700">
                  Description of the first service offered.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 py-6">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4">Service Two</h3>
                <p className="text-gray-700">
                  Description of the second service offered.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 py-6">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4">Service Three</h3>
                <p className="text-gray-700">
                  Description of the third service offered.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="text-center mb-16 bg-gray-200 py-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            What Our Clients Say
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-1/3 px-4 py-6">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-gray-700">
                  "This service is amazing! Highly recommend."
                </p>
                <h3 className="text-xl font-semibold mt-4">- Client One</h3>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 py-6">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-gray-700">
                  "Outstanding experience from start to finish."
                </p>
                <h3 className="text-xl font-semibold mt-4">- Client Two</h3>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 py-6">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-gray-700">
                  "Exceptional service and support."
                </p>
                <h3 className="text-xl font-semibold mt-4">- Client Three</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-gray-700 text-lg mb-6">
            We'd love to hear from you. Reach out to us with any questions or to
            get started on your project.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-500"
          >
            Contact Us
          </a>
        </section>
      </main>
    </LandingPage>
  );
}

export default ServicesPage;
