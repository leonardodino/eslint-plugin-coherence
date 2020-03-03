const test = require('../test-utils')()

test(require('./no-confusing-enum'), {
  valid: ['enum X {A = "A", "B" = "B", 2 = 2}'],
  invalid: [
    { code: 'const enum X {""}', errors: [/unsupported usage/] },
    { code: 'const enum X {"" = A}', errors: [/unsupported usage/] },
    { code: 'const enum X {2}', errors: [/numeric enum/] },
    { code: 'const enum X {A}', errors: [/numeric enum/] },
    { code: 'const enum X {"A"}', errors: [/numeric enum/] },
    { code: 'const enum X {A = B}', errors: [/value must match/] },
    { code: 'const enum X {"A" = B}', errors: [/value must match/] },
    { code: 'const enum X {"A" = "B"}', errors: [/value must match/] },
  ],
})
