/**
 * Class representing a phone number validator.
 */
export class PhoneNumberValidator {
  /**
   * Validates a phone number.
   * @param {string} phoneNumber - The phone number to validate.
   * @returns {Object} The validation result.
   * @returns {boolean} return.isValid - Indicates if the phone number is valid.
   * @returns {string} [return.error] - The error message if the phone number is invalid.
   * @returns {string} [return.format] - The format of the valid phone number.
   */
  validatePhoneNumber(phoneNumber) {
    if (!phoneNumber) {
      return { isValid: false, error: "Phone number is required." }
    }

    const swePhoneRegex = /^(?:\+46|0)\d{9}$/
    const usPhoneRegex = /^(?:\+1\s?)?\d{10}$/

    if (swePhoneRegex.test(phoneNumber)) {
      return { isValid: true, format: 'Swedish' }
    } else if (usPhoneRegex.test(phoneNumber)) {
      return { isValid: true, format: 'US' }
    } else {
      return { isValid: false, error: 'Not a valid phone number' }
    }
  }
}
