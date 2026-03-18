const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const MONGO_URL = process.env.MONGO_URL || "mongodb://mongo:27017/tasks";
mongoose.connect(MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
