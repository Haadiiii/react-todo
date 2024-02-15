const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../controller/todoController");

router.get("/todos", getAllTodos);

router.post("/todos", createTodo);

router.delete("/todos/:id", deleteTodo);

router.put("/todos/:id", updateTodo);

module.exports = router;
