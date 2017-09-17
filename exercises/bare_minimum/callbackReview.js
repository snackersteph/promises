/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath) {
  // TODO
  fs.readFile(filePath, (err, data) => {
    if (err) {
      arguments[1](err);
    } else {
      arguments[1](err, data.toString().split('\n')[0]);
    }
  })
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url) {
  // TODO
  request(url, (err, response, body) => {
    if (err) {
      arguments[1](err);
    } else {
      arguments[1](err, response.statusCode);
    }
  })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
