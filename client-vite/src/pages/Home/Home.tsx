import { LandingPage } from '../../components';

const properties = [
  {
    id: 1,
    title: 'Luxury Villa in Bali',
    description: '4 beds • 3 baths • 2500 sqft',
    price: '$2,500,000',
    image: 'https://via.placeholder.com/400',
  },
  {
    id: 2,
    title: 'Modern Apartment in NYC',
    description: '2 beds • 2 baths • 1200 sqft',
    price: '$1,200,000',
    image: 'https://via.placeholder.com/400',
  },
  {
    id: 3,
    title: 'Cozy Cottage in the UK',
    description: '3 beds • 2 baths • 1800 sqft',
    price: '$900,000',
    image: 'https://via.placeholder.com/400',
  },
];

function HomePage() {
  return (
    <LandingPage>
      <div className="min-h-screen bg-gray-100">
        <main className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <section id="home" className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-8">
              Find Your Dream Home
            </h1>
            <p className="text-gray-700 mb-8">
              Explore top-rated properties in the best locations.
            </p>
            <input
              type="text"
              placeholder="Search properties..."
              className="w-full max-w-lg mx-auto px-4 py-2 border rounded-lg"
            />
          </section>

          {/* Property Listings */}
          <section id="listings" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Featured Listings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-4">
                    {property.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{property.description}</p>
                  <div className="text-lg font-bold text-gray-900 mb-4">
                    {property.price}
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section id="testimonials" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              What Our Clients Say
            </h2>
            <div className="flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-4">
                  "Excellent service and support. Found my dream home within
                  days!"
                </p>
                <p className="text-gray-900 font-bold">- John Doe</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-4">
                  "Professional agents and a wide range of listings to choose
                  from."
                </p>
                <p className="text-gray-900 font-bold">- Jane Smith</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-4">
                  "Highly recommend this real estate platform for anyone looking
                  to buy or sell."
                </p>
                <p className="text-gray-900 font-bold">- Michael Brown</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Get In Touch
            </h2>
            <p className="text-gray-700 mb-8">
              We're here to help you with any questions or concerns.
            </p>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border rounded-lg h-32"
                />
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
                Send Message
              </button>
            </form>
          </section>
        </main>
      </div>
    </LandingPage>
  );
}

export default HomePage;
