import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import NestedDocument from './NestedDocument'

const TiptapNested = (props) => {
  console.log(`editable ${props.editable}`)
  const editor = useEditor({
    extensions: [StarterKit.configure({ document: false }), NestedDocument],
    content: props.content,
    editable: props.editable,
    onUpdate ({ editor }) {
      props.updateContent(editor.getJSON().content)
    },
    onBlur () {
      props.editingDone()
    }
  })

  return <EditorContent editor={editor} />
};

export default TiptapNested
