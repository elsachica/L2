/**
 * Class representing a password validator.
 */
export class PasswordValidator {
  /**
   * Validates a password.
   * @param {string} password - The password to validate.
   * @returns {Object} The validation result.
   * @returns {boolean} return.isValid - Indicates if the password is valid.
   * @returns {string} [return.error] - The error message if the password is invalid.
   * @returns {string} [return.message] - The message explaining why the password is invalid.
   */
  validatePassword(password) {
    try {
      if (!password) {
        return { isValid: false, error: "Password is required." }
      }

      const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

      if (passwordRegex.test(password)) {
        return { isValid: true }
      } else {
        return { isValid: false, message: "Password must be between 6 and 16 characters long, and include at least one letter, one digit, and one special character." }
      }
    } catch (error) {
      return { isValid: false, error: "An unexpected error occurred." }
    }
  }
}