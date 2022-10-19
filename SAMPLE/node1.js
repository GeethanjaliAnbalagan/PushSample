var http = require('http');
var dt = require('upper-case');
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type' :'text/html'});
res.write(dt.upperCase("MindTree Guys"));
res.end();
}).listen(8090);