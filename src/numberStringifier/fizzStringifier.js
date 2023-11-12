import { NumberStringifier } from './numberStringifier.js'

/**
 * Clase que convierte los números en Fizz
 * Puede por regla convertir los divisibles por 3
 */
export class FizzStringifier {
  canConvert(aNumber) {
    return aNumber % 3 === 0
  }

  stringify(aNumber) {
    return 'Fizz'
  }
}

NumberStringifier.SUBCLASSES.push(FizzStringifier)
