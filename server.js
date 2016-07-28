'use strict';
var express = require('express'),
    routes = require(process.cwd()+'/app/routes/index.js');

var app = express();
var PORT = process.env.PORT || 8080;

app.use('/public',express.static(process.cwd()+'/public'));

app.set('view engine','ejs');

routes(app);

app.listen(PORT,function(){
  console.log("listening to"+PORT);
})