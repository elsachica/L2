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
| `validatePhoneNumber('0701234567')` | Skickar in ett giltigt svenskt telefonnummer med 10 siffror                             | Test godkänt: { isValid: true, format: 'Swedish' } |
| `validatePhoneNumber('+46701234567')`| Skickar in ett giltigt svenskt telefonnummer med landskod                               | Test godkänt: { isValid: true, format: 'Swedish' } |
| `validatePhoneNumber('0763967890')` | Skickar in ett giltigt svenskt telefonnummer med 10 siffror och en ledande nolla        | Test godkänt: { isValid: true, format: 'Swedish' } |
| `validatePhoneNumber('+1 1234567890')` | Skickar in ett giltigt amerikanskt telefonnummer med landskod                          | Test godkänt: { isValid: true, format: 'US' } |
| `validatePhoneNumber('1234567890')` | Skickar in ett giltigt amerikanskt telefonnummer utan landskod                          | Test godkänt: { isValid: true, format: 'US' } |
| `validatePhoneNumber('890')`        | Skickar in ett ogiltigt telefonnummer                                                   | Test misslyckat: { isValid: false, message: 'Not a valid phone number' } |
| `validatePhoneNumber('')`           | Skickar in ett tomt telefonnummer                                                       | Test misslyckat: { isValid: false, message: 'Not a valid phone number' } |
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

## Slutsats
Alla enhetstester genomfördes med Jest och samtliga tester gav förväntade resultat. Tester inkluderar både giltiga och ogiltiga indata för att säkerställa att valideringsmodulerna fungerar som de ska och hanterar felaktiga inmatningar korrekt.
