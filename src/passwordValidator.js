export class PasswordValidator {
  validatePassword(password) {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    
    if (passwordRegex.test(password)) {
      return { isValid: true }
    } else {
      return { isValid: false, message: 'Password must be between 6 and 16 characters long, and include at least one letter, one digit, and one special character.' }
    }
  }
}