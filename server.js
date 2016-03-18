var express   = require('express'),
  bodyParser  = require('body-parser');

var app = express();
var port = process.env.PORT || 3030;

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// include route(s)
require('./mailgunner')(app);

// start server
var server = app.listen(port, function() {
  console.log('Mail API server listening on port ' + server.address().port + ".");
});