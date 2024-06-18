import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import React from 'react'
import TiptapNested from './TiptapNested'

import './PageView.css'

export default (props) => {
  let content = {}
  props.editor.state.doc.descendants((node) => {
    if (node.type.name === 'header') {
      content = node.toJSON()
    }
  })
  return (
    <NodeViewWrapper className="page-view" as="div">
      <div>
        <div>
          <TiptapNested
            content={ content }
          />
        </div>
        <NodeViewContent as="div"></NodeViewContent>
      </div>
    </NodeViewWrapper>
  )
}
