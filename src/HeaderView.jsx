import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import React, { useEffect, useState } from 'react'

import './HeaderView.css'

export default (props) => {
  const [editable, setEditable] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (!editable) {
        return
      }
      props.editor.state.doc.forEach((pageNode, offset, pageIndex) => {
        if (offset + 1 === props.getPos()) {
          console.log(JSON.stringify(props.editor.getJSON()))
        }
      })
    }

    props.editor.on('update', handler)

    return () => {
      props.editor.off('update', handler)
    }
  }, [props.editor, editable])

  return (
    <NodeViewWrapper
      className="page-view"
      as="div"
    >
      <div
        onClick={() => {
          console.log('SET EDITABLE')
          setEditable(true)
        }}
        onBlur={() => {
          console.log('on blur')
          // setEditable(false)
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
