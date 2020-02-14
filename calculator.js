const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/bmi-calculator', function(req, res){
  res.sendFile(__dirname + '/bmi.html');
});

app.get('/love-calculator', function(req, res){
  res.sendFile(__dirname + '/love.html');
});

app.post('/', function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = Number(num1 + num1);
  res.send('The sum of the numbers is: ' + result);
});

app.post('/bmi-calculator', function(req, res){
  var h = Number(req.body.h);
  var w = Number(req.body.w);
  var result = w/(h*h);
  res.send('BMI is: ' + result);
});

app.post('/love-calculator', function(req, res){
  var result = Math.floor(Math.random()*100 + 10);
  res.send('Your Love percentage is: ' + result);
});

app.listen(3000, function() {
  console.log('Server is running at port 3000');
});
