/**
 * Class representing a postal code validator for multiple countries.
 * 
 * This validator supports the following countries:
 * - USA
 * - Sweden
 * - Canada
 * - UK
 * - Germany
 * - France
 * - Italy
 * - Spain
 * - Netherlands
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
    try {
      if (!postalCode) {
        return { isValid: false, error: "Postal code is required." }
      }

      const usPostalCodeRegex = /^\d{5}(-\d{4})?$/
      const swePostalCodeRegex = /^\d{3} \d{2}$/
      const canPostalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/
      const ukPostalCodeRegex = /^[A-Za-z]{1,2}\d{1,2}[A-Za-z]?\s?\d[A-Za-z]{2}$/
      const gerPostalCodeRegex = /^\d{5}$/
      const fraPostalCodeRegex = /^\d{5}$/
      const itaPostalCodeRegex = /^\d{5}$/
      const espPostalCodeRegex = /^\d{5}$/
      const nldPostalCodeRegex = /^\d{4} ?[A-Za-z]{2}$/

      if (usPostalCodeRegex.test(postalCode)) {
        return { isValid: true, country: "USA" }
      } else if (swePostalCodeRegex.test(postalCode)) {
        return { isValid: true, country: "Sweden" }
      } else if (canPostalCodeRegex.test(postalCode)) {
        return { isValid: true, country: "Canada" }
      } else if (ukPostalCodeRegex.test(postalCode)) {
        return { isValid: true, country: "UK" }
      } else if (gerPostalCodeRegex.test(postalCode)) {
        return { isValid: true, country: "Germany" }
      } else if (fraPostalCodeRegex.test(postalCode)) {
        return { isValid: true, country: "France" }
      } else if (itaPostalCodeRegex.test(postalCode)) {
        return { isValid: true, country: "Italy" }
      } else if (espPostalCodeRegex.test(postalCode)) {
        return { isValid: true, country: "Spain" }
      } else if (nldPostalCodeRegex.test(postalCode)) {
        return { isValid: true, country: "Netherlands" }
      } else {
        return { isValid: false, error: "Not a valid postal code." }
      }
    } catch (error) {
      return { isValid: false, error: "An unexpected error occurred." }
    }
  }
}