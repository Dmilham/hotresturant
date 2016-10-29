
var name = $("#name").val().trim();
var phone = $("#phone").val().trim();
var email = $("#email").val().trim();
var uniqueid = $("#id").val().trim();

$("#tables").on("click", function() {
	app.get('/api/tables', function (req, res) {
		res.json(tables);
	})
})

$("#reservations").on("click", function() {
	app.get('/api/reservations', function (req, res) {
		res.json(tables);
	})
})

