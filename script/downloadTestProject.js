var file_url = 'https://github.com/engalar/mendix-testproject-800/archive/refs/heads/main.zip';

var AdmZip = require('adm-zip');
var request = require('request');

request.get({ url: file_url, encoding: null }, (err, res, body) => {
  if (err) {
    console.error(err);
  }
  var zip = new AdmZip(body);
  zip.extractAllTo("./tests/testProject/", true);
});