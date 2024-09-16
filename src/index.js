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
// console.log(postalCodeValidator.validate('12345'))
// console.log(postalCodeValidator.validate('12345-6789'))
// console.log(postalCodeValidator.validate('123 45'))
// console.log(postalCodeValidator.validate('1234'))

// PhoneNumberValidator
console.log(phoneNumberValidator.validate('0701234567'))
console.log(phoneNumberValidator.validate('+46701234567'))
console.log(phoneNumberValidator.validate('+1 1234567890'))
console.log(phoneNumberValidator.validate('1234567890'))
console.log(phoneNumberValidator.validate('890'))
console.log(phoneNumberValidator.validate(''))
