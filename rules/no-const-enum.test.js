const test = require('../test-utils')()

test(require('./no-const-enum'), {
  valid: ['enum X {A}', 'enum X {A = "A"}'],
  invalid: [
    { code: 'const enum X {A}', errors: [/./] },
    { code: 'const enum X {A = "A"}', errors: [/./] },
  ],
})
