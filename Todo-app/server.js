const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5500;
app.use(express.json());

connectDatabase().then(e=>console.log("connected ss")).catch((e)=>console.log(e))
async function connectDatabase(){
    await mongoose.connect("mongodb+srv://taraz:taraz12@todos.g2clqpo.mongodb.net/test?retryWrites=true&w=majority")
}

const router = express.Router();
app.use(router)

const Taskschema = new mongoose.Schema({
    text : {type:String},
    status : {type:Boolean}
})
const TaskModel = mongoose.model("task",Taskschema);

router.get("/todo", async (req,res) => {
    const todoList = await TaskModel.find();
    res.status(200).json({todoList})
});

router.patch("/todo", async(req,res)=> {
    const { id,status } =req.body;
    const foundTodo = await TaskModel.findById(id); //get todo item by id
    if(foundTodo){
        foundTodo.status = status;
        foundTodo.save();
        res.json(foundTodo)
    } else
    res.status(404).json({
        message : "Not Found"
    }); 
    // const todo = await TaskModel.find{},{_v:0} //fetches all the records
})

router.post("/create", async(req,res)=>{
    const {text,status} =req.body;
    const newTodo = new TaskModel({
        text,status
    });
    await newTodo.save();
    res.status(200).json({text,status})
});

router.put("/update/:todoId", async(req,res)=>{
    const {todoId} = req.params
    const {text,status} =req.body;
    const todo = await TaskModel.findByIdAndUpdate(todoId,{text,status});
    res.status(200).json({message:"successfully updated todo",todo})
});

router.delete("/delete/:todoId", async(req,res)=>{
const {todoId} = req.params
const {text,status} =req.body;
const todo = await TaskModel.findByIdAndDelete(todoId);
res.status(200).json({message:"successfully deleted todo",todo})
});


router.all("/", (req,res) => {
    res.json({message : " Succesfully we are live 🥳🥳🚀🚀🎥"})
})
app.listen(PORT,()=> {
    console.log("server started");
})