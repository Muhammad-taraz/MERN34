const express = require("express");
const app =express();

app.use(express.json()); 
const port = 5492;
app.listen(port, () => {
    console.log("Server started")
});