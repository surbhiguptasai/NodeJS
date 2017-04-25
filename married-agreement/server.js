'use strict';


const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // get `foo` and `bar` from request object
  let randomNumber=Math.random().toString();
    randomNumber=randomNumber.substring(2,randomNumber.length);
  let value=randomNumber%2==0?'a':'b';
  console.log(value);
  
 res.cookie('a-b-test', value);
  console.log(req.cookies['a-b-test']);
  //res.sendFile('../views/index.html'); 
  res.sendFile('views/index.html' , { root : __dirname});
});

// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080 }`));
