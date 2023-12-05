const CustomError = require("../middleware/CustomError");
const catchAsyncError = require("../middleware/catchAsyncError");
const {
    getProduct,
    //createProduct,
   // loginWithIdAndPassword,
  } = require("../services/Product.service");
 
  exports.GetProduct = catchAsyncError(async (req, res, next) => {
    throw new CustomError("not found", 404);
    const product = await getProduct();
    res.json(product);
  });
  