const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/users-list', userController.list);
router.post('/login', userController.login);


module.exports = router;