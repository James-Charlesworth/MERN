var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());

var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(express.static('public'));

app.get('/index.html', function(req, res){
	res.sendFile(__dirname + '/' + 'index.html');
	console.log('Cookies: ', req.cookies)
});

app.get('/process_get', function(req, res){
	//prepare JSON output
	response = {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

app.post('/process_post', urlencodedParser, function(req, res){
	//prepare JSON output
	response = {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

var server = app.listen(9081, function(){
	
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("Example app listening at http://%s:%s", host, port);
});