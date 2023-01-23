const Task = require('../models/task');

async function getAllTasks(req, res) {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

async function createTask(req, res) {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

async function getTask(req, res) {
    try {
        const task = await Task.findOne({ _id: req.params.id });
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
        const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });
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
        const task = await Task.findOneAndDelete({ _id: req.params.id });
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${req.params.id}` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
