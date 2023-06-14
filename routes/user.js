const express = require('express');

const userController = require('../controller/user');

const router = express.Router();

//router for POST operation and Sending Mail
router.post('/post', userController.postDetails);

//router for get operation
router.get('/get', userController.getDetails);

module.exports = router;