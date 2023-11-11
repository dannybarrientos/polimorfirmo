import { NumberStringifier } from './numberStringifier.js'

export class WhizzStringifier extends NumberStringifier {
  canConvert (number) {
    return number % 7 === 0
  }

  stringify (number) {
    return 'Whizz'
  }
}
