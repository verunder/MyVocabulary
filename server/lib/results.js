var fs = require('fs');
var csv  = require('csv-parser');
var results = [];
function init() {
    fs.createReadStream('data/data.csv')
    .pipe(csv({separator: "|"}))
    .on('data', (rec) => {
        results.push(rec);
     })

    .on('end', () => {
    });
}
function next() {
  var idx = Math.floor(Math.random() * results.length);
  return JSON.stringify(results[idx]);
}
var exports = module.exports = {next, init};