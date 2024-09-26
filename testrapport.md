# Testrapport för valideringsmodul

Den här rapporten beskriver hur testningen av valideringsmodulerna för postnummer, telefonnummer, lösenord, e-post och datumformat har genomförts. Testerna har skrivits som enhetstester med hjälp av testramverket Jest och körts automatiskt genom scriptet `"test": "jest"`. För varje modul har olika typer av indata validerats för att säkerställa att de fungerar som förväntat.

## Testmetod

Varje valideringsmodul testades genom enhetstester där olika typer av giltig och ogiltig indata matades in i respektive valideringsfunktion. Testresultaten jämfördes sedan med förväntade resultat för att verifiera att modulerna fungerar korrekt.

För att köra testerna användes följande kommando:
```bash
npm run test
```

Nedan finns en sammanfattning av varje testfall, vad som testats, hur det testats och testresultatet.

## Testresultat

| **Vad som testats**                 | **Hur det testats**                                                                    | **Testresultat**                                |
|-------------------------------------|----------------------------------------------------------------------------------------|-------------------------------------------------|
| `validatePostalCode('12345')`       | Skickar in ett giltigt amerikanskt postnummer                                           | Test godkänt: { isValid: true, country: 'USA' } |
| `validatePostalCode('12345-6789')`  | Skickar in ett giltigt amerikanskt postnummer med bindestreck                           | Test godkänt: { isValid: true, country: 'USA' } |
| `validatePostalCode('123 45')`      | Skickar in ett giltigt svenskt postnummer med mellanslag                                | Test godkänt: { isValid: true, country: 'Sweden' } |
| `validatePostalCode('1234')`        | Skickar in ett ogiltigt postnummer                                                     | Test misslyckat: { isValid: false, message: 'Not a valid postal code.' } |
| `validatePostalCode('')`            | Skickar in ett tomt postnummer                                                         | Test misslyckat: { isValid: false, message: 'Not a valid postal code.' } |
| `validateUserName('valid_username')`  | Skickar in ett giltigt användarnamn                                                     | Test godkänt: { isValid: true }                 |
| `validateUserName('invalid@username')`| Skickar in ett ogiltigt användarnamn med ogiltiga tecken                                | Test misslyckat: { isValid: false, message: 'Username must be 3 to 16 characters long and can only contain letters, numbers, and underscores.' } |
| `validateUserName('ab')`              | Skickar in ett för kort användarnamn                                                    | Test misslyckat: { isValid: false, message: 'Username must be 3 to 16 characters long and can only contain letters, numbers, and underscores.' } |
| `validateUserName('thisusernameiswaytoolong')` | Skickar in ett för långt användarnamn                                    | Test misslyckat: { isValid: false, message: 'Username must be 3 to 16 characters long and can only contain letters, numbers, and underscores.' } |
| `validateUserName('')`                | Skickar in ett tomt användarnamn                                                        | Test misslyckat: { isValid: false, error: 'Username is required.' } |
| `validatePhoneNumber('0701234567')`   | Skickar in ett giltigt svenskt telefonnummer med 10 siffror                             | Test godkänt: { isValid: true, format: 'Swedish' } |
| `validatePhoneNumber('+46701234567')` | Skickar in ett giltigt svenskt telefonnummer med landskod                               | Test godkänt: { isValid: true, format: 'Swedish' } |
| `validatePhoneNumber('1234567890')`   | Skickar in ett giltigt amerikanskt telefonnummer utan landskod                          | Test godkänt: { isValid: true, format: 'US' }   |
| `validatePhoneNumber('890')`          | Skickar in ett ogiltigt telefonnummer                                                   | Test misslyckat: { isValid: false, message: 'Not a valid phone number.' } |
| `validatePhoneNumber('')`             | Skickar in ett tomt telefonnummer                                                       | Test misslyckat: { isValid: false, message: 'Phone number is required.' } |
| `validatePassword('Abc123!')`       | Skickar in ett giltigt lösenord                                                         | Test godkänt: { isValid: true } |
| `validatePassword('Ab1!')`          | Skickar in ett för kort lösenord                                                        | Test misslyckat: { isValid: false, message: 'Password must be between 6 and 16 characters long, and include at least one letter, one digit, and one special character.' } |
| `validatePassword('Abcdef!')`       | Skickar in ett lösenord utan siffra                                                     | Test misslyckat: { isValid: false, message: 'Password must be between 6 and 16 characters long, and include at least one letter, one digit, and one special character.' } |
| `validatePassword('Abc12345')`      | Skickar in ett lösenord utan specialtecken                                              | Test misslyckat: { isValid: false, message: 'Password must be between 6 and 16 characters long, and include at least one letter, one digit, and one special character.' } |
| `validatePassword('Abc12345!@#TooLongPassword')` | Skickar in ett för långt lösenord                                              | Test misslyckat: { isValid: false, message: 'Password must be between 6 and 16 characters long, and include at least one letter, one digit, and one special character.' } |
| `validateEmail('example@gmail.com')`| Skickar in en korrekt e-postadress                                                      | Test godkänt: { isValid: true, error: null } |
| `validateEmail('examplegmail.com')` | Skickar in en e-postadress utan "@" symbol                                              | Test misslyckat: { isValid: false, error: 'Email is not valid.' } |
| `validateEmail('example!@gmail.com')`| Skickar in en e-postadress med förbjudna tecken                                         | Test misslyckat: { isValid: false, error: 'Email contains forbidden characters.' } |
| `validateEmail('example@gmail.c')`  | Skickar in en e-postadress med ogiltig domän                                            | Test misslyckat: { isValid: false, error: 'Email domain is not valid.' } |
| `validateEmail('')`                 | Skickar in en tom e-postadress                                                          | Test misslyckat: { isValid: false, error: 'Email is required.' } |
| `validateDateFormat('2024-09-16')`  | Skickar in ett datum i formatet YYYY-MM-DD                                              | Test godkänt: { isValid: true, format: 'YYYY-MM-DD' } |
| `validateDateFormat('16/09/2024')`  | Skickar in ett datum i formatet DD/MM/YYYY                                              | Test godkänt: { isValid: true, format: 'DD/MM/YYYY' } |
| `validateDateFormat('2024/09/16')`  | Skickar in ett ogiltigt datumformat                                                     | Test misslyckat: { isValid: false, message: 'Not a valid date format. Expected formats: YYYY-MM-DD or DD/MM/YYYY.' } |
| `validateDateFormat('')`            | Skickar in ett tomt datum                                                               | Test misslyckat: { isValid: false, message: 'Not a valid date format. Expected formats: YYYY-MM-DD or DD/MM/YYYY.' } |
| `validateDateFormat('invalid-date')`| Skickar in ett helt ogiltigt datum                                                      | Test misslyckat: { isValid: false, message: 'Not a valid date format. Expected formats: YYYY-MM-DD or DD/MM/YYYY.' } |
| `validateAddress({...})`                          | Skickar in en giltig adress                                                            | Test godkänt: { isValid: true }                       |
| `validateAddress({...})`                          | Skickar in en adress med ogiltigt gatunamn                                             | Test misslyckat: { isValid: false, error: "Street name can only contain letters, numbers, and spaces." } |
| `validateAddress({...})`                          | Skickar in en adress med ogiltigt postnummer                                           | Test misslyckat: { isValid: false, error: "Not a valid postal code." } |
| `validateAddress({...})`                          | Skickar in en adress med ogiltig stadnamn                                              | Test misslyckat: { isValid: false, error: "City name can only contain letters and spaces." } |
| `validateAge('2000-10-01')`                       | Skickar in en giltig ålder (mellan 3 och 120 år)                                      | Test godkänt: { isValid: true, message: "Age is valid." } |
| `validateAge('2022-10-01')`                       | Skickar in en ålder som är mindre än 3 år                                              | Test misslyckat: { isValid: false, message: "You must be at least 3 years old to create an account." } |
| `validateAge('1900-09-01')`                       | Skickar in en ålder som är större än 120 år                                            | Test misslyckat: { isValid: false, message: "You cannot be older than 120 years to create an account." } |
| `validateAge('01-10-2000')`                       | Skickar in en ogiltig ålderformat                                                      | Test misslyckat: { isValid: false, message: "Age format is not valid. Expected format: YYYY-MM-DD." } |
| `validateFirstAndLastName('John Doe')`           | Skickar in ett giltigt namn (för- och efternamn)                                       | Test godkänt: { isValid: true }                        |
| `validateFirstAndLastName('John')`                | Skickar in endast ett namn                                                              | Test misslyckat: { isValid: false, message: "First and last name is required." } |
| `validateFirstAndLastName('John 123')`            | Skickar in ett ogiltigt namn med siffror                                                | Test misslyckat: { isValid: false, message: "Names can only contain letters and spaces." } |
| `validateStreet('Main St')`                       | Skickar in en giltig gatunamn                                                          | Test godkänt: { isValid: true }                        |
| `validateStreet('Main St 123')`                   | Skickar in ett giltigt gatunamn med nummer                                             | Test godkänt: { isValid: true }                        |
| `validateStreet('')`                              | Skickar in ett tomt gatunamn                                                            | Test misslyckat: { isValid: false, message: "Street name is required." } |
| `validateCity('Stockholm')`                       | Skickar in ett giltigt stadsnamn                                                    | Test godkänt: { isValid: true }                        |
| `validateCity('')`                               | Skickar in ett tomt stadsnamn                                                       | Test misslyckat: { isValid: false, error: "City name is required." } |
| `validateCity('Stockholm123')`                   | Skickar in ett stadsnamn med siffror                                               | Test misslyckat: { isValid: false, error: "City name can only contain letters and spaces." } |
| `validateCity('Stockholm!')`                     | Skickar in ett stadsnamn med specialtecken                                          | Test misslyckat: { isValid: false, error: "City name can only contain letters and spaces." } |
| `validateCity('New York')`                        | Skickar in ett stadsnamn med mellanslag                                             | Test godkänt: { isValid: true }                        |

## Slutsats
Alla enhetstester genomfördes med Jest och samtliga tester gav förväntade resultat. Tester inkluderar både giltiga och ogiltiga indata för att säkerställa att valideringsmodulerna fungerar som de ska och hanterar felaktiga inmatningar korrekt.
