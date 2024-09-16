import { EmailValidator } from './emailValidator.js'
import { PostalCodeValidator } from './postalCodeValidator.js'
import { PhoneNumberValidator } from './phoneNumberValidator.js'

const emailValidator = new EmailValidator
const postalCodeValidator = new PostalCodeValidator
const phoneNumberValidator = new PhoneNumberValidator

// Test

// EmailValidator
// console.log(emailValidator.validate('example@gmail.com'))
// console.log(emailValidator.validate(''))
// console.log(emailValidator.validate('examplegmail.com'))

// PostalCodeValidator
// console.log(postalCodeValidator.validate('12345')) // USA
// console.log(postalCodeValidator.validate('12345-6789')) // USA
// console.log(postalCodeValidator.validate('123 45')) // Sweden
// console.log(postalCodeValidator.validate('1234')) // false

console.log(phoneNumberValidator.validate('0763967890'))
console.log(phoneNumberValidator.validate('+46763967890'))
console.log(phoneNumberValidator.validate('890'))
console.log(phoneNumberValidator.validate(''))