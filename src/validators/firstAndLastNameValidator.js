export class FirstAndLastNameValidator {
  /**
   * Validates the first and last name.
   * @param {string} firstName - The first name to validate.
   * @param {string} lastName - The last name to validate.
   * @returns {Object} The validation result.
   * @returns {boolean} return.isValid - Indicates if the names are valid.
   * @returns {string} [return.error] - The error message if validation fails.
   */
  validateFirstAndLastName(firstName, lastName) {
    if (!firstName || !lastName) {
      return { isValid: false, error: "First name and last name are required." }
    }

    const nameRegex = /^[A-Za-zåäöÅÄÖ]+$/ // Only letters allowed
    const minLength = 1 // Minimum length of the name
    const maxLength = 50 // Maximum length of the name

    if (!firstName || firstName.length < minLength || firstName.length > maxLength) {
      return { isValid: false, error: "First name must be between 1 and 50 characters." }
    }
    if (!nameRegex.test(firstName)) {
      return { isValid: false, error: "First name can only contain letters." }
    }

    if (!lastName || lastName.length < minLength || lastName.length > maxLength) {
      return { isValid: false, error: "Last name must be between 1 and 50 characters." }
    }
    if (!nameRegex.test(lastName)) {
      return { isValid: false, error: "Last name can only contain letters." }
    }

    return { isValid: true }
  }
}