var express = require('express');
var path = require('path');
var app = express();
var port = 8888 
 
app.use(express.static('public'))

app.get('/', (req, res) => {
   res.end("<h1>Static Files Demo <h1>")
})
 

app.listen(port, () => {
  console.log(`Express Application listening on port ${port}`)
})  
