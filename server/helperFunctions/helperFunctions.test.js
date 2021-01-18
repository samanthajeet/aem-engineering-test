const { toRomanNumerals } = require('./helperFunctions');
const number = Math.floor((Math.random() * 255) + 1);

describe('toRomanNumerals', () => {
  test('125 coverts to CXXV', async () => {
    expect(toRomanNumerals(125)).toBe('CXXV')
  });

  test('should be a function', () => {
    expect(typeof toRomanNumerals).toBe('function')
  })

  test('should return string', () => {
    const result = toRomanNumerals(number)
    expect( typeof result).toBe('string')
  })

  test('should not return a number', () => {
    const result = toRomanNumerals(number)
    expect( typeof result).not.toBe('number')
  })
});