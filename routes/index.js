var express = require('express');
var router = express.Router();

var school_controller = require('../controllers/schoolController');
var student_controller = require('../controllers/studentController');
var School = require('../models/school')

/* GET home page. */
router.get('/', function(req, res, next) {
  School.find({},'name')
    .exec(function (err, schools) {
      if (err) { return next(err); }
      // Successful, so render.
  res.render('index', { title: 'Student and School', school_list:schools });
  });
});

/* post routes */
router.post('/school', school_controller.school_post)
router.post('/student', student_controller.student_post)

module.exports = router;
