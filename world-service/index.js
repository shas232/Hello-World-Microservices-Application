const express = require('express');
const app = express();

const PORT = 3000;


app.use('/', (req, res) => {
  res.send('World');
});

app.listen(PORT, (error) => { 
  if (!error) 
      console.log("World service is Successfully Running on port " + PORT); 
  else 
      console.log("Error occurred, server can't start", error); 
});
