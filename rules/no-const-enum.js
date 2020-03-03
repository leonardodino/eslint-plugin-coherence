const rules = require('eslint/lib/rules')
const noRestrictedSyntax = rules.get('no-restricted-syntax')

const options = ['TSEnumDeclaration[const=true]']

module.exports = {
  create: context => noRestrictedSyntax.create({ ...context, options }),
}
