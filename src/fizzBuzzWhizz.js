import { PlainStringifier } from './numberStringifier/plainStringifier.js'
import { FizzBuzzStringifier } from './numberStringifier/fizzBuzzStringifier.js'
import { FizzStringifier } from './numberStringifier/fizzStringifier.js'
import { BuzzStringifier } from './numberStringifier/buzzStringifier.js'
import { WhizzStringifier } from './numberStringifier/whizzStringifier.js'

/**
 * Convierte el numero en un string de
 * acuerdo al algoritmo de FizzBuzz
 * - Fizz si el número es divisible por 3
 * - Buzz si el número es divisible por 5
 * - FizzBuzz si es divisible por 3 y 5
 * - Whizz si es divisible por 7 (y no por otro número)
 * - El número como string en cualquier otro caso
 * @param {number} aNumber
 * @returns {string} el numero transformado como string
 */
export class FizzBuzzWhizz {
  constructor () {
    this.stringifiers = [
      new FizzBuzzStringifier(),
      new FizzStringifier(),
      new BuzzStringifier(),
      new WhizzStringifier(),
      new PlainStringifier()
    ]
  }

  /**
   * @param {number} aNumber el numero a convertir
   * @returns {string} el numero como string segun las reglas de conversion
   */
  convert (aNumber) {
    const stringifier = this.selectStringifierFor(aNumber)
    return stringifier.stringify(aNumber)
  }

  selectStringifierFor (aNumber) {
    return this.stringifiers.find(stringifier => stringifier.canConvert(aNumber))
  }
}
