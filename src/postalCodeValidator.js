export class PostalCodeValidator {
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