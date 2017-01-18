// Exported routes to Node
// They respect a last declared hiearchy, so the ones defined at
// the bottom may override the ones at the top.
module.exports = function(app) {
	app.get('/', function(req, res) {
		// Displaying an already made view
		res.sendfile('src/public/views/index.html');
	});
};
