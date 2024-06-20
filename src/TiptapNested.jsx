import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import NestedDocument from './NestedDocument'

const TiptapNested = (props) => {
  const editor = useEditor({
    extensions: [StarterKit.configure({ document: false }), NestedDocument],
    content: props.content,
    editable: false,
    onUpdate ({ editor }) {
      props.updateContent(editor.getJSON().content)
    },
    onBlur () {
      editor.setEditable(false)
    }
  })

  return <EditorContent
    editor={editor}
    onClick={ () => {
      editor.setEditable(true)
    } }
  />
};

export default TiptapNested
