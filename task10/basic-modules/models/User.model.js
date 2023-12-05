const mongoose = require("mongoose");

const PersonSchema =new mongoose.Schema({
    username : String,
    email : String,
    password: String,
    role : ["ADMIN", "USER"]
  });

const PersonModel = mongoose.model("Persons", PersonSchema);
module.exports = PersonModel;
