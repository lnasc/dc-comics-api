var jsonServer = require('json-server');
var db = require('./db.json');
var fs = require('fs');

var server = jsonServer.create();

// important to have /tmp here otherwise now.sh won't write to file
// https://stackoverflow.com/questions/43389724/lambda-function-error-erofs-read-only-file-system-open-tmp-test-zip-proc
var router = jsonServer.router('./db.json');
var middlewares = jsonServer.defaults();
var port = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);
server.listen(port, function() {
  console.log('JSON Server is running on http://localhost:' + port);
});
