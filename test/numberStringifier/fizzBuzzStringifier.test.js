import { describe, test } from 'node:test'
import assert from 'node:assert'
import { FizzBuzzStringifier } from '../../src/numberStringifier/fizzBuzzStringifier.js'

describe('FizzBuzzStringifier', () => {
  test('can convert 15', () => {
    const sut = new FizzBuzzStringifier()
    assert.strictEqual(sut.canConvert(15), true)
    assert.strictEqual(sut.stringify(15), 'FizzBuzz')
  })

  test('cannot convert 1', () => {
    const sut = new FizzBuzzStringifier()
    assert.strictEqual(sut.canConvert(1), false)
  })
})
