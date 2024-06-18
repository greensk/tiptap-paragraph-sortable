import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import React from 'react'

import './HeaderView.css'

export default (props) => {
  return (
    <NodeViewWrapper className="page-view" as="div">
      <div contentEditable={ false }>
        <NodeViewContent as="div"></NodeViewContent>
      </div>
    </NodeViewWrapper>
  )
}
