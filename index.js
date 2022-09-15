const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send(process.env.MESSAGE || "hello world");
});

app.listen(process.env.PORT || 4000, () => {
  console.log("app is running");
});
