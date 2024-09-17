import { PhoneNumberValidator } from "../phoneNumberValidator"

describe('PhoneNumberValidator Tests', () => {
  let phoneNumberValidator;

  beforeAll(() => {
    phoneNumberValidator = new PhoneNumberValidator()
  });

  test('validates a Swedish phone number with 10 digits', async () => {
    const result = await phoneNumberValidator.validatePhoneNumber('0701234567')
    expect(result).toEqual({ isValid: true, format: 'Swedish' })
  })

  test('validates a Swedish phone number with country code', async () => {
    const result = await phoneNumberValidator.validatePhoneNumber('+46701234567')
    expect(result).toEqual({ isValid: true, format: 'Swedish' })
  })

  test('validates a Swedish phone number with 10 digits and a leading zero', async () => {
    const result = await phoneNumberValidator.validatePhoneNumber('0763967890')
    expect(result).toEqual({ isValid: true, format: 'Swedish' })
  })

  test('validates a US phone number with country code', async () => {
    const result = await phoneNumberValidator.validatePhoneNumber('+1 1234567890')
    expect(result).toEqual({ isValid: true, format: 'US' })
  })

  test('validates a US phone number without country code', async () => {
    const result = await phoneNumberValidator.validatePhoneNumber('1234567890')
    expect(result).toEqual({ isValid: true, format: 'US' })
  })

  test('returns invalid for a number with fewer digits', async () => {
    const result = await phoneNumberValidator.validatePhoneNumber('890')
    expect(result).toEqual({ isValid: false, message: 'Not a valid phone number' })
  })

  test('returns invalid for an empty phone number', async () => {
    const result = await phoneNumberValidator.validatePhoneNumber('')
    expect(result).toEqual({ isValid: false, message: 'Not a valid phone number' })
  })
})
