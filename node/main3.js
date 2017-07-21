//imports	
	//Import events
	var events = require('events');
	
	
//create objects
	//eventEmitter object
	var eventEmitter = new events.EventEmitter();
	
	
//create functions
	//Event handler for connection
	var connected = function connected(){
		console.log('connection succesful.');
		//Fire the data_received event
		eventEmitter.emit('data_received');
	}

	//event handler for data recieval
	var receiveHandler = function receiveHandler(){
		console.log('data received succesfully.');
	}
	
	
//bind handlers
	//bind 'connection' event with its handler
	eventEmitter.on('connection', connected);
	//Bind the 'data_received' event with its handler
	eventEmitter.on('data_received', receiveHandler);
	

//fire events
	//Fire the connection event (which will fire the data_recieved event)
	eventEmitter.emit('connection');
	
	
//finish program
	console.log("Program Ended.");
	console.log(eventEmitter);