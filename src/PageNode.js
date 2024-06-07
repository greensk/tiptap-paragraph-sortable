import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from '@tiptap/react'

import Component from './PageView'

export const Page = Node.create({
  name: 'page',
  group: "block",
  content: "block*",
  renderHTML({ node, HTMLAttributes }) {
    if (HTMLAttributes.id) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      node.attrs.id = HTMLAttributes.id;
    }
    return ["div", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, { class: 'page' }), 0];
  },

  parseHTML() {
    return [{ tag: 'div.page' }]
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component)
  }
});
