// Login and Home page using cookie example 
var express = require('express');
var path = require('path');
const port = 8888
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Process data sent from HTML form using post request 
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// Use this middleware to handle cookies 
var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get("/login", (req, res) => {
  res.render("login")
}
)

app.post("/login", (req, res) => {
  let username = req.body.username
  res.cookie('username', username, { maxAge: 24 * 60 * 60 * 1000 })
  res.redirect("home")
}
)

app.get("/home", (req, res) => {
  if (req.cookies.username)
    res.send(`<h1>Welcome ${req.cookies.username}</h1>`)
  else
    res.redirect("login")
}
)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
