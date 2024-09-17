import { PasswordValidator } from '../passwordValidator'

describe('PasswordValidator Tests', () => {
  let passwordValidator

  beforeAll(() => {
    passwordValidator = new PasswordValidator()
  })

  test('validates a correct password', async () => {
    const result = await passwordValidator.validate('Abc123!')
    expect(result).toEqual({ isValid: true })
  })

  test('returns invalid for a password that is too short', async () => {
    const result = await passwordValidator.validate('Ab1!')
    expect(result).toEqual({ isValid: false, message: 'Password must be between 6 and 16 characters long, and include at least one letter, one digit, and one special character.' })
  })

  test('returns invalid for a password missing a digit', async () => {
    const result = await passwordValidator.validate('Abcdef!')
    expect(result).toEqual({ isValid: false, message: 'Password must be between 6 and 16 characters long, and include at least one letter, one digit, and one special character.' })
  })

  test('returns invalid for a password missing a special character', async () => {
    const result = await passwordValidator.validate('Abc12345')
    expect(result).toEqual({ isValid: false, message: 'Password must be between 6 and 16 characters long, and include at least one letter, one digit, and one special character.' })
  })

  test('returns invalid for a password that is too long', async () => {
    const result = await passwordValidator.validate('Abc12345!@#TooLongPassword')
    expect(result).toEqual({ isValid: false, message: 'Password must be between 6 and 16 characters long, and include at least one letter, one digit, and one special character.' })
  })
})
