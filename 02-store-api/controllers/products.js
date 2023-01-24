const Product = require('../models/product');

function welcomePage(req, res) {
    res.status(200).send('<h1>Store API</h1>');
}

async function getAllProductsStatic(req, res) {
    const products = await Product.find({});
    res.status(200).json({ products });
}

async function getAllProducts(req, res) {
    res.status(200).json({ msg: 'Products route' });
}

module.exports = { welcomePage, getAllProductsStatic, getAllProducts };
