const express = require('express');
const axios = require('axios');

const app = express();
const port = 1729;


app.use('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(`Hello service is running on http://localhost:${port}`);
});
