import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EmrParagraph } from './ParagraphNode'
import { MyDoc } from './DocumentNode'
import { Page } from './PageNode'

import formats from './formats'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        document: false,
        paragraph: false
      }),
      MyDoc,
      EmrParagraph,
      Page
    ],
    content: "<div class='page'><p>Hello World! 🌎️</p></div>",
    onUpdate ({ transaction }) {
      const docDom = document.querySelector('.page-view')
      if (docDom.scrollHeight > docDom.offsetHeight || docDom.scrollWidth > docDom.offsetWidth) {
        this.commands.changePages(1)
      } else if(!transaction.steps.find(s => s.jsonID === 'docAttr' && s.attr === 'pages')) {
        let latestOffset = 0
        let pages = 0
        document.querySelectorAll('.ProseMirror .paragraph-view').forEach((el) => {
          const rect = el.getBoundingClientRect()
          if (rect.left > latestOffset) {
            latestOffset = rect.left
            pages++
          }
        })
        if (pages > 0 && pages < +editor.state.doc.attrs.pages) {
          this.commands.setPages(pages)
        }
      }
    }
  });

  const setFormat = (format) => {
    editor.commands.setDocumentFormat(format)
  }

  return <div>
    <div className="flex gap-2">
      {
        Object.keys(formats).map((format) => {
          return <span
            key={ format }
            style={
              {
                'marginRight': '20px',
                'fontWeight': editor?.state.doc.attrs.format === format ? '700' : '400'
              }
            }
            onClick={
              () => setFormat(format)
            }
          >
            { format }
          </span>
        })
      }
    </div>
    <EditorContent editor={editor} />
  </div>;
};

export default Tiptap;
