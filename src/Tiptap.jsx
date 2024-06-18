import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Page from './Page'
import Document from './Document'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, Page, Document],
    content: "<p>Hello World! 🌎️</p>",
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
