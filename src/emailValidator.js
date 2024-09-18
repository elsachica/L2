export class EmailValidator {
  validateEmail(email){
    if (!email) {
      return { isValid: false, error: "Email is required." }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const forbiddenCharsRegex = /[^\w@.-]/

    const domainRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/

    if (forbiddenCharsRegex.test(email)) {
      return { isValid: false, error: "Email contains forbidden characters."}
    }

    if (!emailRegex.test(email)) {
      return { isValid: false, error: "Email is not valid." }
    }

    if (!domainRegex.test(email)) {
      return { isValid: false, error: "Email domain is not valid."}
    }

    return { isValid: true }
  }
}