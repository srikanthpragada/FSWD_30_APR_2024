var express = require('express');
var path = require('path');
var app = express();
var port = 8000

let courses =
 [ 
  {title : 'React', duration : 12, fee : 2500},
  {title : 'Python', duration : 26, fee : 5000},
  {title : 'Spring', duration : 20, fee : 4500}
]

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render("greet")    // display views/greet.ejs
})

app.get('/now', (req, res) => {
  var curdatetime = new Date().toString()
  res.render("now", { now : curdatetime })     
})

app.get('/course', (req, res) => {
  res.render("course", 
    {
      course:
      {
        title: 'React',
        duration: 12,
        fee: 2500,
        tax: 2500 * 18 / 100
      }
    })     
})
 
app.get('/listcourses', (req, res) => {
  res.render("list_courses",  {courses : courses })     
})

app.get('/coursestable', (req, res) => {
  res.render("courses_table",  {courses : courses })     
})


app.listen(port, () => {
  console.log(`Express Application listening on port ${port}`)
})  
