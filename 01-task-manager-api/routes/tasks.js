const express = require('express');
const router = express.Router();
const { welcomePage, getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/tasks');

router.route('/').get(welcomePage);
router.route('/tasks').get(getAllTasks).post(createTask);
router.route('/tasks/:id').get(getTask).put(updateTask).delete(deleteTask);

module.exports = router;
