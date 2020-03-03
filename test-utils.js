const { basename } = require('path')
const { RuleTester } = require('eslint')

const test = () => {
  const name = basename(require.main.filename, '.js')
  const ruleTester = new RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
    parserOptions: { ecmaFeatures: { jsx: true } },
  })

  return (rule, tests) => ruleTester.run(name, rule, tests)
}

module.exports = test
