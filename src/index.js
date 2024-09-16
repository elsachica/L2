import { EmailValidator } from './emailValidator.js'
import { PostalCodeValidator } from './postalCodeValidator.js'
import { PhoneNumberValidator } from './phoneNumberValidator.js'
import { PasswordValidator } from './passwordValidator.js'
import { DateFormatValidator } from './dateFormatValidator.js'

const emailValidator = new EmailValidator
const postalCodeValidator = new PostalCodeValidator
const phoneNumberValidator = new PhoneNumberValidator
const passwordValidator = new PasswordValidator
const dateFormatValidator = new DateFormatValidator

// EmailValidator
// console.log('EmailValidator Tests')
// console.log(emailValidator.validate('example@gmail.com'))
// console.log(emailValidator.validate(''))
// console.log(emailValidator.validate('examplegmail.com'))

// PostalCodeValidator
// console.log('\nPostalCodeValidator Tests')
// console.log(postalCodeValidator.validate('12345'))
// console.log(postalCodeValidator.validate('12345-6789'))
// console.log(postalCodeValidator.validate('123 45'))
// console.log(postalCodeValidator.validate('1234'))

// PhoneNumberValidator
// console.log('\nPhoneNumberValidator Tests')
// console.log(phoneNumberValidator.validate('0701234567'))
// console.log(phoneNumberValidator.validate('+46701234567'))
// console.log(phoneNumberValidator.validate('+1 1234567890'))
// console.log(phoneNumberValidator.validate('1234567890'))
// console.log(phoneNumberValidator.validate('890'))
// console.log(phoneNumberValidator.validate(''))


// PasswordValidator
// console.log('\nPasswordValidator Tests')
// console.log(passwordValidator.validate('P@ssw0rd'))
// console.log(passwordValidator.validate('P@ss1'))
// console.log(passwordValidator.validate('123456'))
// console.log(passwordValidator.validate('Password1'))
// console.log(passwordValidator.validate('Password!'))

console.log('\DateFormatValidator Tests')
console.log(dateFormatValidator.validate('2024-09-16'))
console.log(dateFormatValidator.validate('16/09/2024'))
console.log(dateFormatValidator.validate('240916'))