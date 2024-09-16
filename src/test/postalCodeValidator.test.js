import { PostalCodeValidator } from "../postalCodeValidator";

describe('PostalCodevalidator Tests', () => {
  let postalCodeValidator

  beforeAll(() => {
    postalCodeValidator = new PostalCodeValidator()
  })

  test('returns valid for a correct US postal Code', async () => {
    const result = await postalCodeValidator.validate('12345')
    expect(result).toEqual({ isValid: true, country: 'USA' })
  })

  test('returns valid for a correct US postal code with hyphen', async () => {
    const result = await postalCodeValidator.validate('12345-6789')
    expect(result).toEqual({ isValid: true, country: 'USA' })
  })

  test('valid Swedish postal code with space', async () => {
    const result = await postalCodeValidator.validate('123 45')
    expect(result).toEqual({ isValid: true, country: 'Sweden' })
  })

  test('returns an error for an invalid postal code', async () => {
    const result = await postalCodeValidator.validate('1234')
    expect(result).toEqual({ isValid: false, message: 'Not a valid postal code.' })
  })

  test('returns an error for an empty postal code', async () => {
    const result = await postalCodeValidator.validate('')
    expect(result).toEqual({ isValid: false, message: 'Not a valid postal code.'})
  })
})