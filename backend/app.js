const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://mongo:27017/tasks");
const TaskSchema = new mongoose.Schema({
  task: String
});
const Task = mongoose.model("Task", TaskSchema);
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});
app.post("/tasks", async (req, res) => {
  const newTask = new Task({ task: req.body.task });
  await newTask.save();
  res.json(newTask);
});
app.listen(5000, () => console.log("Server running"));
