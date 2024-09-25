/**
 * Class representing a street name validator.
 */
export class StreetValidator {
  /**
   * Validates a street name.
   * @param {string} street - The street name to validate.
   * @returns {Object} The validation result.
   * @returns {boolean} return.isValid - Indicates if the street name is valid.
   * @returns {string} [return.error] - The error message if the street name is invalid.
   */
  validateStreet(street) {
    if (!street) {
      return { isValid: false, error: "Street name is required." }
    }

    const streetRegex = /^[A-Za-zåäöÅÄÖ\s]+$/ // Only letters and spaces allowed

    if (!streetRegex.test(street)) {
      return { isValid: false, error: "Street name can only contain letters and spaces." }
    }

    return { isValid: true }
  }
}
