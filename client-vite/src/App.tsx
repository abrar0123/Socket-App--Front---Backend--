import { LandingPage } from './components';
import './index.css';
import { ChatPage, ServicesPage } from './pages';
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
      </Routes>
    </>
  );
}

export default App;
