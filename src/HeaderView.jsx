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
      let chain = props.editor.chain()
      let appendOffset = 0
      let content
      let contentLength
      props.editor.state.doc.forEach((pageNode, pageOffset, pageIndex) => {
        if (pageOffset + 1 === props.getPos()) {
          pageNode.forEach((subNode, subNodeOffset) => {
            if (subNode.type.name === 'header') {
              content = subNode.toJSON().content
              contentLength = subNode.nodeSize
            }
          })
        }
      })
      props.editor.state.doc.forEach((pageNode, pageOffset, pageIndex) => {
        if (pageOffset + 1 !== props.getPos()) {
          pageNode.forEach((subNode, subNodeOffset) => {
            if (subNode.type.name === 'header') {
              const from = pageOffset + subNodeOffset + 1 + appendOffset
              const to = pageOffset + subNodeOffset + subNode.nodeSize - 1 + appendOffset
              chain = chain.deleteRange({ from, to })
              chain = chain.insertContentAt(pageOffset + subNodeOffset + 1, content)
              appendOffset += contentLength - (to - from)
              console.log({ from, to, content })
            }
          })
        }
      })
      chain.run()
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
