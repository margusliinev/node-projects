const express = require('express');
const router = express.Router();
const { welcomePage, getAllProducts, createProduct, getSingleProduct, updateProduct, deleteProduct } = require('../controllers/products');

router.route('/').get(welcomePage);
router.route('/api/v1/products').get(getAllProducts).post(createProduct);
router.route('/api/v1/products/:id').get(getSingleProduct).patch(updateProduct).delete(deleteProduct);

module.exports = router;
