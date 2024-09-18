export class DateFormatValidator {
  validateDateFormat(dateFormat){
    if(!dateFormat) {
      return { isValid: false, error: "Date is required." }
    }
    const yyyyMmDdRegex = /^\d{4}-\d{2}-\d{2}$/
    const ddMmYyyyRegex = /^\d{2}\/\d{2}\/\d{4}$/

    if (yyyyMmDdRegex.test(dateFormat)) {
      return { isValid: true, format: 'YYYY-MM-DD' }
    } else if (ddMmYyyyRegex.test(dateFormat)) {
      return { isValid: true, format: 'DD/MM/YYYY' }
    } else {
      return { isValid: false, message: 'Not a valid date format. Expected formats: YYYY-MM-DD or DD/MM/YYYY.' }
    }
  }
}