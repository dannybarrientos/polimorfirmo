import { describe, test } from 'node:test'
import assert from 'node:assert'
import { BuzzStringifier } from '../../src/numberStringifier/buzzStringifier.js'

describe('BuzzStringifier', () => {
  test('can convert 5', () => {
    const sut = new BuzzStringifier()
    assert.strictEqual(sut.canConvert(5), true)
    assert.strictEqual(sut.stringify(5), 'Buzz')
  })

  test('cannot convert 1', () => {
    const sut = new BuzzStringifier()
    assert.strictEqual(sut.canConvert(1), false)
  })
})
