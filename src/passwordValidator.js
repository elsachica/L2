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
    if (!password) {
      return { isValid: false, error: "Password is required." }
    }

    const lengthRegex = /^.{6,16}$/
    const digitRegex = /[0-9]/
    const specialCharRegex = /[!@#$%^&*]/
    const upperCaseRegex = /[A-Z]/
    const lowerCaseRegex = /[a-z]/
    const noSpaceRegex = /^\S*$/

    if (!lengthRegex.test(password)) {
      return { isValid: false, message: "Password must be between 6 and 16 characters long." }
    }
    if (!digitRegex.test(password)) {
      return { isValid: false, message: "Password must include at least one digit." }
    }
    if (!specialCharRegex.test(password)) {
      return { isValid: false, message: "Password must include at least one special character." }
    }
    if (!upperCaseRegex.test(password)) {
      return { isValid: false, message: "Password must include at least one uppercase letter." }
    }
    if (!lowerCaseRegex.test(password)) {
      return { isValid: false, message: "Password must include at least one lowercase letter." }
    }
    if (!noSpaceRegex.test(password)) {
      return { isValid: false, message: "Password must not contain spaces." }
    }
    
    return { isValid: true }
  }
}