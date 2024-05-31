import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import React from 'react'

import './ParagraphView.css'

export default () => {
  return (
    <NodeViewWrapper className="paragraph-view" as="p">
      <i
        className="drag-handle"
        contentEditable={false}
        draggable="true"
        data-drag-handle  
      ></i>
      <span>
        <NodeViewContent as="span"></NodeViewContent>
      </span>
    </NodeViewWrapper>
  )
}
