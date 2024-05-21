import './index.css';
import { CKEditorComponent, ChatDetails, ChatPage, UsersPage } from './pages';
import HomePage from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import PreHome from './pages/PreHome/PreHome';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={PreHome} />
        <Route path="/Home" Component={HomePage} />
        <Route path="/Chat" Component={ChatPage} />
        <Route path="/CkEditor" Component={CKEditorComponent} />
        <Route path="/Users" Component={UsersPage} />
        <Route path="/ChatDetails" Component={ChatDetails} />
      </Routes>
    </>
  );
}

export default App;
