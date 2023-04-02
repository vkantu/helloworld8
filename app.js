'use strict';

const express = require('express')
const app = express();

const port = 8080;
const host = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Congratulations on your Node Hello World Application built on Docker! Github is using to pull and push the commit easitly at a time');
})

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
