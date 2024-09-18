export class DateFormatValidator {
  validateDateFormat(dateFormat){
    const yyyyMmDdRegex = /^\d{4}-\d{2}-\d{2}$/; // För YYYY-MM-DD
    const ddMmYyyyRegex = /^\d{2}\/\d{2}\/\d{4}$/; // För DD/MM/YYYY

    if (yyyyMmDdRegex.test(dateFormat)) {
      return { isValid: true, format: 'YYYY-MM-DD' };
    } else if (ddMmYyyyRegex.test(dateFormat)) {
      return { isValid: true, format: 'DD/MM/YYYY' };
    } else {
      return { isValid: false, message: 'Not a valid date format. Expected formats: YYYY-MM-DD or DD/MM/YYYY.' };
    }
  }
}