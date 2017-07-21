var fs = require('fs');

var fileName = 'example.txt'

fs.readFile(fileName, function(err, data){
	if(err){
		console.error(err);
	}else{
		console.log(data.toString());
	}
});

console.log('FIN');