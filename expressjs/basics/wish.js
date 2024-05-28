var express = require('express');
var app = express();
var port = 8000

app.get('/wish', (req, res) => {
  console.log(req.query)
  let name = req.query.name ?? 'Guest'
  res.send(`<h1>Hello ${name.toUpperCase()}</h1>`)
})

app.get('/greet/:name/:case', (req, res) => {
  console.log(req.params)
  let name = req.params.name  // route parameter 
  if (req.params.case === 'u')
    name = name.toUpperCase()
  else
    name = name.toLowerCase()

  res.send(`<h1>Hello ${name}</h1>`)
})


app.listen(port, () => {
  console.log(`Express Application listening on port ${port}`)
})  
