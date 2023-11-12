import { describe, test } from 'node:test'
import { readFileSync } from 'node:fs'
import assert from 'node:assert'
import { dirname, join as joinPaths } from 'node:path'
import { fileURLToPath } from 'node:url'
import { NumberStringifier } from '../src/numberStringifier/index.js'
import { NumberToWordGame } from '../src/NumberToWordGame.js'

describe('FizzWhizz from configuration', () => {
  // Importar configuración como objeto (en la vida real usar Convict o similar)
  const fileDirname = dirname(fileURLToPath(import.meta.url))
  const config = JSON.parse(readFileSync(joinPaths(fileDirname, './resources/exampleConfig.json')))

  // Encontrar las clases a utilizar e instanciarlas
  const subclasses = config.composableStringifiers.map(composableStringifier => NumberStringifier.getClassesByName(composableStringifier))
  const composableStringifiers = subclasses.map(Subclass => new Subclass())

  // Crear instancia del juego
  const sut = NumberToWordGame.plainAsDefaultAndCompose(composableStringifiers);

  // Tests para validar FizzWhizz
  [1, 5, 97].forEach((testCase) => {
    test(`for ${testCase} return ' ${testCase}'`, () => {
      // This test passes because it does not throw an exception.
      assert.strictEqual(sut.convert(testCase), testCase.toString())
    })
  });

  [3, 15].forEach((testCase) => {
    test(`for ${testCase} return 'Fizz'`, () => {
      // This test passes because it does not throw an exception.
      assert.strictEqual(sut.convert(testCase), 'Fizz')
    })
  });
  [7].forEach((testCase) => {
    test(`for ${testCase} return 'Whizz'`, () => {
      // This test passes because it does not throw an exception.
      assert.strictEqual(sut.convert(testCase), 'Whizz')
    })
  });

  [21].forEach((testCase) => {
    test(`for ${testCase} return 'FizzWhizz'`, () => {
      // This test passes because it does not throw an exception.
      assert.strictEqual(sut.convert(testCase), 'FizzWhizz')
    })
  })
})
