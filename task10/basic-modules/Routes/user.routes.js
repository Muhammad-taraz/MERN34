const express = require("express");
const router = express.Router();
const {
  GetUser,
  //createUser,
 // login,
} = require("../controllers/Todo.controller");
router.get("/", GetUser);
// router.post("/", createUser);
// router.post("/login", login);

module.exports = router;
