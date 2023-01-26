const express = require('express');
const router = express.Router();
const { welcomePage, getAllProducts, createProduct } = require('../controllers/products');

router.route('/').get(welcomePage);
router.route('/api/v1/products').get(getAllProducts).post(createProduct);

module.exports = router;
