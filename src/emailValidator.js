export class EmailValidator {
  constructor() {}

  validate(email){
    if (!email) {
      return { isValid: false, error: "Email is required" }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const forbiddenCharsRegex = /[^\w@.-]/

    if (forbiddenCharsRegex.test(email)) {
      return { isValid: false, error: "Email contains forbidden characters "}
    }

    if (!emailRegex.test(email)) {
      return { isValid: false, error: "Email is not valid." }
    }

    return { isValid: true, error: null }
  }
}