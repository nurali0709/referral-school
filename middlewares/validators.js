const { body, param } = require('express-validator');

const validateReferrer = [
  body('name')
    .isString()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters long.')
    .trim()
    .escape(),
];

const validateStudentRegistration = [
  body('name')
    .isString()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters long.')
    .trim()
    .escape(),
  body('phone')
    .isString()
    .matches(/^[\d+][\d()-\s]+$/)
    .withMessage('Phone number is invalid.')
    .trim()
    .escape(),
  body('email')
    .isEmail()
    .withMessage('Must be a valid email.')
    .normalizeEmail(),
  body('ref')
    .isString()
    .notEmpty()
    .withMessage('Referral code is required.')
    .trim()
    .escape(),
];

const validatePayment = [
  body('studentId')
    .isInt({ gt: 0 })
    .withMessage('Student ID must be a positive integer.')
];

module.exports = {
  validateReferrer,
  validateStudentRegistration,
  validatePayment,
};
