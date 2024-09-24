/**
 * @file index.js
 * @description This file exports various validator classes from their respective modules.
 * These validators include:
 * - EmailValidator: Validates email addresses.
 * - PostalCodeValidator: Validates postal codes.
 * - PhoneNumberValidator: Validates phone numbers.
 * - PasswordValidator: Validates passwords.
 * - DateFormatValidator and AgeValidator: Validates date formats and age.
 */

export { EmailValidator } from "./validators/emailValidator.js"
export { PostalCodeValidator } from "./validators/postalCodeValidator.js"
export { PhoneNumberValidator } from "./validators/phoneNumberValidator.js"
export { PasswordValidator } from "./validators/passwordValidator.js"
export { UserNameValidator } from "./validators/userNameValidator.js"

export { DateFormatValidator, AgeValidator } from "./validators/date/index.js"
