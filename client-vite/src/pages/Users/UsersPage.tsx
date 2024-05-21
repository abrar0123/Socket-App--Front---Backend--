import { LandingPage } from '../../components';

const users = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/150',
    friends: 20,
    location: 'New York, USA',
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: 'https://via.placeholder.com/150',
    friends: 35,
    location: 'Los Angeles, USA',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    avatar: 'https://via.placeholder.com/150',
    friends: 50,
    location: 'Chicago, USA',
  },
  {
    id: 4,
    name: 'Alice Williams',
    avatar: 'https://via.placeholder.com/150',
    friends: 12,
    location: 'Miami, USA',
  },
  // Add more dummy users as needed
];

const UsersPage = () => {
  // const [search, setSearch] = useState('');
  // const [selectedUser, setSelectedUser] = useState(null);

  // const filteredUsers = users.filter((user) =>
  //   user.name.toLowerCase().includes(search.toLowerCase()),
  // );

  return (
    <LandingPage>
      <main className="container mx-auto px-6 py-16">
        <section id="users" className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Users</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold mb-2 text-center">
                  {user.name}
                </h4>
                <p className="text-gray-700 mb-4 text-center">
                  {user.location}
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500">
                    Add Friend
                  </button>
                  <button className="bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-500">
                    Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </LandingPage>
  );
};

export default UsersPage;
