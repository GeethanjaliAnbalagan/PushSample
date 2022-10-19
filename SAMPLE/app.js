var express = require('express');
var app = express();

app.get('/', function(req, res){
   //Create an error and pass it to the next function
   var err = new Error("Something went wrong");
   next(err);
});
app.use(function(err, req, res, next) {
   res.status(500);
   res.send("Oops, something went wrong.")
});
app.listen(3000);