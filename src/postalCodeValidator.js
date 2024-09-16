export class PostalCodeValidator {
  constructor() {}

  validate(postalCode) {
    // US-format: 5 siffror eller 5 siffror följt av bindestreck och 4 siffror
    const usPostalCodeRegex = /^\d{5}(-\d{4})?$/

    // Svenskt format: 5 siffror med eller utan mellanslag
    const swePostalCodeRegex = /^\d{3}\s?\d{2}$/


    if (usPostalCodeRegex.test(postalCode)) {
      return { isValid: true, coutnry: 'USA' }
    } else if (swePostalCodeRegex.test(postalCode)) {
      return { isValid: true, country: 'Sweden' }
    } else {
      return { isValid: false, message: 'Not a valid postal code'}
    }
  }
}