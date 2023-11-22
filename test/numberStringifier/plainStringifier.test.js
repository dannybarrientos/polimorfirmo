import { test, describe } from 'node:test'
import assert from 'node:assert'
import { PlainStringifier } from '../../src/numberStringifier/plainStringifier.js'

describe('PlainStringifier', () => {
  test('canConvert any number to string', () => {
    const sut = new PlainStringifier();
    [1, 3, 5, 15].forEach((testCase) => {
      assert.strictEqual(sut.canConvert(testCase), true)
      assert.strictEqual(sut.stringify(testCase), testCase.toString())
    })
  })
})
