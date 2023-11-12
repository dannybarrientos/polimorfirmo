/**
 * Clase padre de las clases que
 * convierten números a strings
 */
export class NumberStringifier {
  static MUST_IMPLEMENTED_BY_SUBCLASS_ERROR_MESSAGE = 'Must be implemented by subclass'

  static SUBCLASSES = []
  static getClassesByName (strinfigierName) {
    return NumberStringifier.SUBCLASSES.find(subclass => subclass.name === strinfigierName)
  }

  /**
   * Chequea si la instancia puede
   * convertir el número a string
   * @param {number} aNumber el número que se quiere convertir
   * @returns {boolean} verdadero (true) si el objeto puede convertir el número. Falso en otro caso
   */
  canConvert (aNumber) {
    throw new Error(NumberStringifier.MUST_IMPLEMENTED_BY_SUBCLASS_ERROR_MESSAGE)
  }

  /**
   * Convierte un número en string
   * @param {number} aNumber el número a convertir
   * @returns {string} la conversión a string de aNumber
   */
  stringify (aNumber) {
    throw new Error(NumberStringifier.MUST_IMPLEMENTED_BY_SUBCLASS_ERROR_MESSAGE)
  }
}
