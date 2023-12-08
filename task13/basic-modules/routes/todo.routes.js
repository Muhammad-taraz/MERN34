const express = require("express");
const router = express.Router();
const {
  GetTodo,
  createTodo,
  login,
} = require("../controllers/Todo.controller");
const CustomMiddleware = require("../middleware/customMiddleware");
const notifyEmail = require("../mail/notifyEmail");

router.get("/B", CustomMiddleware, GetTodo);
router.post("/A", createTodo);
router.post("/login", login);
router.get("/",(req,res)=>{
  res.json({me:"Hello"})
})
router.all("/send", async (req, res) => {
  res.json(1);

  for (let i = 0; i < 10; i++) {
    const sent = await notifyEmail({
      email: req.body.email,
      count: i,
      subject: "This is testing email",
    });
  }

  // if (sent)
  //    res.json({
  //    success: true,
  //     message: "Email sent",
  //   });
  // else
  //   res.status(400).json({
  //     success: false,
  //     message: "Email not sent",
  //   });
});

module.exports = router;
