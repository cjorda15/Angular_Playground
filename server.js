var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.get('/', function(req, res) {
  res.render('index');
});
app.listen(port, function() {
  console.log('Something beautiful happened on port: ', port);
});
