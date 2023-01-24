const express = require('express');
const router = express.Router();
const { welcomePage, getAllProductsStatic, getAllProducts } = require('../controllers/products');

router.route('/').get(welcomePage);
router.route('/api/v1/products').get(getAllProducts);
router.route('/api/v1/products/static').get(getAllProductsStatic);

module.exports = router;
