const express = require('express');
const app = express()

// endpoing reonse does require json to be parced. uncomment if needed by future endpoints
// app.use(express.json())

const numCtrl = require('./numeralCtrl')
app.get('/romannumeral', numCtrl.convertNumber)

app.listen(8080, () => console.log('bingpot on port 8080'))