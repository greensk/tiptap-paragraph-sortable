import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import { Plugin } from 'prosemirror-state'
import { ReplaceStep } from 'prosemirror-transform'

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
        appendTransaction (_, oldState, newState) {
          let modifiedPageIndex = -1
          let modifiedHeaderContent
          let extraOffset = 0
          oldState.doc.forEach((pageNode, pageOffset, pageIndex) => {
            const oldHeaderContent = JSON.stringify(pageNode.child(0).toJSON())
            const newHeader = newState.doc.child(pageIndex).child(0)
            const newHeaderContent = JSON.stringify(newHeader.toJSON())
            if (oldHeaderContent !== newHeaderContent) {
              modifiedPageIndex = pageIndex
              modifiedHeaderContent = newHeader.slice(0)
            }
          })
          if (modifiedPageIndex === -1) {
            return
          }
          const tr = newState.tr
          newState.doc.forEach((pageNode, pageOffset, pageIndex) => {
            if (pageIndex !== modifiedPageIndex) {
              tr.step(
                new ReplaceStep(
                  pageOffset + 2 + extraOffset,
                  pageOffset + pageNode.child(0).nodeSize + extraOffset,
                  modifiedHeaderContent
                )
              )
              extraOffset += modifiedHeaderContent.size + 2 - pageNode.child(0).nodeSize
            }
          })
          return tr
        }
      })
    ]
  }
})
