import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EmrParagraph } from './ParagraphNode'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        paragraph: false
      }),
      EmrParagraph
    ],
    content: "<p>Hello World! 🌎️</p>",
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
