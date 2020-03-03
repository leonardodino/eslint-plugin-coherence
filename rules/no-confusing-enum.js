const getValue = node => {
  if (node.type === 'Literal') return node.value
  if (node.type === 'Identifier') return node.name
  return null
}

module.exports = {
  create: context => ({
    TSEnumDeclaration: tsEnumNode => {
      tsEnumNode.members.forEach(tsEnumMemberNode => {
        const { id, initializer } = tsEnumMemberNode
        const idValue = getValue(id)
        if (!idValue) {
          context.report({
            node: tsEnumMemberNode,
            message: 'unsupported usage',
          })
          return
        }
        if (!initializer) {
          context.report({
            node: tsEnumMemberNode,
            message: 'numeric enums are not allowed',
          })
          return
        }
        if (idValue !== initializer.value) {
          context.report({
            node: initializer,
            message: "enum value must match it's key",
          })
          return
        }
      })
    },
  }),
}
