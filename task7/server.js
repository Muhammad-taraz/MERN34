const express = require("express");
const mongoose  = require("mongoose");
const app = express();

const PORT = 5000;
app.use(express.json());

 connectDataBase().catch((e)=>console.log(e))
async function connectDataBase(){
    await mongoose.connect("mongodb+srv://taraz:taraz12@todos.g2clqpo.mongodb.net/")
}


const router = express.Router();
app.use(router);


const Taskschema = new mongoose.Schema({
    text : {type:String},
    status : {type:Boolean}
})
const TaskModel = mongoose.model("task",Taskschema);

router.get("/todo", async (req,res) => {
    const todoList = await TaskModel.find();
    res.status(200).json({todoList})
});

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


router.all("/", (req, res) => {
    res.json({message: "we are live" }
    )
    
})
app.listen(PORT,()=> {
    console.log("server started");
})