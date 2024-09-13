export class EmailValidator {
  constructor() {}

  validate(email){
    if (!email) {
      return { isValid: false, error: "Email is required." }
    }

    // Basic email format check: ensures the email has a local part, an '@' symbol, and a domain part
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // Check for forbidden characters: forbids spaces, special characters like !, #, $, %, ^, &, *, (, ), +, =, [, ], {, }, ;, :, ', ", /, \, |, ~, `
    const forbiddenCharsRegex = /[^\w@.-]/

    // Check for valid domain format: ensures the domain part has at least two alphabetic characters after the last dot
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

    return { isValid: true, error: null }
  }
}