const express = require('express');
const { registerStudent, processPayment } = require('../controllers/student');
const { validateStudentRegistration, validatePayment } = require('../middlewares/validators');
const errorHandler = require('../middlewares/errorHandler');

const router = express.Router();

router.post('/register', validateStudentRegistration, errorHandler, registerStudent);
router.post('/payment', validatePayment, errorHandler, processPayment);

module.exports = router;
