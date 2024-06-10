import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import React from 'react'

import formats from './formats'

import './PageView.css'

export default (props) => {
  const format = formats[props.editor.state.doc.attrs.format]
  return (
    <NodeViewWrapper
      className={`page-view ${props.editor.state.doc.attrs.format}`}
      as="div"
      style={
        {
          'columns-count': Number(props.editor.state.doc.attrs.pages),
          'column-width': `${format.width}px`,
          width: String(Number(props.editor.state.doc.attrs.pages) * (format.width + 22) ) + 'px',
          ...(format.height !== null ? { height: `${format.height}px` } : {})
        }
      }
      data-id={ props.node.attrs.id }
    >
      <NodeViewContent as="div"></NodeViewContent>
    </NodeViewWrapper>
  )
}
