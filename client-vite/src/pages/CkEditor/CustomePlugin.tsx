// src/MyCustomPlugin.js
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import icon from '@ckeditor/ckeditor5-core/theme/icons/bold.svg'; // Use an appropriate icon

export default class MyCustomPlugin extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add('myCustomButton', (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: 'My Custom Button',
        icon: icon,
        tooltip: true,
      });

      view.on('execute', () => {
        editor.model.change((writer) => {
          const insertPosition =
            editor.model.document.selection.getFirstPosition();
          writer.insertText(
            'Hello, this is my custom plugin!',
            insertPosition!,
          );
        });
      });

      return view;
    });
  }
}
