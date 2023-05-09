const db = require('../db');

const getAllProducts = async (req, res) => {
    try {
        const { name, price, company, rating, sort, fields, page } = req.query;
        let query = 'select ';
        let values = [];
        if (fields) {
            query += ` ${'id,' + fields} from products`;
        } else {
            query += ' * from products';
        }
        if (name) {
            query += ` WHERE 1=1 AND name LIKE $${values.length + 1}`;
            values.push('%' + req.query.name + '%');
        }
        if (price) {
            query += ` WHERE 1=1 AND price > $${values.length + 1}`;
            values.push(req.query.price);
        }
        if (company) {
            query += ` WHERE 1=1 AND company = $${values.length + 1}`;
            values.push(req.query.company);
        }
        if (rating) {
            query += ` WHERE 1=1 AND rating = $${values.length + 1}`;
            values.push(req.query.rating);
        }
        if (sort) {
            if (sort === 'name') {
                query += ' ORDER BY name ASC';
            }
            if (sort === '-name') {
                query += ' ORDER BY name DESC';
            }
            if (sort === 'price') {
                query += ' ORDER BY price ASC';
            }
            if (sort === '-price') {
                query += ' ORDER BY price DESC';
            }
            if (sort === 'rating') {
                query += ' ORDER BY rating ASC';
            }
            if (sort === '-rating') {
                query += ' ORDER BY rating DESC';
            }
        }
        if (page) {
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 2;
            const skip = (page - 1) * limit;
            query += ` LIMIT ${limit} OFFSET ${skip}`;
        }
        const products = await db.query(query, values);
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const createProduct = async (req, res) => {
    try {
        const product = await db.query('insert into products (name, price, company, rating) values ($1, $2, $3, $4) returning *', [req.body.name, req.body.price, req.body.company, req.body.rating]);
        res.status(201).json({ product });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const getSingleProduct = async (req, res) => {
    try {
        const product = await db.query('select * from products where id = $1', [req.params.id]);
        res.status(200).json({ product });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const updateProduct = async (req, res) => {
    try {
        const product = await db.query('update products set name = $1, price = $2, company = $3, rating = $4 where id = $5 returning *', [
            req.body.name,
            req.body.price,
            req.body.company,
            req.body.rating,
            req.params.id,
        ]);
        res.status(200).json({ product });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await db.query('delete from products where id = $1', [req.params.id]);
        res.status(204).json({ product });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

module.exports = { getAllProducts, createProduct, getSingleProduct, updateProduct, deleteProduct };
