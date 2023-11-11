import { PlainStringifier } from './numberStringifier/plainStringifier.js'
import { FizzStringifier } from './numberStringifier/fizzStringifier.js'
import { BuzzStringifier } from './numberStringifier/buzzStringifier.js'
import { CompositeStringifier } from './numberStringifier/compositeStringifier.js'

/**
 * Clase que implementa FizzBuzz
 *
 * Convierte con el método convert
 * un número en un string de acuerdo
 * al siguiente algoritmo:
 * - Fizz si el número es divisible por 3
 * - Buzz si el número es divisible por 5
 * - FizzBuzz si es divisible por 3 y 5
 * - El número como string en cualquier otro caso
 */
export class FizzBuzz {

  constructor () {
    const composableStringifiers = [
      new FizzStringifier(),
      new BuzzStringifier()]

    this.stringifiers = [
      new CompositeStringifier(composableStringifiers),
      ...composableStringifiers,
      new PlainStringifier()
    ]
  }

  /**
   * Convierte un número a string siguiendo las reglas
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
