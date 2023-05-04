const db = require('../db');

function welcomePage(req, res) {
    res.send('<h1>Task Manager API</h1>');
}

async function getAllTasks(req, res) {
    try {
        const tasks = await db.query('select * from tasks');
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

async function createTask(req, res) {
    try {
        const task = await db.query('insert into tasks (name) values ($1) returning *', [req.body.name]);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

async function getTask(req, res) {
    try {
        const task = await db.query('select * from tasks where id = $1', [req.params.id]);
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${req.params.id}` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

async function updateTask(req, res) {
    try {
        const task = await db.query('update tasks set name = $1 where id = $2 returning *', [req.body.name, req.params.id]);
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${req.params.id}` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

async function deleteTask(req, res) {
    try {
        const task = await db.query('delete from tasks where id = $1', [req.params.id]);
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${req.params.id}` });
        }
        res.status(204).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

module.exports = { welcomePage, getAllTasks, createTask, getTask, updateTask, deleteTask };
