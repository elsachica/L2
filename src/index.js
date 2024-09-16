import { EmailValidator } from './emailValidator.js'
import { PostalCodeValidator } from './postalCodeValidator.js'

const emailValidator = new EmailValidator
const postalCodeValidator = new PostalCodeValidator

// Test

// EmailValidator
// console.log(emailValidator.validate('example@gmail.com'))
// console.log(emailValidator.validate(''))
// console.log(emailValidator.validate('examplegmail.com'))

// PostalCodeValidator
console.log(postalCodeValidator.validate('12345')) // USA and Sweden
console.log(postalCodeValidator.validate('12345-6789')) // USA
console.log(postalCodeValidator.validate('123 45')) // Sweden
console.log(postalCodeValidator.validate('1234')) // false

