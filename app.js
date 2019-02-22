const express = require('express');
const bodyParser = require('body-parser');
var app = express();
const urlParser = bodyParser.urlencoded({extended : false});
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));

app.post('/api', function(req, res){
	var num = req.body.number;
	console.log(num);
	res.json({
		txt : 'text'
	});
});

app.get('/api', function(req, res){
	var text = "hello world";
	res.json({
		txt : text
	});
	console.log(text);
});

app.listen(3000, function(err){
	if(err) throw console.log(err);
	console.log('запуск');
});