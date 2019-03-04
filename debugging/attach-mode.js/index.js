const http = require('http')

http.createServer(function (req, res) {
  res.write('ok');
  res.end();
}).listen(3000);