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
        { class: 'header', style: 'position: absolute; top: 0px; right: 0px' }
      ),
      0
    ]
  }

})
