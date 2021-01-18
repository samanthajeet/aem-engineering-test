exports.toRomanNumerals = (num) => {
  /*
  Use following arrays to be able to convert numbers up to 4,999 into Roman numerals
  const decimalValue = [5000,1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumeral = ["V","M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  */
  // decimalValue array is the decimnal equivalent of romanNumeral array
  const decimalValue = [100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumeral = ["C","XC","L","XL","X","IX","V","IV","I"];
  let romanized = "";
    for (let index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }
  return romanized;
}