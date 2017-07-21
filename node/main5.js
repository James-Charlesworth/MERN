//imports
	//import filesystem
	var fs = require('fs');
	
	
//create basic var
	//create empty var for data to be read
	var data = 'Simply easy learning';
	//create readerstream
	var writerStream = fs.createWriteStream('output.txt');
	//set the encoding/write to the stream
	writerStream.write(data, 'UTF8');
	//mark end of file
	writerStream.end();
	
	
//functions
	//create functions for handles
	var finishHandle = function(){
		console.log('write completed');
	}

	var errorHandle = function(err){
		console.log(err.stack);
	}


//binding handles
	//bind handles
	writerStream.on('finish', finishHandle);
	writerStream.on('error', errorHandle);
