//imports
var fs = require('fs');
var data = '';
//create vars
var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output2.txt');


//reader functions
var dataHandle = function(chunk){
	data += chunk;
	//console.log(data);
}

var endHandle = function(){
	console.log(data);
}

var errorHandle = function(err){
	console.log(err.stack);
}

//writer functions
var finishHandle = function(){
	console.log('write completed');
}

var errorHandle = function(err){
	console.log(err.stack);
}


//binding handles
//bind writer handles
writerStream.on('finish', finishHandle);
writerStream.on('error', errorHandle);

//bind reader handles
//readerStream.on('data', dataHandle);
readerStream.on('end', endHandle);
readerStream.on('error', errorHandle);

if(!__filename){
	readerStream.pipe(writerStream);
}else{
	console.log('file already exists');
}
