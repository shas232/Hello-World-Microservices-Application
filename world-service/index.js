const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/health', (req, res) => {
  res.send('ok');
});

app.use('/world', (req, res) => {
  console.log('Received request from hello service');
  res.send('World');
});

app.use('/', (req, res) => {
  res.send('Welcome');
});

app.listen(PORT, (error) => { 
  if (!error) 
      console.log("World service is Successfully Running on port " + PORT); 
  else 
      console.log("Error occurred, server can't start", error); 
});
