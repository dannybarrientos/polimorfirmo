import { NumberStringifier } from './numberStringifier.js'

/**
 * Clase que convierte los números en FizzBuzz
 * Puede por regla convertir los divisibles por 3 y 5
 */
export class FizzBuzzStringifier extends NumberStringifier {
  canConvert (aNumber) {
    return aNumber % 15 === 0
  }

  stringify (number) {
    return 'FizzBuzz'
  }
}

NumberStringifier.SUBCLASSES.push(FizzBuzzStringifier)
