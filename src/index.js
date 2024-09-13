import { EmailValidator } from './emailValidator.js'

const emailValidator = new EmailValidator


console.log(emailValidator.validate('elsa@gmail.com'))
console.log(emailValidator.validate(''))
console.log(emailValidator.validate('elsagmail.com'))