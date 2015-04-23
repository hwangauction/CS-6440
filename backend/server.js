//main server file
var express = require('express');
var app     = express();
//external js files
var pdmp = require('./pdmp');
var fihr = require('./fihr');
var auth = require('./auth');


//port
var port = process.env.PORT || 80;

//test route to make sure its working!
//app.get('/', function(req, res){
//  res.json({ message: 'Health Informatics Api' })
//});


var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


//pdmp requests
app.get('/pdmp', pdmp.random); //get random pdmp data
//patient requests
app.get('/fihr', fihr.proxy);

app.get('/auth', auth.index);



app.use(express.static('public'));

//start the server
app.listen(port);

console.log("Starting Server on Port: " + port);
