import { FizzStringifier } from './numberStringifier/fizzStringifier.js'
import { BuzzStringifier } from './numberStringifier/buzzStringifier.js'
import { WhizzStringifier } from './numberStringifier/whizzStringifier.js'
import { CompositeStringifier } from './numberStringifier/compositeStringifier.js'
import { PlainStringifier } from './numberStringifier/plainStringifier.js'

/**
 * SPOILER ALERT
 *
 * Esta clase se obtiene
 * al final de la charla quizás quieras
 * volver ir a un tag anterior
 *
 * FIN SPOILER ALERT
 *
 * Clase que representa los juegos
 * de cambiar números por palabras
 */
export class NumberToWordGame {
  /**
   * Crea una instancia con las reglas de FizzBuzz
   * @returns {NumberToWordGame} El juego FizzBuzz
   */
  static FizzBuzz () {
    const composableStringifiers = [
      new FizzStringifier(),
      new BuzzStringifier()
    ]

    return NumberToWordGame.plainAsDefaultAndCompose(composableStringifiers)
  }

  /**
   * Crea una instancia con las reglas de FizzBuzzWhizz
   * @returns {NumberToWordGame} El juego FizzBuzzWhizz
   */
  static FizzBuzzWhizz () {
    const composableStringifiers = [
      new FizzStringifier(),
      new BuzzStringifier(),
      new WhizzStringifier()]

    return NumberToWordGame.plainAsDefaultAndCompose(composableStringifiers)
  }

  /**
   * Construye una instancia que tiene los siguientes NumberStringifiers
   * - CompositeStringifier utilizando composableStringifiers
   * - Los composableStringifiers pasados como parámetros
   * - PlainStringifier (caso default)
   * NOTA:
   *   Podría haber algo acá que lleve a pensar algún comportamiento no modelado
   *   en otro lado. ¿Podríamos saber si un NumberStringifier es combinable? ¿Cómo?
   *
   * @param {NumberStringifiers[]} composableStringifiers
   * @returns {NumberToWordGame} El juego con los NumberStringfier indicados arriba
   */
  static plainAsDefaultAndCompose (composableStringifiers) {
    const stringifiers = [
      new CompositeStringifier(composableStringifiers),
      ...composableStringifiers,
      new PlainStringifier()
    ]
    return new NumberToWordGame(stringifiers)
  }

  constructor (stringifiers) {
    this.stringifiers = stringifiers
  }

  /**
   * @param {number} aNumber el numero a convertir
   * @returns {string} el numero como string segun las reglas de conversion
   */
  convert (aNumber) {
    const stringifier = this.selectStringifierFor(aNumber)
    return stringifier.stringify(aNumber)
  }

  /**
   * Elige al NumberStringifier que puede convertir el número en string
   *
   * NOTA: El find no devuelve un null si entre todos los NumberStringifier
   *       de la propiedad stringifiers pueden convertir a todos los números.
   *       En los ejemplos se logra con PlainStringifier que puede convertir
   *       a todos los números. Es el caso por defecto.
   * @param {number} aNumber el número que se desea convertir
   * @returns {NumberStringier} La instancia que puede convertir el número en string
   */
  selectStringifierFor (aNumber) {
    return this.stringifiers.find(stringifier => stringifier.canConvert(aNumber))
  }
}
