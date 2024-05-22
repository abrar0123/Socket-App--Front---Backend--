// src/CKEditorComponent.js
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import Editor from '../../../ckeditor5-custom-build/build/ckeditor';
import Editor from '../../../ckeditor5-custom-build/build/ckeditor';
import { LandingPage } from '../../components';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CKEditorComponent = () => {
  const editorConfiguration = {
    toolbar: ['bold', 'italic'],
  };

  return (
    <LandingPage>
      <div className="w-[70%] my-20 mx-auto h-64 bg-blue-100">
        <CKEditor
          editor={Editor}
          config={editorConfiguration}
          data="<p>Hello from CKEditor</p>"
          onReady={(editor) => {
            console.log('Editor is ready to use!', editor);
          }}
          // onChange={(event, editor) => {
          //   const data = editor.getData();
          //   console.log({ event, editor, data });
          // }}
        />
      </div>
    </LandingPage>
  );
};

export default CKEditorComponent;
