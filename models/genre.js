var mongoose = require('mongoose');

var Schema = mongoose.schema;

var BookInstanceSchema = new Schema(
{
	book: {type: String, required: true},
	status: {type: String, required: true, enum: ['Avaible', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
	due_back: {type: Date, default: Date.now}
});

BookInstanceschema
.virtual('url')
.get(function () {
	return '/catalog/bookinstance/' + this._td;
});

module.exports = mongoose.model('BookInstance', BookInstanceSchema);