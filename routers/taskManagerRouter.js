const express = require("express");
const router = express.Router();

const {
  getTasks,
  postTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskManagerController");

router.get("/home", getTasks);

router.post("/", postTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

module.exports = router;
