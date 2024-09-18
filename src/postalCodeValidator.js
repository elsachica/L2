/**
 * Class representing a postal code validator.
 */
export class PostalCodeValidator {
  /**
   * Validates a postal code.
   * @param {string} postalCode - The postal code to validate.
   * @returns {Object} The validation result.
   * @returns {boolean} return.isValid - Indicates if the postal code is valid.
   * @returns {string} [return.error] - The error message if the postal code is invalid.
   * @returns {string} [return.country] - The country of the valid postal code.
   */
  validatePostalCode(postalCode) {
    if(!postalCode) {
      return { isValid: false, error: "Postal code is required." }
    }
    const usPostalCodeRegex = /^\d{5}(-\d{4})?$/

    const swePostalCodeRegex = /^\d{3} \d{2}$/


    if (usPostalCodeRegex.test(postalCode)) {
      return { isValid: true, country: 'USA' }
    } else if (swePostalCodeRegex.test(postalCode)) {
      return { isValid: true, country: 'Sweden' }
    } else {
      return { isValid: false, message: 'Not a valid postal code.'}
    }
  }
}
