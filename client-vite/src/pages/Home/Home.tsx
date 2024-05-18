import { Link } from 'react-router-dom';
import { LandingPage } from '../../components';

const recentChats = [
  { id: 1, name: 'John Doe', message: 'Hey, how are you?', time: '2 min ago' },
  {
    id: 2,
    name: 'Jane Smith',
    message: 'Are we meeting tomorrow?',
    time: '10 min ago',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    message: 'I sent the files.',
    time: '30 min ago',
  },
];

function HomePage() {
  return (
    <LandingPage>
      <div className="min-h-screen bg-gray-100">
        <main className="container mx-auto px-6 py-16">
          <section id="welcome" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Welcome to ChatApp
            </h2>
            <p className="text-gray-700 mb-8">
              Connect with your friends and family in an easy and fun way.
            </p>
            <Link
              to={'/ChatDetails'}
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500"
            >
              Start New Chat
            </Link>
          </section>

          <section id="recent-chats" className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Recent Chats</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentChats.map((chat) => (
                <div
                  key={chat.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h4 className="text-xl font-semibold mb-2">{chat.name}</h4>
                  <p className="text-gray-700 mb-4">{chat.message}</p>
                  <div className="text-gray-500 text-sm">{chat.time}</div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </LandingPage>
  );
}

export default HomePage;
