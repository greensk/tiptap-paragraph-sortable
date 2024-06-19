import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import { Plugin } from 'prosemirror-state'

import Component from './HeaderView'

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
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component, { contentDOMElementTag: 'div' })
  },

  addProseMirrorPlugins () {
    return [
      new Plugin({
        appendTransaction (transactions, oldState, newState) {
          oldState.doc.forEach((pageNode, pageOffset, pageIndex) => {
            const oldHeaderContent = JSON.stringify(pageNode.child(0).toJSON())
            const newHeaderContent = JSON.stringify(newState.doc.child(pageIndex).child(0).toJSON())
            if (oldHeaderContent !== newHeaderContent) {
              console.log(`page ${pageIndex + 1} header modified`)
            }
          })
        }
      })
    ]
  }
})
