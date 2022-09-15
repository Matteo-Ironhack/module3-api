const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  name: String,
  done: Boolean,
});

module.exports = model("Task", taskSchema);
