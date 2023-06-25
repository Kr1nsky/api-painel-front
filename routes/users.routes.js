const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Rota para login de usuário
router.post('/login', userController.login);

module.exports = router;