// Using cookie-session 

var express = require('express');
const port = 8888
var app = express();

var cookieSession = require('cookie-session')

app.use(cookieSession({
  name: 'session-data',
  keys: ['k1'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.get('/countViews', (req, res) => {
  req.session.count = (req.session.count || 0) + 1
  req.session.lastaccess = new Date().toString()
  res.end(`<h1>You viewed this page for ${req.session.count} times. </h1><h2> Last accessed at ${req.session.lastaccess}</h2>`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

