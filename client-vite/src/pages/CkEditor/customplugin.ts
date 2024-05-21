// src/customplugin.js
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class CustomPlugin extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add('customTableButton', (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: 'Insert Table',
        icon: 'icon',
        tooltip: true,
      });

      view.on('execute', () => {
        editor.execute('insertTable', { rows: 2, columns: 2 });
      });

      return view;
    });
  }
}
