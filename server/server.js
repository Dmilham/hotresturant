// Create a basic Express server.
// Your server at this point should do the BARE MINIMUM. 
//(Effectively, it should just say: "Listening at PORT 3000" when the command node server.js is run.)

// ===========================================================
// ---------------------Dependencies--------------------------
// ===========================================================

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;
var reservations = require('./tables.js')

// Used to interpret data or records sent to a server. 
// To 'understand' the JSONs.
// Copy paste this block of code every time
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));




// ===========================================================
// ---------------------Routes--------------------------------
// ===========================================================

// Displays The Html page containing Table data upon get request
app.get('/tables', function (req, res) {
	res.sendFile(path.join(__dirname, '../html/tables.html'));
});

// Displays The Html page containing reservation data upon get request
app.get('/reservations', function (req, res) {
	res.sendFile(path.join(__dirname, '../html/reservations.html'));
});

// Displays Home page by defualt or when parameters do not apply
app.use('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../html/restaurant.html'));
});


// * Create the logic that handles reservation requests. 
// Your code should work such that POST requests take in JSON objects, 
// checks if there is any space left, then adds the JSON object to either 
// the reservation array or the waitlist array. Your POST route should also 
// respond to requests with a confirmation (true or false) of whether or not 
// the requestor has a reservation (or is on the waiting list).
// * You should be using Postman to do all your testing at this point.
// Create New Characters - takes in JSON input
app.post('/api/new', function (req, res) {
	var newreservation = req.body;
	newreservation.uniqueid = newreservation.uniqueid.replace(/\s+/g, '').toLowerCase();

	console.log(newreservation);

	characters.push(newreservation);

	res.json(newreservation);
});




// LISTENER
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});







