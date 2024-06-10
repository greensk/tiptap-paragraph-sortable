import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import React from 'react'

import './PageView.css'

export default (props) => {
  return (
    <NodeViewWrapper
      className={`page-view ${props.editor.state.doc.attrs.format}`}
      as="div"
      style={
        {
          'columnsCount': Number(props.editor.state.doc.attrs.pages),
          width: String(Number(props.editor.state.doc.attrs.pages) * 300 ) + 'px'
        }
      }
      data-id={ props.node.attrs.id }
    >
      <NodeViewContent as="div"></NodeViewContent>
    </NodeViewWrapper>
  )
}
