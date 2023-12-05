const CustomError = require("../middleware/CustomError");
const catchAsyncError = require("../middleware/catchAsyncError");
const {
    getUser,
    //createUser,
    //loginWithIdAndPassword,
  } = require("../services/User.service");

  exports.GetUser = catchAsyncError(async (req, res, next) => {
    throw new CustomError("not found", 404);
    const user = await getUser();
    res.json(user);
  });
  