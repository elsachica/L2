/**
 * Class representing a username validator.
 */
export class UserNameValidator {
  /**
   * Validates a username.
   * @param {string} username - The username to validate.
   * @returns {Object} The validation result.
   * @returns {boolean} return.isValid - Indicates if the username is valid.
   * @returns {string} [return.error] - The error message if the username is invalid.
   * @returns {string} [return.message] - The message explaining why the username is invalid.
   */
  validateUserName(userName) {
    if (!userName) {
      return { isValid: false, error: "Username is required." }
    }

    const lengthRegex = /^.{3,16}$/
    const noSpaceRegex = /^\S*$/
    const forbiddenCharsRegex = /[!@#$%^&*(),.?":{}|<>]/
    const forbiddenWords = ["admin", "root", "superuser"]

    if (!lengthRegex.test(userName)) {
      return { isValid: false, message: "Username must be between 3 and 16 characters long." }
    }
    if (!noSpaceRegex.test(userName)) {
      return { isValid: false, message: "Username must not contain spaces." }
    }
    if (forbiddenCharsRegex.test(userName)) {
      return { isValid: false, message: "Username must not contain forbidden special characters." }
    }
    if (forbiddenWords.some(word => userName.toLowerCase().includes(word))) {
      return { isValid: false, message: "Username contains forbidden words." }
    }

    return { isValid: true }
  }
}
