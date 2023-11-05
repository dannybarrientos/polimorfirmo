import { describe, test } from 'node:test'
import assert from 'node:assert'
import { FizzStringifier } from '../../src/numberStringifier/fizzStringifier.js'

describe('FizzStringifier', () => {
  test('can convert 3', () => {
    const sut = new FizzStringifier()
    assert.strictEqual(sut.canConvert(3), true)
    assert.strictEqual(sut.stringify(3), 'Fizz')
  })

  test('cannot convert 1', () => {
    const sut = new FizzStringifier()
    assert.strictEqual(sut.canConvert(1), false)
  })
})
