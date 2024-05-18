import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">Socket IO</Link>
        </div>
        <nav className="flex space-x-6 text-gray-600">
          <Link to="/home" className="hover:text-green-600 font-semibold">
            Home
          </Link>
          <Link to="/Services" className="hover:text-green-600 font-semibold">
            Services
          </Link>
          <Link to="/home" className="hover:text-green-600 font-semibold">
            Users
          </Link>
          <Link to="/Chat" className="hover:text-green-600 font-semibold">
            Chat
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">Sign In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
            Join
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
