/**
 * @jest-environment node
 */

const axios = require('axios');
const baseURI = 'http://localhost:8080/romannumeral';
const number = Math.floor((Math.random() * 255) + 1);

describe('GET /romannumeral', () => {
    test('response returns correct string', async () => {
        const response = await axios.get(`${baseURI}/?query=167`);
        const romanNumeral = response.data;

        expect(response.status).toBe(200)
        expect(romanNumeral).toMatch('CLXVII');
    });
    test('response does not return undefined', async () => {
        const response = await axios.get(`${baseURI}/?query=${number}`);
        const romanNumeral = response.data;

        expect(response.status).toBe(200)
        expect(romanNumeral).not.toBe(undefined);
    });
    test('sshould throw an error with status if query is not an integer', async () => {
      try {
        await axios.get(`${baseURI}/query=bingpot`);
      } catch(err){
        expect(err.response.status).toBe(404);
      }
    });
    test('should throw an error with status 404 if no query sent', async () => {
      try {
        await axios.get(`${baseURI}/query=bingpot`);
      } catch(err){
        expect(err.response.status).toBe(404);
      }
    });
});
