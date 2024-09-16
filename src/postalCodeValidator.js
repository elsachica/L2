export class PostalCodeValidator {
  constructor() {}

  validate(postalCode) {
    const postalCodeRegex = /^\d{5}(-\d{4})?$/
    return postalCodeRegex.test(postalCode)
  }
}