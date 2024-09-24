import { FirstAndLastNameValidator } from "../validators/firstAndLastNameValidator.js"

/**
 * Tests for the FirstAndLastNameValidator class.
 */
describe("FirstAndLastNameValidator Tests", () => {
  let nameValidator

  /**
   * Initializes the FirstAndLastNameValidator instance before all tests.
   */
  beforeAll(() => {
    nameValidator = new FirstAndLastNameValidator()
  })

  /**
   * Tests if valid first and last names are correctly validated.
   */
  test("returns valid for correct names", async () => {
    const result = await nameValidator.validateFirstAndLastName("Anna", "Svensson")
    expect(result).toEqual({ isValid: true })
  })

  /**
   * Tests if an empty first name returns an error.
   */
  test("returns error for first name too short", async () => {
    const result = await nameValidator.validateFirstAndLastName("", "Svensson")
    expect(result).toEqual({ isValid: false, error: "First name must be between 1 and 50 characters." })
  })

  /**
   * Tests if a last name containing numbers returns an error.
   */
  test("returns error for last name containing numbers", async () => {
    const result = await nameValidator.validateFirstAndLastName("Anna", "Svensson123")
    expect(result).toEqual({ isValid: false, error: "Last name can only contain letters." })
  })

  /**
   * Tests if a first name exceeding the maximum length returns an error.
   */
  test("returns error for names exceeding max length", async () => {
    const result = await nameValidator.validateFirstAndLastName("A".repeat(51), "Svensson")
    expect(result).toEqual({ isValid: false, error: "First name must be between 1 and 50 characters." })
  })
})