require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Mongo Error:", err));

// Schema
const TaskSchema = new mongoose.Schema({
  task: String
});

// Model
const Task = mongoose.model("Task", TaskSchema);

// Routes

// GET all tasks
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new task
app.post("/tasks", async (req, res) => {
  try {
    const newTask = new Task({ task: req.body.task });
    await newTask.save();
    res.json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Default route (important to avoid "Cannot GET /")
app.get("/", (req, res) => {
  res.send("Task Manager API is running 🚀");
});

// PORT (VERY IMPORTANT for Render)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
