// src/AgeValidator.js
import { DateFormatValidator } from "./dateFormatValidator.js"

export class AgeValidator extends DateFormatValidator {
  /**
   * Validates the age based on a date format.
   * @param {string} dateFormat - The date format to validate.
   * @returns {Object} The validation result.
   * @returns {boolean} return.isValid - Indicates if the date format is valid and age is appropriate.
   * @returns {string} [return.error] - The error message if validation fails.
   */
  validateAge(dateFormat) {
    const dateValidation = this.validateDateFormat(dateFormat)
    
    if (!dateValidation.isValid) {
      return dateValidation // Return date format errors if invalid
    }

    const parsedDate = new Date(dateFormat)
    const today = new Date()

    // Calculate age
    let age = today.getFullYear() - parsedDate.getFullYear()
    const monthDiff = today.getMonth() - parsedDate.getMonth()
    const dayDiff = today.getDate() - parsedDate.getDate()

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--
    }

    // Age validation logic
    if (age < 3) {
      return { isValid: false, message: "You must be at least 3 years old to create an account." }
    }

    if (age > 120) {
      return { isValid: false, message: "You cannot be older than 120 years to create an account." }
    }

    if (parsedDate.getFullYear() < 1900) {
      return { isValid: false, message: "Date cannot be earlier than 1900." }
    }

    return { isValid: true, message: "Age is valid." }
  }
}
