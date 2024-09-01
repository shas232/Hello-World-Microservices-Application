const express = require('express');
const axios = require('axios');

const app = express();
const port = 1729;

app.get('/hello-world', async (req, res) => {
  console.log('Received request for /hello-world');
  try {
    const response = await axios.get('http://localhost:3000/world');

    const message = `Hello ${response.data}`;

    res.send(message);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});
app.use('/', (req, res) => {
  res.send('Welcome');
});

app.listen(port, () => {
  console.log(`Hello service is running on http://localhost:${port}`);
});
