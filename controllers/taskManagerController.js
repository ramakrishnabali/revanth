const Task = require("../models/taskManagerModel");

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const postTask = async (req, res) => {
  try {
    const data = req.body;
    const newTask = new Task(data);
    const response = await newTask.save();
    res.send(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const update = await Task.updateOne(
      { id },
      {
        $set: {
          description:
            "Complete the task as soon as possible to be in the first",
        },
      }
    );
    res.status(200).json({ message: "ok" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const update = await Task.deleteOne({ id });
    res.status(200).json({ message: "ok" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { getTasks, postTask, updateTask, deleteTask };
