// Require http module to get our server setup.
var http = require('http');
var request = require('./controller/request-handler')

// Define the port this server will listen on
var port = 3000;

// Create an instance of the server.
var server = http.createServer(request.handler);

// Start server
server.listen(port, function() {
  console.log('Server running and listening for requests on port: ' + port);
});
