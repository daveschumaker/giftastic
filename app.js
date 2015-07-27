// Require http module to get our server setup.
var http = require('http');
var gifs = require('./controller');

// Define the port this server will listen on
var port = 3000;

// Build a request handler to do things with requests.
var requestHandler = function(req, res) {

  // Outputs response to the browser window.
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });    
    res.write('<img src="' + gifs.getRandom() + '"/>');    
  } else if (req.url === "/keyboard_cat") {
    // Depending on the URL the user navigates to, we serve up some special content.
    res.writeHead(200, { 'Content-Type': 'text/html' });    
    res.write('<img src="http://media.giphy.com/media/vFtWp05vBYnMQ/giphy.gif"/>');
  } else {
    // Otherwise, user gets simple message informing them they went to this URL.
    res.writeHead(404);
    res.write('Oh, snap! There is nothing here, sorry.');
  }
  
  // Done with the response.
  res.end();
};

// Create an instance of the server.
var server = http.createServer(requestHandler);

// Start server
server.listen(port, function() {
  console.log('Server running and listening for requests on port: ' + port);
});
