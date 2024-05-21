// src/CKEditorComponent.js
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import Editor from 'ckeditor5-custom-build/build/ckeditor'; // Import your custom build
import { LandingPage } from '../../components';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import ClassicEditor from './ckeditorConfig';

const CKEditorComponent = () => {
  return (
    <LandingPage>
      <div className="w-[70%] my-20 mx-auto">
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
        />
      </div>
    </LandingPage>
  );
};

export default CKEditorComponent;
