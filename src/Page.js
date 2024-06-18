import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'

import Component from './PageView'

export default Node.create({
  name: 'page',
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "paragraph{3}",
  renderHTML({ node, HTMLAttributes }) {
    return ["div", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, { class: 'page' }), 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component, { contentDOMElementTag: 'span' })
  },

})
