import test, { describe } from 'node:test'
import assert from 'node:assert'
import { CompositeStringifier } from '../../src/numberStringifier/compositeStringifier.js'
import { FizzStringifier } from '../../src/numberStringifier/fizzStringifier.js'
import { BuzzStringifier } from '../../src/numberStringifier/buzzStringifier.js'
import { WhizzStringifier } from '../../src/numberStringifier/whizzStringifier.js'

describe('CompositeStringifier', async (testContext) => {
  const sut = new CompositeStringifier([new FizzStringifier(), new BuzzStringifier(), new WhizzStringifier()])
  test('can convert 15', () => {
    assert.strictEqual(sut.canConvert(15), true)
    assert.strictEqual(sut.stringify(15), 'FizzBuzz')
  })

  test('can convert 21', () => {
    assert.strictEqual(sut.canConvert(21), true)
    assert.strictEqual(sut.stringify(21), 'FizzWhizz')
  })

  test('can convert 35', () => {
    assert.strictEqual(sut.canConvert(35), true)
    assert.strictEqual(sut.stringify(35), 'BuzzWhizz')
  })

  test('can convert 105', () => {
    assert.strictEqual(sut.canConvert(105), true)
    assert.strictEqual(sut.stringify(105), 'FizzBuzzWhizz')
  })

  test('cannot convert 1,3,5,7', () => {
    assert.strictEqual(sut.canConvert(1), false)
    assert.strictEqual(sut.canConvert(3), false)
    assert.strictEqual(sut.canConvert(5), false)
    assert.strictEqual(sut.canConvert(7), false)
  })
})
