import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import React from 'react'

export default () => {
  return (
    <NodeViewWrapper className="react-component" as="p">
      <i contentEditable={false}>[move]</i>
      <i contentEditable={false}>[menu]</i>
      <span>
        <NodeViewContent as="span"></NodeViewContent>
      </span>
    </NodeViewWrapper>
  )
}
