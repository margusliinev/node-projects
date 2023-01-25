const Product = require('../models/product');

function welcomePage(req, res) {
    res.status(200).send('<h1>Store API</h1>');
}

async function getAllProductsStatic(req, res) {
    const products = await Product.find({});
    res.status(200).json({ products });
}

async function getAllProducts(req, res) {
    console.log(req.query);
    const { featured, company, name } = req.query;
    const queryObject = {};
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }
    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = name;
    }
    const products = await Product.find(queryObject);
    res.status(200).json({ products, nbHits: products.length });
}

module.exports = { welcomePage, getAllProductsStatic, getAllProducts };
