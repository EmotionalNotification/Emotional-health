var express=require('express');
var morgan=require('morgan');
var path = require('path');
var mongoose=require('mongoose');
var models=require('../database/index.js');
var bodyParser = require('body-parser');

var app=express();
// app.use(express.bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

var port=process.env.PORT || 8000;

app.use(express.static(__dirname+'/../client/docs'))


app.use(morgan('dev'));

app.listen(port,function(){
	console.log('Hanan and sarah listeninig on port '+port);
})


app.post('/sth',function(req,res){ 
	var data=req.body
	var Name=data.Name;
	var Status=data.Status;
	// console.log('hanan',Name,Status)
	var newInput = {
		_id : new mongoose.Types.ObjectId(),
		status:Status,
 		name:Name	
 	}
 	// console.log('hanan',newInput)
 	models.User.create(newInput)
 	res.redirect('/')
 	// res.send('ha')
})

app.get('/data',function(req,res){
	models.User.find({},function(err,items){
     console.log(items);
     res.send(items)
	})
})