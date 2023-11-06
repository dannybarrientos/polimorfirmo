import { PlainStringifier } from './numberStringifier/plainStringifier.js'
import { FizzBuzzStringifier } from './numberStringifier/fizzBuzzStringifier.js'

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
    const plainStringifier = new PlainStringifier()
    if (fizzBuzzStringifier.canConvert(aNumber)) {
      return fizzBuzzStringifier.stringify(aNumber)
    } else if (aNumber % 3 === 0) {
      return 'Fizz'
    } else if (aNumber % 5 === 0) {
      return 'Buzz'
    } else if (plainStringifier.canConvert(aNumber)) {
      return plainStringifier.stringify(aNumber)
    }
  }
}
