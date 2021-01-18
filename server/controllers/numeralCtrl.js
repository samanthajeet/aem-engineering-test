const { toRomanNumerals } = require('../helperFunctions/helperFunctions')

module.exports = {
  convertNumber: (req, res) => {
    try {
      if (!req.query.query) { // check if req.query.query exists
        return res.sendStatus(404);
      }

      const { query } = req.query;

      if(!parseInt(query)) { // check if req.query.query is an interger
        return res.sendStatus(400);
      }

      // Edit of following check to convert numbers up to 4,999 into Roman numerals.
      if(+query > 255){
         return res.status(200).send('Only intergers up to 255 will be accepted')
      }

      let romanNumeral = toRomanNumerals(+query) // convert req.query.qeury from string to interger

      if(!romanNumeral) { // check toRomanNumerals response
        return res.sendStatus(404);
      }

      res.status(200).send(romanNumeral)

    } catch(error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
}