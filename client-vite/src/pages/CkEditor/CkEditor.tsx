import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { LandingPage } from '../../components';

// src/CKEditorComponent.js
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
// import MyCustomPlugin from './CustomePlugin';
// import { LandingPage } from '../../components';

// // Create a custom build of the editor with your plugin
// class ClassicEditor extends ClassicEditorBase {}
// ClassicEditor.builtinPlugins = [
//   // Add existing plugins you need
//   //   ...ClassicEditorBase.builtinPlugins!,
//   MyCustomPlugin,
// ];
// ClassicEditor.defaultConfig = {
//   toolbar: {
//     items: [
//       'heading',
//       '|',
//       'bold',
//       'italic',
//       'link',
//       '|',
//       'myCustomButton', // Add your custom button to the toolbar
//       'undo',
//       'redo',
//     ],
//   },
//   language: 'en',
// };

const CKEditorComponent = () => {
  return (
    <LandingPage>
      <div className=" w-[70%] my-20 mx-auto  ">
        {/* <h2>CKEditor 5 using a React Component</h2> */}
        <CKEditor
          editor={ClassicEditor}
          //   data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
    </LandingPage>
  );
};

export default CKEditorComponent;
