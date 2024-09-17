# Reflektioner från kapitel 2 och 3

## Kapitel 2

| Namn                    | Typ         | Regel från Clean Code              | Reflektion och tillämpning av regler                                                                                     |
|-------------------------|-------------|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| PostalCodeValidator     | Klassnamn   | Use Intention-Revealing Names      | Klassnamnet är tydligt och beskriver vad klassen gör. Det är ett bra namn enligt regeln om intention-revealing names, vilket gör koden lättare att förstå och använda. |
| validatePostalCode()    | Metodnamn   | Method Names                       | Metodnamnet använder ett verb, vilket är bra, men det kan förbättras genom att vara mer specifikt, t.ex. validateUSAndSwePostalCode() för att tydligt indikera vad som valideras. |
| PhoneNumberValidator    | Klassnamn   | Use Intention-Revealing Names      | Klassen är namngiven så att dess syfte är klart och tydligt. Det är ett bra exempel på intention-revealing names och följer regeln för att använda beskrivande och förståeliga namn. |
| validatePhoneNumber()   | Metodnamn   | Method Names                       | Metodnamnet är verbbaserat och beskriver funktionens syfte. Det är dock något generellt, så ett mer specifikt namn som validateSweAndUsPhoneNumber() skulle kunna vara mer beskrivande. |
| PasswordValidator       | Klassnamn   | Use Intention-Revealing Names      | Klassnamnet är klart och tydligt. Det beskriver exakt vad klassen gör, vilket är en bra tillämpning av regeln för intention-revealing names. |
| validatePassword()      | Metodnamn   | Method Names                       | Metodnamnet är bra och tydligt men kan bli mer specifikt. Att inkludera något som validateUserPassword() skulle kunna ge ytterligare kontext. |
| EmailValidator          | Klassnamn   | Use Intention-Revealing Names      | Klassen är namngiven på ett sätt som tydligt anger vad den validerar. Det är ett bra exempel på att använda beskrivande och intention-revealing names. |
| validateEmail()         | Metodnamn   | Method Names                       | Metodnamnet är tydligt och använder ett verb, men det är något generellt. Ett mer detaljerat namn som validateEmailFormat() skulle kunna ge bättre kontext. |
| DateFormatValidator     | Klassnamn   | Use Intention-Revealing Names      | Klassnamnet är tydligt och beskriver vad klassen gör, vilket följer regeln om intention-revealing names och gör det enkelt att förstå klassens syfte. |
| validateDateFormat()    | Metodnamn   | Method Names                       | Metodnamnet är bra men kan vara mer specifikt, till exempel validateDateFormatPattern() för att ange att det kontrollerar formatet snarare än bara validerar generellt. |

### Reflektion och Regler

1. **Intention-Revealing Names:** Jag tycker att jag har gjort ett bra jobb med att namnge klasser och metoder på ett sätt som tydligt beskriver deras syfte. Klassnamnen som PostalCodeValidator, PhoneNumberValidator, PasswordValidator, EmailValidator och DateFormatValidator är bra exempel på intention-revealing names.
2. **Use Problem Domain Names:** Namnen på mina klasser är tydligt relaterade till problemområdet, vilket gör koden lätt att förstå för någon med relevant domänkunskap. Dock kan metodnamnen vara mer specifika för att ge ytterligare kontext.
3. **Method Names:** Metodnamnen är generellt bra men kan förbättras genom att vara mer specifika och kontextuella. Till exempel, istället för validatePostalCode(), skulle ett namn som validateUSAndSwePostalCode() kunna ge en tydligare bild av vad som valideras.
4. **Avoid Disinformation:** Inga av mina namn verkar vara vilseledande eller ge fel information. De är direkta och relevanta för det de representerar.
5. **Use Pronounceable Names:** Alla mina namn är lätta att uttala och förstå, vilket underlättar för kommunikation och samarbete.

## Kapitel 3

