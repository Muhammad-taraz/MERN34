const ProductModel = require("../models/Product.model")

exports.GetProducts=async ()=>{
    return await ProductModel.find();
}