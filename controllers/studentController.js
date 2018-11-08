var Student = require('../models/student');

exports.student_get = function(req, res) {
    let filters = req.query

	Student.find(filters)
	.populate('school')
	.then(students => {
		res.json({
			confirmation: 'success',
			data: students
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
}

exports.student_update = function(req, res) {
    const query = req.query // require: id, key=value
	const studentId = query.id
	delete query['id']

	Student.findByIdAndUpdate(studentId, query, {new:true})
	.then(student => {
		res.json({
			confirmation: 'success',
			data: student
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
}

exports.student_remove = function(req, res) {
    const query = req.query

	Student.findByIdAndRemove(query.id)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: 'Student '+query.id+' successfully removed.'
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
}

exports.student_id = function(req, res) {
	const id = req.params.id

	Student.findById(id)
	.then(student => {
		res.json({
			confirmation: 'success',
			data: student
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: 'Student ' + id + ' not found.'
		})
	})
}


exports.student_post = function(req, res) {
    Student.create(req.body)
	.then(student => {
		res.json({
			confirmation: 'success',
			data: student
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
}