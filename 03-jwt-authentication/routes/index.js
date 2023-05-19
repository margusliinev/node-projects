const express = require('express');
const router = express.Router();

const { login, dashboard } = require('../controllers/index.js');

const authMiddleware = require('../middleware/auth.js');

router.route('/api/v1/dashboard').get(authMiddleware, dashboard);
router.route('/api/v1/login').post(login);

module.exports = router;
