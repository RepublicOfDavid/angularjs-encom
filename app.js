var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.send('Welcome');
});

app.listen(3000);
console.log('Running on port 3000...');