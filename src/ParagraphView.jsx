import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import React from 'react'

import './ParagraphView.css'

export default (props) => {
  return (
    <NodeViewWrapper
      className={`paragraph-view flex` }
      as="div"
      data-id={ props.node.attrs.id }
    >
      <i
        className="drag-handle"
        draggable="true"
        data-drag-handle
        contentEditable={false}
      ></i>
      <p className="flex-1">
        <NodeViewContent as="span"></NodeViewContent>
      </p>
    </NodeViewWrapper>
  )
}
