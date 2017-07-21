/* a node.js hello world program */
//imports
var http = require("http");
var fs = require("fs");

//read in a file .. convert to string
var inputFile = fs.readFileSync('C:\\example.txt')
var content = inputFile.toString();

//start web server
http.createServer(function(request, response){
	//send the http header
	//http status: 200 : OK
	//content type: text/plain
	response.writeHead(200, {'Content-Type':'text/plain'});
	//send the response body as "hello world"
	response.end(content);
}).listen(8081);

//console message print
console.log("Server running at http://127.0.0.1/8080 ie: localhost");

console.log(content);

//end message
console.log('FIN');