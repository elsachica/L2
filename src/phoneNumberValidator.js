export class PhoneNumberValidator {
  constructor() {}

  validatePhoneNumber(phoneNumber) {
    // Svenskt format: börjar med +46 eller 0, följt av 9 siffror (kan ha mellanslag)
    const swePhoneRegex = /^(?:\+46|0)\d{9}$/

    // Amerikanskt format: 10 siffror eller 11 siffror med landskod (+1
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
