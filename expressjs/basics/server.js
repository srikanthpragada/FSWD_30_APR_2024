var express = require('express');
var app = express();
var port = 8888 

app.get('/', (req, res) => {
  res.send('<h1>Hello Express Web Freamwork!</h1>')
})

app.get('/now', (req, res) => {
  let now = new Date().toString()
  res.send(`<h1>${now}</h1>`)
})

app.listen(port, () => {
  console.log(`Express Application listening on port ${port}`)
})  
