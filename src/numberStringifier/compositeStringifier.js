import { NumberStringifier } from './numberStringifier.js'

export class CompositeStringifier extends NumberStringifier {
  constructor (stringifiers) {
    super()
    this.stringifiers = stringifiers
  }

  canConvert (aNumber) {
    return this.stringifierThatCanConvert(aNumber).length > 1
  }

  stringifierThatCanConvert (aNumber) {
    return this.stringifiers.filter(stringifier => stringifier.canConvert(aNumber))
  }

  stringify (aNumber) {
    return this.stringifierThatCanConvert(aNumber).map(stringifier => stringifier.stringify(aNumber)).join('')
  }
}
