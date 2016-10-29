// Create a basic Express server.
// Your server at this point should do the BARE MINIMUM. 
//(Effectively, it should just say: "Listening at PORT 3000" when the command node server.js is run.)

// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

// Used to interpret data or records sent to a server. 
// To 'understand' the JSONs.
// Copy paste this block of code every time
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
