export class PhoneNumberValidator {
  constructor() {}

  validate(phoneNumber) {
    // Internationellt format: + följt av landskod och nummer (utan mellanslag eller med mellanslag)
    const internationalPhoneRegex = /^\+?\d{1,3}\s?\d{1,14}(\s?\d{1,13})?$/

    // Lokalt format: 10 siffror
    const localPhoneRegex = /^\d{10}$/

    if (internationalPhoneRegex.test(phoneNumber)) {
      return { isValid: true, format: 'International' }
    } else if (localPhoneRegex.test(phoneNumber)){
      return { isValid: true, format: 'Local'}
    } else {
      return { isValid: false, message: 'Not a valid phone number'}
    }
  }
}