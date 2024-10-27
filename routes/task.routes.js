const express = require('express')
const router = express.Router()
const createTaskController = require("../controllers/task.controllers.js")
const Task = require("../models/Task.model.js")


// get, post, put/patch, delete
router.get('/',createTaskController.getTask)
router.post('/',createTaskController.createTask)
router.put('/:id',createTaskController.updateTask)
router.delete('/:id',createTaskController.deleteTask)
module.exports = router