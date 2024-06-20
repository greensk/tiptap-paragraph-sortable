import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import React, { useState, useEffect } from 'react'
import TiptapNested from './TiptapNested'

import './PageView.css'

export default (props) => {
  const [ headerEditing, setHeaderEditing ] = useState(false)
  let [content, setContent] = useState()
  // const [updateIndex, setUpdateIndex] = useState(0)
  const updateContent = () => {
    props.editor.state.doc.descendants((node) => {
      if (node.type.name === 'header' && !headerEditing) {
        const json = node.toJSON()
        if (json && JSON.stringify(json) !== JSON.stringify(content)) {
          setContent(json)
          console.log('CHANGE CONTENT', content)
        }
      }
    })
  }
  updateContent()

  useEffect(() => {
    props.editor.on('update', updateContent)
    return () => {
      props.editor.off('update', updateContent)
    }
  }, [props.editor])
  return (
    <NodeViewWrapper className="page-view" as="div">
      <div>
        <div
          contentEditable={ false }
        >
          <TiptapNested
            setEditable={ setHeaderEditing }
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
          />
        </div>
        <NodeViewContent as="div"></NodeViewContent>
      </div>
    </NodeViewWrapper>
  )
}
