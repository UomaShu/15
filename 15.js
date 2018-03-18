var event = require("events").EventEmitter;
var http = require("http");
var logger = new event();

logger.on("login", function () {
    var date = new Date();	
    console.log('Залогинился: '+ date);
});

logger.on("trunk", function () {
	var date1 = new Date();		
	console.log('Труньк труньк: '+date1);
});

logger.on("logout", function () {
	var date2 = new Date();	
	console.log("Ушел: "+date2);  
});

var srvr = http.createServer(function(req, res){

	if (req.url === "/"){
    	
	   logger.emit("login");	
		
	}else if (req.url === "/page2"){
		
           logger.emit("trunk");
	   	
		
	}else if(req.url === "/out"){
		
          logger.emit("logout");		
	                           
	}

}).listen(3000);