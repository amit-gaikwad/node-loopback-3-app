'use strict';
var path = require('path');

module.exports = function(app) {
    // Install a "/ping" route that returns "pong"
  app.get('/ping', function(req, res) {
    res.sendFile(path.join(__dirname + '/../static.html'));
  });
};
