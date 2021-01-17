const axios = require('axios');
const baseURI = 'http://localhost:8080/romannumeral';
const number = Math.floor((Math.random() * 255) + 1);

describe('GET /romannumeral', () => {
    test('response returns correct string', async () => {
        const response = await axios.get(`${baseURI}/?query=167`);
        const romanNumeral = response.data;

        expect(romanNumeral).toMatch('CLXVII');
    });
    test('response does not return undefined', async () => {
        const response = await axios.get(`${baseURI}/?query=${number}`);
        const romanNumeral = response.data;

        expect(romanNumeral).not.toBe(undefined);
    });
    test('should return 404 if query is not an integer', async () => {
        const response = await axios.get(`${baseURI}/query=bingpot`);
        expect(response.status).toBe(404);
        expect(response.message).toMatch('Query must be an interger');
    });
    test('should return 400and message if no query sent', async () => {
        const response = await axios.get(`${baseURI}`);
        expect(response.status).toBe(404);
        expect(response.message).toMatch('Not Found');
    });
});
