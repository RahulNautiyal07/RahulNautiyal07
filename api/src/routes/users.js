const express = require('express');
const router = express.Router();
const { joinUser, getHelp } = require('../controllers/user');


router.post('/join-us',joinUser)
router.post('/get-help',getHelp)
module.exports = router;