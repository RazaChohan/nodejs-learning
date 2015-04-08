var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/I/want/title/', function(request, response) {
    var query = require('url').parse(request.url,true).query;
    if(query.address == undefined)
    {
    	response.send('No Address Given!!');
    }
    else
    {
    	var addresses = query.address;
    	response.writeHead(200, {"Content-Type": "text/html"});
    	response.write("<html>");
  		response.write("<head></head>");
  		response.write("<body>");
  		response.write("<h1> Following are the titles of given websites: </h1>");
  		for (key in addresses) {
		response.write("<ul>");
  		response.write(addresses[key]);	
    	response.write("</ul>");
  		console.log(addresses[key]);
    	}
  		response.write("</body>");
  		response.write("</html>");
  		response.end();
    }
    
});

app.get('*', function(req, res){
  res.send('404', 404);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})