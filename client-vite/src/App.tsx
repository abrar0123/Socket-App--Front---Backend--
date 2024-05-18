import { LandingPage } from './components';
import './index.css';
import { ChatDetails, ChatPage, ServicesPage, UsersPage } from './pages';
import HomePage from './pages/Home/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PreHome from './pages/PreHome/PreHome';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={PreHome} />
        <Route path="/Home" Component={HomePage} />
        <Route path="/Chat" Component={ChatPage} />
        <Route path="/Services" Component={ServicesPage} />
        <Route path="/Users" Component={UsersPage} />
        <Route path="/ChatDetails" Component={ChatDetails} />
      </Routes>
    </>
  );
}

export default App;
