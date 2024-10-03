```mermaid
classDiagram
    class Validator {
        +validate()
    }

    Validator <|-- EmailValidator
    Validator <|-- PhoneNumberValidator
    Validator <|-- PasswordValidator
    Validator <|-- UserNameValidator
    Validator <|-- FirstAndLastNameValidator
    Validator <|-- DateFormatValidator
    Validator <|-- AgeValidator
    Validator <|-- PostalCodeValidator
    Validator <|-- StreetValidator
    Validator <|-- CityValidator
    Validator <|-- AddressValidator

    class EmailValidator {
        +validateEmail(email)
    }

    class PhoneNumberValidator {
        +validatePhoneNumber(phoneNumber)
    }

    class PasswordValidator {
        +validatePassword(password)
    }

    class UserNameValidator {
        +validateUserName(userName)
    }

    class FirstAndLastNameValidator {
        +validateFirstAndLastName(firstName, lastName)
    }

    class DateFormatValidator {
        +validateDateFormat(dateFormat)
    }

    class AgeValidator {
        +validateAge(dateFormat)
    }
    AgeValidator --> DateFormatValidator : extends

    class PostalCodeValidator {
        +validatePostalCode(postalCode)
    }

    class StreetValidator {
        +validateStreet(street)
    }

    class CityValidator {
        +validateCity(city)
    }

    class AddressValidator {
        - PostalCodeValidator postalCodeValidator
        - StreetValidator streetValidator
        - CityValidator cityValidator
        +validateAddress(address)
    }
    AddressValidator o-- PostalCodeValidator : uses
    AddressValidator o-- StreetValidator : uses
    AddressValidator o-- CityValidator : uses
