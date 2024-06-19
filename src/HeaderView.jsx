import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import React, { useEffect, useState } from 'react'

import './HeaderView.css'

export default (props) => {
  const [editable, setEditable] = useState(false)

  useEffect(() => {
    const handler = () => {
      const pos = props.getPos()
      const selection = props.editor.state.selection

      if (!editable || pos === null || selection.$cursor === null) {
        return
      }
      const focused = selection.$cursor.pos >= pos && selection.$cursor.pos <= pos + props.node.nodeSize
      if (!focused) {
        setEditable(false)
      }
    }

    props.editor.on('selectionUpdate', handler)

    return () => {
      props.editor.off('selectionUpdate', handler)
    }
  }, [props.editor, editable, props.node])

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
