import { describe, test } from 'node:test'
import assert from 'node:assert'
import { NumberToWordGame } from '../src/NumberToWordGame.js'

describe('FizzBuzz', () => {
  const sut = NumberToWordGame.FizzBuzz();

  [1, 2, 98].forEach((testCase) =>
    test(`for ${testCase} return '${testCase}'`, () => {
    // This test passes because it does not throw an exception.
      assert.strictEqual(sut.convert(testCase), testCase.toString())
    }));

  [3, 9, 99].forEach((testCase) => {
    test(`for ${testCase} return 'Fizz'`, () => {
    // This test passes because it does not throw an exception.
      assert.strictEqual(sut.convert(testCase), 'Fizz')
    })
  });

  [5, 10, 100].forEach((testCase) => {
    test(`for ${testCase} return 'Buzz'`, () => {
    // This test passes because it does not throw an exception.
      assert.strictEqual(sut.convert(testCase), 'Buzz')
    })
  });

  [15, 30, 90].forEach((testCase) => {
    test(`for ${testCase} return 'FizzBuzz'`, () => {
      // This test passes because it does not throw an exception.
      assert.strictEqual(sut.convert(testCase), 'FizzBuzz')
    })
  })
})
