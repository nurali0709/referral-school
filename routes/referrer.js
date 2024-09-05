const express = require('express');
const { generateInvite, getReferrerStats } = require('../controllers/referrer');
const { validateReferrer } = require('../middlewares/validators');
const errorHandler = require('../middlewares/errorHandler');

const router = express.Router();

router.post('/generate-invite', validateReferrer, errorHandler, generateInvite);
router.get('/stats/:referrerId', getReferrerStats);

module.exports = router;
