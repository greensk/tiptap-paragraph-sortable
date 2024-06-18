import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import NestedDocument from './NestedDocument'

const TiptapNested = (props) => {
  const editor = useEditor({
    extensions: [StarterKit.configure({ document: false }), NestedDocument],
    content: props.content
  });

  return <EditorContent editor={editor} />
};

export default TiptapNested
