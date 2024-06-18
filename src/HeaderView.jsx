import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import React, { useState } from 'react'

import './HeaderView.css'

export default (props) => {
  const [editable, setEditable] = useState(false)
  return (
    <NodeViewWrapper
      className="page-view"
      as="div"
    >
      <div
        onClick={() => {
          setEditable(true)
        }}
        onBlur={() => {
          console.log('on blur')
          setEditable(false)
        }}
      >
        <NodeViewContent
          as="div"
          contentEditable={ editable }
        ></NodeViewContent>
      </div>
    </NodeViewWrapper>
  )
}
