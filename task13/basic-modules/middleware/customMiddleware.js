const CustomMiddleware = (req, res, nextCallBack) => {
  req.user = { userId: 1 };
  nextCallBack();
  // res.json({
  //   message: " i am from  custom middleware",
  // });
};

module.exports = CustomMiddleware;
