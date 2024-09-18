import { PhoneNumberValidator } from "../phoneNumberValidator"

/**
 * Tests for the PhoneNumberValidator class.
 */
describe("PhoneNumberValidator Tests", () => {
  let phoneNumberValidator

  /**
   * Initializes the PhoneNumberValidator instance before all tests.
   */
  beforeAll(() => {
    phoneNumberValidator = new PhoneNumberValidator()
  })

  /**
   * Tests if a valid Swedish phone number with 10 digits is correctly validated.
   */
  test("validates a Swedish phone number with 10 digits", async () => {
    const result = await phoneNumberValidator.validatePhoneNumber("0701234567")
    expect(result).toEqual({ isValid: true, format: "Swedish" })
  })

  /**
   * Tests if a valid Swedish phone number with country code is correctly validated.
   */
  test("validates a Swedish phone number with country code", async () => {
    const result = await phoneNumberValidator.validatePhoneNumber("+46701234567")
    expect(result).toEqual({ isValid: true, format: "Swedish" })
  })

  /**
   * Tests if a valid Swedish phone number with 10 digits and a leading zero is correctly validated.
   */
  test("validates a Swedish phone number with 10 digits and a leading zero", async () => {
    const result = await phoneNumberValidator.validatePhoneNumber("0763967890")
    expect(result).toEqual({ isValid: true, format: "Swedish" })
  })

  /**
   * Tests if a valid US phone number with country code is correctly validated.
   */
  test("validates a US phone number with country code", async () => {
    const result = await phoneNumberValidator.validatePhoneNumber("+1 1234567890")
    expect(result).toEqual({ isValid: true, format: "US" })
  })

  /**
   * Tests if a valid US phone number without country code is correctly validated.
   */
  test("validates a US phone number without country code", async () => {
    const result = await phoneNumberValidator.validatePhoneNumber("1234567890")
    expect(result).toEqual({ isValid: true, format: "US" })
  })

  /**
   * Tests if a phone number with fewer digits returns an error.
   */
  test("returns invalid for a number with fewer digits", async () => {
    const result = await phoneNumberValidator.validatePhoneNumber("890")
    expect(result).toEqual({ isValid: false, error: "Not a valid phone number" })
  })

  /**
   * Tests if an empty phone number returns an error.
   */
  test("returns invalid for an empty phone number", async () => {
    const result = await phoneNumberValidator.validatePhoneNumber("")
    expect(result).toEqual({ isValid: false, error: "Phone number is required." })
  })
})