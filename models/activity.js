// setup Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var findOrCreate = require('mongoose-findorcreate')

var User = require('./user.js');

// Activity schema
var activitySchema = new Schema({
	_id: String,
	title: String,
	description: String,
	price: String,
	tags: [String],
	address: String,
//	creator: String,//{type: ObjectId, ref: 'users'},
	upvotes: String,
	comments: [{user: String, comment: String}],
	usersLiked: [String]
});

// ensure schemas use virtual IDs
activitySchema.set('toJSON', {
    virtuals: true
});

// add findorCreate
activitySchema.plugin(findOrCreate);

// create activity
var Activity = mongoose.model('activities', activitySchema);

module.exports = Activity;
