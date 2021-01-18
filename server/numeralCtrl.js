const { toRomanNumerals } = require('./helperFunctions/helperFunctions')

module.exports = {
  convertNumber: (req, res) => {
    try {
      if (!req.query) {
        return res.sendStatus(404);
      }
      const { query } = req.query;
      if(!parseInt(query)) {
        res.sendStatus(400);
        return;
      }
      let romanNumeral = toRomanNumerals(+query)
      if(!romanNumeral) {
        return res.sendStatus(404);
      }
      res.status(200).send(romanNumeral)
    } catch(error) {
      console.log(error)
    }
  }
}