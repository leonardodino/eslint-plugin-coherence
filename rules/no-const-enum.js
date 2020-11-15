const rules = require('eslint/lib/rules')
const noRestrictedSyntax = rules.get('no-restricted-syntax')

const options = ['TSEnumDeclaration[const=true]']

module.exports = {
  meta: { messages: noRestrictedSyntax.meta.messages },
  create: context => noRestrictedSyntax.create({ ...context, options }),
}
