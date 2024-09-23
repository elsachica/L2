
# Validation Module

## Description

This project is a JavaScript module that contains various validators for checking the format of email addresses, postal codes, phone numbers, passwords, user names, and date formats. The module can be used to validate user data in other applications.

## Installation

To download and install the project:

1. Clone the repository:
    ```bash
    git clone https://github.com/elsachica/L2.git
    ```

2. Navigate to the project folder and install the necessary dependencies:
    ```bash
    cd L2
    npm install
    ```

## Usage

Once the module is installed, you can import and use the validation classes. Example:

```javascript
import { EmailValidator, PostalCodeValidator, PasswordValidator } from './path-to-your-module/index.js';

const emailValidator = new EmailValidator();
const passwordValidator = new PasswordValidator();

console.log(emailValidator.validate('example@gmail.com'));  // { isValid: true, error: null }
console.log(passwordValidator.validate('P@ssw0rd'));        // { isValid: true }
```



##

 Modules

The project includes five main classes, each for a specific type of validation:

- **EmailValidator**: Validates email addresses based on basic format, checks for forbidden characters, and ensures valid domains.
- **PostalCodeValidator**: Handles validation for both Swedish and US postal code formats.
- **PhoneNumberValidator**: Validates both Swedish and US phone numbers.
- **PasswordValidator**: Checks that passwords meet length, character, number, and special character requirements.
- **DateFormatValidator**: Validates two date formats: YYYY-MM-DD and DD/MM/YYYY.
- **UserNameValidator**: Validates usernames to ensure they are 3 to 16 characters long and contain only letters, numbers, and underscores.

## Test Cases

The project uses Jest to automate testing. Each validator has specific test cases to ensure it works correctly with both valid and invalid inputs.

Examples of test cases:

- **EmailValidator**: Tests that an email is correctly formatted and doesn't contain forbidden characters.
- **PostalCodeValidator**: Verifies that both US and Swedish postal codes are validated correctly.
- **PhoneNumberValidator**: Tests phone numbers for both Swedish and US formats.
- **PasswordValidator**: Ensures that passwords meet the required length and character rules.
- **DateFormatValidator**: Tests if the date formats YYYY-MM-DD and DD/MM/YYYY are valid.
- **UserNameValidator**: Ensures that usernames are 3 to 16 characters long and contain only letters, numbers, and underscores.


To run the tests, use the command:
```bash
npm test
```

## Dependencies

The project uses the following dependencies:

- **Jest**: A framework for unit testing JavaScript.
- **ESLint**: A tool to analyze and fix code style issues.
- **Prettier**: A tool for automatically formatting code according to standards.
- **Babel**: Used to compile modern JavaScript into older versions for broader compatibility.

Install all dependencies by running `npm install` as mentioned above.

## Scripts

- `npm start`: Starts the project and runs [`src/index.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Felsagaswikstrom%2FDocuments%2FWebbprogram%2F%C3%A5rskurs%202%2F1dv610%20\(daniel\)%2FL2%2Fsrc%2Findex.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22203dc7c7-6f5c-4114-bf66-933836a5c6be%22%5D "/Users/elsagaswikstrom/Documents/Webbprogram/årskurs 2/1dv610 (daniel)/L2/src/index.js").
- `npm test`: Runs all test cases using Jest.
- `npm run lint`: Analyzes the code using ESLint to find code style issues.
- `npm run lint:fix`: Automatically fixes any code style issues found by ESLint.
