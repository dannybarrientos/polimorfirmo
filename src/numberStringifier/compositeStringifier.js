import { NumberStringifier } from './numberStringifier.js'

/**
 * Clase que permite componer objetos NumberStringifier
 *
 * Puede convertir un número en un string si más de uno de
 * los NumberStringifier que compone puede convertir el número.
 *
 * Convierte el número concatenando las conversiones de los
 * NumberStringifier que pueden convertir al número
 */
export class CompositeStringifier extends NumberStringifier {
  constructor(stringifiers) {
    super()
    this.stringifiers = stringifiers
  }

  canConvert(aNumber) {
    return this.stringifiersThatCanConvert(aNumber).length > 1
  }

  stringifiersThatCanConvert(aNumber) {
    return this.stringifiers.filter(stringifier => stringifier.canConvert(aNumber))
  }

  stringify(aNumber) {
    return this.stringifiersThatCanConvert(aNumber).map(stringifier => stringifier.stringify(aNumber)).join('')
  }
}

NumberStringifier.SUBCLASSES.push(CompositeStringifier)
