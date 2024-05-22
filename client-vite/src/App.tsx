import './index.css';
import { CKEditorComponent } from './pages';
import HomePage from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import PreHome from './pages/PreHome/PreHome';
// import '@ckeditor/ckeditor5-build-classic/build/ckeditor.css'; // Import CKEditor styles

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={PreHome} />
        <Route path="/Home" Component={HomePage} />
        <Route path="/CkEditor" Component={CKEditorComponent} />
      </Routes>
    </>
  );
}

export default App;
