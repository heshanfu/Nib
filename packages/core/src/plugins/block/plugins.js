import { Plugin, PluginKey } from "prosemirror-state";

export const blockPluginKey = new PluginKey("block");

const getSelectedBlock = state => {
  let block;
  let multipleBlock = false;
  const {
    doc,
    selection: { $from, $to }
  } = state;
  const lowerDepth = ($from.depth < $to.depth ? $from.depth : $to.depth) - 1;
  doc.nodesBetween($from.pos, $to.pos, (node, pos) => {
    const posDepth = state.doc.resolve(pos).depth;
    if (!node.isBlock || posDepth < lowerDepth) return;
    const {
      type: { name: blockType },
      attrs
    } = node;
    if (!block) {
      block = { type: blockType, attrs };
    } else if (
      blockType !== block.type ||
      (block.type === "heading" && attrs.level !== block.attrs.level)
    ) {
      multipleBlock = true;
    }
  });
  return multipleBlock ? undefined : block;
};

const blockPlugin = new Plugin({
  key: blockPluginKey,

  state: {
    init: (_, state) => {
      const selectedBlock = getSelectedBlock(state);
      return { selectedBlock };
    },
    apply(tr, value, oldState, newState) {
      if (tr.docChanged || oldState.selection !== newState.selection) {
        const selectedBlock = getSelectedBlock(newState);
        return { selectedBlock };
      }
      return value;
    }
  }
});

export default blockPlugin;
