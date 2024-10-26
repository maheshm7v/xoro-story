const express = require('express')
const router = express.Router()
const createTaskController = require("../controllers/task.controllers.js")
const Task = require("../models/Task.model.js")


// get, post, put/patch, delete
router.get('/all-task',createTaskController.getTask)
router.post('/add-task',createTaskController.createTask)
router.put('/update/:id',createTaskController.updateTask)
router.delete('/delete/:id',createTaskController.deleteTask)
module.exports = router