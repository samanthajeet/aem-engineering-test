const express = require('express');
const app = express();

// endpoint response does require json to be parced. uncomment if needed by future endpoints
// app.use(express.json())


// endpoint(s)
const numCtrl = require('./controllers/numeralCtrl')
app.get('/romannumeral', numCtrl.convertNumber)

app.listen(8080, () => console.log('bingpot on port 8080'))