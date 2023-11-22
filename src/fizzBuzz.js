import { PlainStringifier } from './numberStringifier/plainStringifier.js'
import { FizzBuzzStringifier } from './numberStringifier/fizzBuzzStringifier.js'
import { FizzStringifier } from './numberStringifier/fizzStringifier.js'
import { BuzzStringifier } from './numberStringifier/buzzStringifier.js'

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
  /**
   * Convierte un número a string siguiendo las reglas
   * @param {number} aNumber el numero a convertir
   * @returns {string} el numero como string segun las reglas de conversion
   */
  convert (aNumber) {
    const fizzBuzzStringifier = new FizzBuzzStringifier()
    const fizzStringifier = new FizzStringifier()
    const buzzStringifier = new BuzzStringifier()
    const plainStringifier = new PlainStringifier()
    if (fizzBuzzStringifier.canConvert(aNumber)) {
      return fizzBuzzStringifier.stringify(aNumber)
    } else if (fizzStringifier.canConvert(aNumber)) {
      return fizzStringifier.stringify(aNumber)
    } else if (buzzStringifier.canConvert(aNumber)) {
      return buzzStringifier.stringify(aNumber)
    } else if (plainStringifier.canConvert(aNumber)) {
      return plainStringifier.stringify(aNumber)
    }
  }
}
