import { useEditor, EditorContent } from "@tiptap/react"
import { useEffect } from 'react'
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
      props.setEditable(true)
    }
  })

  useEffect(() => {
    console.log('USE EFFECT')
    if (editor && props.content && !editor.isEditable) {
      editor.commands.setContent(props.content)
    }
  }, [editor, props.content])

  return <EditorContent
    editor={editor}
    onClick={ () => {
      editor.setEditable(true)
      props.setEditable(true)
    } }
  />
};

export default TiptapNested
