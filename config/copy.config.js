/**
 * Created by rnallamothu on 4/16/18.
 */
module.exports = {
  copyFroalaEditorCss: {
    src: ['{{ROOT}}/node_modules/froala-editor/css/froala_editor.pkgd.min.css', '{{ROOT}}/node_modules/froala-editor/css/froala_style.min.css'],
    dest: '{{BUILD}}'
  },
  copyFontAwesome: {
    src: '{{ROOT}}/node_modules/font-awesome/css/font-awesome.min.css',
    dest: '{{BUILD}}'
  },
  copyFontsAwesomeFonts: {
    src: '{{ROOT}}/node_modules/font-awesome/fonts/*',
    dest: '{{WWW}}/fonts'
  }
}
