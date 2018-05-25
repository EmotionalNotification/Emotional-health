var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var mongoDB= 'mongodb://127.0.0.1/Notification';
mongoose.connect( process.env.DBSERVER ||mongoDB, { useMongoClient: true });


//---- here the shema that we should write -----

var userSchema = new Schema({
	_id: Schema.Types.ObjectId,
	status: Number,
	name: String
	
});


var db=mongoose.connection;
db.on('error',console.error.bind(console,' mongoDB connection error '));
db.once('open', function(){
	console.log('mongoDB connection open')
});

var User = mongoose.model('User',userSchema);

module.exports={
	User:User
	
};