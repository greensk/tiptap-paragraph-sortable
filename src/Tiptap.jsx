import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Page from './Page'
import Document from './Document'
import Header from './Header'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, Page, Document, Header],
    content: `<div class="header">header</div>`,
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
