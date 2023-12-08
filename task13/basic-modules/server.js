const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const PORT = 6000
app.listen(PORT, () => {
  console.log("server started port no :" + PORT);
});
