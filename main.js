const express = require('express')
const app = express()
const fs = require('fs')
const port = 8080

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    fs.readFile(__dirname + "/" + 'index.html', (err, data) => {
        res.end(data);
    })
});

app.get('/ironman', (req, res) => {
    fs.readFile(__dirname + "/" + 'routes/ironman.html', (err, data) => {
        res.end(data);
    })
  });

app.get('/wolverine', function (req, res) {
    fs.readFile(__dirname + "/" + 'routes/wolverine.html', (err, data) => {
        res.end(data);
    })
  });

app.listen(port, () => {
    console.log(`Server is running at: http://127.0.0.1:${port}`)
  });