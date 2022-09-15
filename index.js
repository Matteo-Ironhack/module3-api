require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");

const Task = require("./models/Task");
const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send(process.env.MESSAGE || "hello world");
});

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json({ tasks });
});

app.post("/tasks", async (req, res) => {
  const task = await Task.create(req.body);
  res.json({ task });
});

const main = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(process.env.PORT || 4000, () => {
    console.log("app is running");
  });
};

main();
