var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

//Initialize routes
app.use('/api', require('./routes/api'));


app.get('/',function(req, res){
	console.log('get request');
	res.end();
});



app.listen(process.env.port || 4000, function(){
	console.log('now listening for request');
});
