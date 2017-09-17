/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var funcPromise = require('./promisification.js');
var funcCallback = require('./callbackReview.js');
var funcConstructor = require('./promiseConstructor.js')
var fs = require('fs');
var Promise = require('bluebird');



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return new Promise((resolve, reject) => {
    return funcConstructor.pluckFirstLineFromFileAsync(readFilePath)
    .then((username) => {
      return funcPromise.getGitHubProfileAsync(username) 
    }).then((profile) => {
      fs.writeFile(writeFilePath, JSON.stringify(profile), (err) => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
  })
}




// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
