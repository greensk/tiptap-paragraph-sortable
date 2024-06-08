import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from '@tiptap/react'

import Component from './PageView'

export const Page = Node.create({
  name: 'page',
  group: "block",
  content: "block*",
  renderHTML({ node, HTMLAttributes }) {
    let theClass = 'page'
    if (this.editor.view) {
      theClass += ' ' + this.editor.state.doc.attrs.format
    }
    return [
      "div",
      mergeAttributes(
        this.options.HTMLAttributes,
        HTMLAttributes,
        { class: theClass }
      ),
      0
    ];
  },

  parseHTML() {
    return [{ tag: 'div.page' }]
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component)
  }
});
