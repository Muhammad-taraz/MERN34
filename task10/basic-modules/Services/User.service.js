const UserModel = require("../models/User.model")

const getAllUsers=async()=>{
    return await UserModel.find();
}


const addNewUser=async(newUser)=>{
    const user=new UserModel({
        ...newUser
    });
  return await user.save();
}
module.exports={getAllUsers,addNewUser};