export class PhoneNumberValidator {
  validatePhoneNumber(phoneNumber) {
    if(!phoneNumber) {
      return { isValid: false, error: "Phone number is requiered." }
    }
    const swePhoneRegex = /^(?:\+46|0)\d{9}$/

    const usPhoneRegex = /^(?:\+1\s?)?\d{10}$/

    if (swePhoneRegex.test(phoneNumber)) {
      return { isValid: true, format: 'Swedish' }
    } else if (usPhoneRegex.test(phoneNumber)) {
      return { isValid: true, format: 'US' }
    } else {
      return { isValid: false, message: 'Not a valid phone number' }
    }
  }
}