| Metodnamn           | Fil                   | Antal rader (utan whitespace) | Reflektioner                                                                                                                                                             |
|---------------------|-----------------------|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| validateEmail       | emailValidator.js     | 21                           | **Do One Thing:** Metoden validerar e-postformatet och hanterar flera olika villkor. Varje steg kontrollerar en specifik aspekt av e-postvalideringen. Metoden skulle kunna förenklas genom att dela upp den i mindre funktioner som hanterar olika valideringssteg.<br>**Function Arguments:** Tar ett argument, vilket är bra.<br>**Common Monadic Form:** Det är en fråga som kontrollerar e-postens giltighet.<br>**Avoid Output Arguments:** Metoden returnerar resultat direkt utan att ändra externa tillstånd. |
| validatePostalCode  | postalCodeValidator.js | 14                           | **Do One Thing:** Metoden kontrollerar postnummer mot två format. Varje format valideras separat, men det skulle kunna bli tydligare om det delades upp i funktioner för varje format.<br>**Function Arguments:** Tar ett argument.<br>**Common Monadic Form:** Det är en fråga som bedömer om postnumret matchar kända format.<br>**Avoid Output Arguments:** Metoden returnerar ett resultatobjekt utan att ändra tillstånd. |
| validatePhoneNumber | phoneNumberValidator.js | 14                           | **Do One Thing:** Validerar telefonnummer mot två format. Varje format kontrolleras tydligt.<br>**Function Arguments:** Använder ett argument.<br>**Common Monadic Form:** Det är en fråga som validerar telefonnumret.<br>**Avoid Output Arguments:** Metoden returnerar resultat direkt. |
| validatePassword    | passwordValidator.js  | 11                           | **Do One Thing:** Kontrollerar om lösenordet uppfyller vissa krav. Metoden hanterar en enda valideringsuppgift.<br>**Function Arguments:** Tar ett argument.<br>**Common Monadic Form:** Det är en fråga som validerar lösenordet.<br>**Avoid Output Arguments:** Returnerar resultat utan att ändra externa tillstånd. |
| validateDateFormat  | dateFormatValidator.js | 14                           | **Do One Thing:** Validerar datumformat. Även om det kontrollerar flera format är varje kontroll distinkt.<br>**Function Arguments:** Tar ett argument.<br>**Common Monadic Form:** Det är en fråga som validerar datumformatet.<br>**Avoid Output Arguments:** Returnerar resultat utan att modifiera externa tillstånd. |

### Reflektion

Utifrån kapitel 3 har jag noterat att mina funktioner i stort sett följer principerna för små funktioner, tydliga namn och minimala argument. Dock finns det några områden som kan förbättras:

1. **Function Length:** Även om de flesta metoder är relativt korta, hanterar vissa, som validateEmail, flera valideringsregler i en och samma funktion. Det skulle vara bra att bryta ner dessa till mindre, mer fokuserade funktioner för att öka läsbarheten och underhållbarheten. Till exempel, separata funktioner för förbjudna tecken, grundläggande formatkontroll och domänvalidering skulle kunna förenkla validateEmail.
2. **Function Names:** De nuvarande metodnamnen är beskrivande men skulle kunna dra nytta av att vara ännu mer explicita vad gäller argumentreferenser där det är tillämpligt. Till exempel skulle validateEmail kunna omdöpas till validateEmailAddress(email) för att tydliggöra vad som valideras.
3. **Avoid Side Effects:** Funktionerna följer principen att inte ändra externa tillstånd. De returnerar resultat baserat på indata utan att modifiera globala variabler eller klassnivåegenskaper.
4. **Command Query Separation:** Metoderna följer i stort denna princip genom att fokusera på att returnera valideringsresultat utan att utföra handlingar som ändrar tillstånd.
5. **DRY Principen:** Metoderna undviker duplicering genom att hantera specifika typer av validering, men kan bli mer DRY genom att abstrahera gemensam valideringslogik till återanvändbara funktioner.
