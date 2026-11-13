const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

// GET /api/users?page=1&limit=10
router.get('/', userController.getUsers);

module.exports = router;