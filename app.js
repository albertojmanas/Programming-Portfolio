// Required npms
const express = require("express");

const app = express();
app.use(express.static("public"));



// Heroku port
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

// local port
app.listen(port, () => {
  console.log("Server has started successfully");
});
