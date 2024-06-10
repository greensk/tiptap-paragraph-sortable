import { Document } from '@tiptap/extension-document'

export const MyDoc = Document.extend({
  addCommands () {
    return {
      setDocumentFormat: (format) => ({ tr, dispatch, editor, state, commands }) => {
        const t = tr.setDocAttribute('format', format)
        if (dispatch) {
          return dispatch(t)
        } else {
          return true
        }
      },
      changePages: (diff) => ({ tr, dispatch, editor, state, commands }) => {
        const pages = Number(state.doc.attrs.pages) + diff
        const t = tr.setDocAttribute('pages', pages.toString())
        if (dispatch) {
          return dispatch(t)
        } else {
          return true
        }
      },
    }
  },
  addAttributes () {
    return {
      pages : {
        default: '1',
        parseHTML: element => element.getAttribute('data-pages'),
        // … and customize the HTML rendering.
        renderHTML: attributes => {
          return {
            'data-pages': attributes.pages``
          }
        }
      },
      format: {
        default: 'A4',
        parseHTML: element => element.getAttribute('data-format'),
        // … and customize the HTML rendering.
        renderHTML: attributes => {
          return {
            'data-format': attributes.format
          }
        }
      }
    }
  }
});
