var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

app.get("/", function(req, res) {
    res.sendfile('index.html')
 });

app.listen(process.env.PORT || 8000, function () {
  console.log('Example app listening on port', process.env.PORT || '8000');
});
