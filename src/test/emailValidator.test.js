import { EmailValidator } from "../emailValidator"

describe("EmailValidator Tests", () => {
  let emailValidator

  beforeAll(() => {
    emailValidator = new EmailValidator()
  })

  test("returns valid for a correct email address", async () => {
    const result = await emailValidator.validateEmail("example@gmail.com")
    expect(result).toEqual({ isValid: true, error: null })
  })

  test("returns an error for an empty email", async () => {
    const result = await emailValidator.validateEmail("")
    expect(result).toEqual({ isValid: false, error: "Email is required." })
  })

  test("returns an error for an email without \"@\" symbol", async () => {
    const result = await emailValidator.validateEmail("examplegmail.com")
    expect(result).toEqual({ isValid: false, error: "Email is not valid."})
  })

  test("returns an error for an email with forbidden characters", async () => {
    const result = await emailValidator.validateEmail("example!@gmail.com")
    expect(result).toEqual({ isValid: false, error: "Email contains forbidden characters."})
  })

  test("returns an error for an email with an invalid domain", async () => {
    const result = await emailValidator.validateEmail("example@gmail.c")
    expect(result).toEqual({ isValid: false, error: "Email domain is not valid."})
  })
})