var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SchoolSchema = new Schema(
  {
    name: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true}
  }
);

// Virtual for book's URL
SchoolSchema
.virtual('url')
.get(function () {
  return '/api/school/' + this._id;
});

//Export model
module.exports = mongoose.model('School', SchoolSchema);