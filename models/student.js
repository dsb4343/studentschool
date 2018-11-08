var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StudentSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
	school: { type: Schema.Types.ObjectId, ref: 'School', required: true }, //reference to the associated school
    grade: {type: Number, required: true, min:0, max: 12, default: 0},
	email: {type: String, required: false},
	phone: {type: String, required: false}
  }
);

// Virtual for student's full name
StudentSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for student's URL
StudentSchema
.virtual('url')
.get(function () {
  return '/api/student/' + this._id;
});

//Export model
module.exports = mongoose.model('Student', StudentSchema);