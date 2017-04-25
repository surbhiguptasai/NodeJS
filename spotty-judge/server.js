'use strict';

// Request and response object drills
// ==================================

const express = require('express');
const app = express();

// your code here. 
let basestr="There's a {adjective1} new {name} in {place} and everyone's talking. Stunningly ${adjective2} and {adverb} {adjective3}, all the cool kids know it. However, {name} has a secret - {name}'s a vile vampire.Will it end with a bite, or with a stake through the {noun}?" ;
app.get('/', (req, res) => {
  // get `foo` and `bar` from request object
  let adj1= req.query.adjective1;
  let name1= req.query.name;
  let place1= req.query.place;
  let adj2= req.query.adjective2;
  let adj3= req.query.adjective3;
  let noun= req.query.noun;
  let adverb=req.query.adverb;
 
  basestr=basestr.replace("{adjective1}",adj1);
  basestr=basestr.replace(/{name}/g,name1);
  basestr=basestr.replace("{place}",place1);
  basestr=basestr.replace("{adjective2}",adj2);
  basestr=basestr.replace("{adjective3}",adj3);
  basestr=basestr.replace("{noun}",noun);
  basestr=basestr.replace("{adverb}",adverb);
  res.json({basestr});
});


// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
