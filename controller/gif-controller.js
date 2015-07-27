// Methods to interact with our various GIFs.
var gifs = require('../model');

module.exports = {
  getRandom: function () {
    return gifs[Math.floor(Math.random()*gifs.length)];
  }
}