import { NumberStringifier } from './numberStringifier.js'

/**
 * Convierte cualquier número en su representación como string
 */
export class PlainStringifier extends NumberStringifier {
  canConvert (aNumber) {
    return true
  }

  stringify (aNumber) {
    return aNumber.toString()
  }
}

NumberStringifier.SUBCLASSES.push(PlainStringifier)
