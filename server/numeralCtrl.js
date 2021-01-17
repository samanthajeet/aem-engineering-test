const { toRomanNumerals } = require('./helperFunctions/helperFunctions')

module.exports = {
  convertNumber: (req, res) => {
    try {
      if (!req.query) {
        return res.status(404).json({ message: 'Not Found' });
      }
      const { query } = req.query;
      if(!parseInt(query)) {
        return res.status(400).json({ message: 'Query must be an interger' })
      }
      let romanNumeral = toRomanNumerals(+query)
      res.status(200).send(romanNumeral)
    } catch(error) {
      console.log(error)
    }
  }
}