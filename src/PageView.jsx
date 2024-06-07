import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import React from 'react'

import './PageView.css'

export default (props) => {
  return (
    <NodeViewWrapper
      className="page-view"
      as="div"
      data-id={ props.node.attrs.id }
    >
      <NodeViewContent as="div"></NodeViewContent>
    </NodeViewWrapper>
  )
}
