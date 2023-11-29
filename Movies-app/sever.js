const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5092;
app.use(express.json());

connectDatabase().then(e => console.log("connected ssucessfully")).catch((e) => console.log(e))
async function connectDatabase() {
    await mongoose.connect("mongodb+srv://taraz:taraz12@todos.g2clqpo.mongodb.net/test?retryWrites=true&w=majority").then(()=>{
        console.log("db is connected");
    });
}
const router = express.Router();
app.use(router)

const Personschema = new mongoose.Schema({
    id: { type: Number },
    name: {
        type: String, required: [true, "Enter your name"],
        minLength: [3, "Name is not allowed"],
        maxLength: [12, "Name is too long"]
    },
    age: {
        type: Number,min: [3, "Person under three are not allowed"]
    },
    city: { type: String }
})

const PersonModel = mongoose.model("person", Personschema);

router.get("/person", async (req, res) => {
    const PersonList = await PersonModel.find();
    res.status(200).json({ PersonList })
});

router.patch("/person/:id", async (req, res) => {
    const { id } = req.params; //etxract
    const { age,city } = req.body;
    const todo = await PersonModel.findById(id); //find todo by Id  retrun whole obj return
    movie.age = age; //now chnages any thing
    movie.city = city;
    await movie.save();
    res.status(200).json({ movie });
})

// router.post("/create/many", async (req, res) => {
//     const { people } = req.body;
//     const newPeople(or peopleCreated) = await PersonModel.insertMany(people);
//        res.json(peopleCreated);
//     });

// router.post("/create/many", async (req, res) => {
    //     const { movies } = req.body;
    //     const movieCreated) = await MovieModel.insertMany(movies);
    //        res.json(peopleCreated);
    //     });

// router.delete("/delete/many", async (req, res) => {
//     const { personId } = req.params
//     const { name,age,city } = req.body;
//     const person = await PersonModel.findByIdAndDelete(personId);
//     res.status(200).json({ message: "successfully deleted person data", person })
// });

// const verifyPerson = async(req,res) => {
// const { userid } = req.body
// await PersonModel.findById(id);}

// router.post("/movie/recommend", async (req,res) =>{     // (or can write line66 )
//     const { userid } = req.body;
    // try{
     //   const personFound = verifyPerson(userid);
     //console.log(personFound, "found");
     // if (personFound){
        // const movies = await MovieModel.find({
        //     minAge : {$lte: personfound.age}, // (or minAge : {$lte:20}),
        //     maxAge : {$gte: personfound.age}  // (or maxAge : {$lte:20}))(or can also put only one)(or also on basis of movie.length{$lte or $gte})
        // })
        // res.json ({ message:"we will recommend you soon"});}
        // else{
        //     res.status(404).json({
        //         message: "Person not found"
        //     });
        // }
        // catch (error) {
        //     res.status(404).json({
        //         message: "Person not found"
        //     })
        // }
     
      // }
// })


router.post("/create", async (req, res) => {
    const { name,age,city } = req.body;
    const newPerson = new PersonModel({
        name,age,city
    });
    await newPerson.save();
    res.status(200).json({ name,age,city });
});

router.put("/update/:personId", async (req, res) => {
    const { personId } = req.params //extract
    const {  name,age,city } = req.body; //extract body
    const person = await PersonModel.findByIdAndUpdate(personId, {  name,age,city });
    res.status(200).json({ message: "successfully updated person data", person })
});

router.delete("/delete/:personId", async (req, res) => {
    const { personId } = req.params
    const { name,age,city } = req.body;
    const person = await PersonModel.findByIdAndDelete(personId);
    res.status(200).json({ message: "successfully deleted person data", person })
});



const Movieschema = new mongoose.Schema({
    id: { type: Number },
    name: { type: String, required: [true, "plz enter movie name"], 
    movieLength: { type: Number, min: [20, "Movie under 20 min are not allowed"] }, max: [180, "Movie is too long"] },
    minAge: { type: Number, min: [3, "Underaged can't see this"] },
    maxAge: { type: Number, max: [92, "ALLAH ALLAH karo chaha"] },
    catagory: { type: String }
})


const MovieModel = mongoose.model("movie", Movieschema);

router.get("/movie", async (req, res) => {
    const movieList = await MovieModel.find();
    res.status(200).json({ movieList })
});

router.patch("/movie/:id", async (req, res) => {
    const { id } = req.params; //etxract
    const { status } = req.body;
    const movie = await MovieModel.findById(id); //find todo by Id  retrun whole obj return
    movie.status = status; //now chnages any thing
    movie.save();
    res.status(200).json({ movie });
})

router.post("/create/movie", async (req, res) => {
    const { name, minAge, maxAge, catagory } = req.body;
    const newMovie = new MovieModel({
        name, minAge, maxAge, catagory
    });
    await newMovie.save();
    res.status(200).json({ name, minAge, maxAge, catagory });
});

router.put("/update/:MovieId", async (req, res) => {
    const { MovieId } = req.params//extract
    const { name, minAge, maxAge, catagory } = req.body;//extract body
    const movie = await MovieModel.findByIdAndUpdate(MovieId, { name, minAge, maxAge, catagory });
    res.status(200).json({ message: "successfully updated movie", movie })
});

router.delete("/delete/:MovieId", async (req, res) => {
    const { MovieId } = req.params
    const { name, minAge, maxAge, catagory } = req.body;
    const movie = await TaskModel.findByIdAndDelete(MovieId);
    res.status(200).json({ message: "successfully deleted movie", movie })
});

router.all("/", (req, res) => {
    res.json({ message: " Succesfully we are live 🥳🥳🚀🚀🎥" })
})
app.listen(PORT, () => {
    console.log("server started");
})