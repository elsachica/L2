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
      return { isValid: false, error: "Username is required."}
    }

    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/

    if(usernameRegex.test(userName)) {
      return { isValid: true }
    } else {
      return { isValid: false, message: "Username must be 3 to 16 characters long and can only contain letters, numbers, and underscores." }
    }
  }
}