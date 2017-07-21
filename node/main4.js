//imports
	//import filesystem
	var fs = require('fs');
	
	
//create basic var
	//create empty var for data to be read
	var data = '';
	//create readerstream
	var readerStream = fs.createReadStream('input.txt');
	//set the encoding
	readerStream.setEncoding('UTF8');
	
	
//functions
	//create functions for handles
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

	
//binding handles
	//bind handles
	readerStream.on('data', dataHandle);
	readerStream.on('end', endHandle);
	readerStream.on('error', errorHandle);
