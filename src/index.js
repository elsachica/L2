import { EmailValidator } from './emailValidator.js'
import { PostalCodeValidator } from './postalCodeValidator.js'

const emailValidator = new EmailValidator
const postalCodeValidator = new PostalCodeValidator

// Test

// EmailValidator
// console.log(emailValidator.validate('elsa@gmail.com'))
// console.log(emailValidator.validate(''))
// console.log(emailValidator.validate('elsagmail.com'))

// PostalCodeValidator
console.log(postalCodeValidator.validate('12345'))
console.log(postalCodeValidator.validate('12345-6789'))
console.log(postalCodeValidator.validate('1234'))