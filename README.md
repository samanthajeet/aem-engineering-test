# Roman Numeral Converter

This is an express endpoint that converts a number between 1 - 255 to a Roman numera. (ex. 47 => XLVII)

##### Convert numbers up to 4,999
To be able to convert numbers up to 4,999 update check in `numeralCtrl.js` and `decimalValue` and `romanNumeral` arrays in `helperFunctions.js`

## Installation

- `git clone` this repository
- `cd` into folder and run `npm install` to install packages


## Run
Server will run on `http://localhost:8080`

```bash
$ nodemon
```

## Usage
Integer can be any whole postive integer from 1 - 255
```bash
http://localhost:8080/romannumeral?query={integer}
```

##### Example GET call
http://localhost:8080/romannumeral?query=47

##### Example response
 ```bash
 {
    "data" : "XLVII"
 }
 ```

## Folder Structor
```bash
├── coverage                                   #coverage reports for jest/test coverage
├── server
│   ├── helperFunctions
│   │   ├── helperfunctions.js                 #toRomanNumerals() main functionality of endpoint
│   │   ├── helperfunctions.test.js
│   ├── index.js                               #Express server
│   ├── index.test.js
│   ├── controllers                            
│   │   ├── numeralCtrl.js                     #Main controller file
├── .gitignore
├── package.json
├── README.md
```

## Test
To run unit tests run
```bash
$ npm run test
```

To check coverage of tests
```bash
$ jest --coverage
```
##### Unit Testing
Current unit tests test output of `/romannumeral` endpoint and `toRomanNumerals` function. Controlling/checking input values has been done with value checks in `/romannumeral` functionality. 

## Resources
- Roman numerals chart (https://www.rapidtables.com/math/symbols/roman_numerals.html)