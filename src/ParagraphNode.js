import { mergeAttributes } from "@tiptap/core";
import { Paragraph } from "@tiptap/extension-paragraph";
import { ReactNodeViewRenderer } from '@tiptap/react'

import Component from './ParagraphView'

export const EmrParagraph = Paragraph.extend({
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },

  group: "block",
  content: "inline*",
  renderHTML({ node, HTMLAttributes }) {
    if (HTMLAttributes.id) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      node.attrs.id = HTMLAttributes.id;
    }
    return ["p", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },

  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component, { contentDOMElementTag: 'span' })
  },

});
