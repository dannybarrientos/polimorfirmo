import { test, describe } from 'node:test'
import assert from 'node:assert'
import { NumberStringifier } from '../../src/numberStringifier/numberStringifier.js'

describe('NumberStringifier', () => {
  test('canConvert must be implemented by subclasses', () => {
    const sut = new NumberStringifier()
    assert.throws(() => sut.canConvert(1), new Error(NumberStringifier.MUST_IMPLEMENTED_BY_SUBCLASS_ERROR_MESSAGE))
  })

  test('canConvert must be implemented by subclasses', () => {
    const sut = new NumberStringifier()
    assert.throws(() => sut.stringify(1), new Error(NumberStringifier.MUST_IMPLEMENTED_BY_SUBCLASS_ERROR_MESSAGE))
  })
})
