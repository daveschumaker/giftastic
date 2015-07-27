var gifs = require('./gif-controller');

// Build a request handler to do things with requests.
module.exports = {
  handler: function(req, res) {
    // Outputs response to the browser window.
    if (req.url === '/giftastic') {
      res.writeHead(200, { 'Content-Type': 'text/html' });    
      res.write('<img src="' + gifs.getRandom() + '"/>');    
    } else if (req.url === "/giftastic/keyboard_cat") {
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
  }
}
