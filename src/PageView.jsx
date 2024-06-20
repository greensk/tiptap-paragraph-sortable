import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import React, { useState } from 'react'
import TiptapNested from './TiptapNested'

import './PageView.css'

export default (props) => {
  const [ headerEditing, setHeaderEditing ] = useState(false)
  let content = {}
  let headerHTML = document.querySelector('.header').innerHTML
  props.editor.state.doc.descendants((node) => {
    if (node.type.name === 'header') {
      content = node.toJSON()
    }
  })
  return (
    <NodeViewWrapper className="page-view" as="div">
      <div>
        <div
          contentEditable={ false }
          onClick={() => {
            console.log('start editing')
            if (!headerEditing) {
              setHeaderEditing(true)
            }
          }}
        >
          { headerEditing ? <TiptapNested
            content={ content }
            updateContent={ (content) => {
              props.editor.state.doc.descendants((node, pos) => {
                if (node.type.name === 'header') {
                  props.editor
                    .chain()
                    .deleteRange({ from: pos + 1, to: pos + node.nodeSize - 1 })
                    .insertContentAt(pos + 1, content)
                    .run()
                }
              })
            } }
            editingDone={() => {
              setHeaderEditing(false)
            }}
          /> : <div dangerouslySetInnerHTML={ { __html: headerHTML } }></div> }
        </div>
        <NodeViewContent as="div"></NodeViewContent>
      </div>
    </NodeViewWrapper>
  )
}
