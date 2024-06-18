import { Node, mergeAttributes } from '@tiptap/core'

export default Node.create({
  name: 'header',
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "block+",
  renderHTML({ node, HTMLAttributes }) {
    return [
      'div',
      mergeAttributes(
        this.options.HTMLAttributes,
        HTMLAttributes,
        { class: 'header' }
      ),
      0
    ]
  }

})
