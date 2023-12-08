const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

app.listen(port, function () {
  console.log(`Server is listening on port ${port}`);
});

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath);
});

//body parser in data
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/quotes', (req, res) => {
    res.send(req.body)
    console.log('Hello from POST /quotes!');
  });
  
  
