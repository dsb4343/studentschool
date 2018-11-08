var express = require('express');
var router = express.Router();

var school_controller = require('../controllers/schoolController');
var student_controller = require('../controllers/studentController');

// If at root of api route then send to home page
router.get('/', function(req, res, next) {
  res.redirect('/');
});

/* student routes */
router.get('/student', student_controller.student_get);
router.get('/student/update', student_controller.student_update);
router.get('/student/remove', student_controller.student_remove);
router.get('/student/:id', student_controller.student_id);


/* school routes */
router.get('/school', school_controller.school_get);
router.get('/school/update', school_controller.school_update);
router.get('/school/remove', school_controller.school_remove);
router.get('/school/:id', school_controller.school_id);

module.exports = router;
