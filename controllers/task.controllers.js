
const Task = require("../models/Task.model.js")


const createTask = async(req, res) => {
    try{
        const { title, description } = req.body;
        const task = new Task({
            title,
            description
        })
        await task.save()
        res.status(201).json(task)
    }catch(error){
        console.log("there is an error:", error)
        res.status(500).json({message: 'Server error'})
    }
}

const getTask = async(req, res)=>{
    try{
        const task = await Task.find()
        res.status(200).json(task)
    }catch(error){
        console.log("there is an error:", error)
        res.status(500).json({message: 'Server error'})
    }
}

const updateTask = async(req, res)=>{
    try{
        const {title, description} = req.body
        const myTask = await Task.findByIdAndUpdate(
            req.params.id,
            {title, description},{new : true}
        )
        if(!myTask){
            return res.status(404).json({message: "task is not found"})
        }
        res.status(200).json(myTask)
    }catch(error){
        console.log("there is an error:", error)
        res.status(500).json({message: 'Server error'})
    }
}

const deleteTask = async(req, res)=>{
    try{
        const deleteTask = await Task.findByIdAndDelete(req.params.id)
        res.status(204).send()
    }catch(error){
        console.log("there is an error:", error)
        res.status(500).json({message: 'Server error'})
    }
}
module.exports={createTask, getTask, updateTask, deleteTask}