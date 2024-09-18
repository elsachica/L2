import { DateFormatValidator } from "../dateFormatValidator"

describe("DateFormatValidator Tests", () => {
  let dateFormatValidator

  beforeAll(() => {
    dateFormatValidator = new DateFormatValidator()
  })

  test("validates a correct date format YYYY-MM-DD", async () => {
    const result = await dateFormatValidator.validateDateFormat("2024-09-16")
    expect(result).toEqual({ isValid: true, format: "YYYY-MM-DD" })
  })

  test("validates a correct date format DD/MM/YYYY", async () => {
    const result = await dateFormatValidator.validateDateFormat("16/09/2024")
    expect(result).toEqual({ isValid: true, format: "DD/MM/YYYY" })
  })

  test("returns an error for an invalid date format", async () => {
    const result = await dateFormatValidator.validateDateFormat("2024/09/16")
    expect(result).toEqual({ isValid: false, message: "Not a valid date format. Expected formats: YYYY-MM-DD or DD/MM/YYYY." })
  })

  test("returns an error for an empty date string", async () => {
    const result = await dateFormatValidator.validateDateFormat("")
    expect(result).toEqual({ isValid: false, message: "Not a valid date format. Expected formats: YYYY-MM-DD or DD/MM/YYYY." })
  })

  test("returns an error for a completely invalid date", async () => {
    const result = await dateFormatValidator.validateDateFormat("invalid-date")
    expect(result).toEqual({ isValid: false, message: "Not a valid date format. Expected formats: YYYY-MM-DD or DD/MM/YYYY." })
  })
})
