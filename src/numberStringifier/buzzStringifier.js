import { NumberStringifier } from './numberStringifier.js'

/**
 * Clase que convierte los números en Buzz
 * Puede por regla convertir los divisibles por 5
 */
export class BuzzStringifier extends NumberStringifier {
  canConvert (aNumber) {
    return aNumber % 5 === 0
  }

  stringify (number) {
    return 'Buzz'
  }
}
