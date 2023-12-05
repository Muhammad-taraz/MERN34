const mongoose = require("mongoose");

const ProductSchema =new mongoose.Schema({
    name : String,
    available : Boolean,
    price : Number,
    catagory : [ "FOOD", "CLOTH", "PC" ]
  });

const ProductModel = mongoose.model("Persons", ProductSchema);
module.exports = ProductModel;