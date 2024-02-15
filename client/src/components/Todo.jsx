import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

function Todo() {
  const [todoText, setTodoText] = useState("");
  const [data, setData] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/todos");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddTodo = async () => {
    try {
      await axios.post("http://localhost:5000/api/todos", { text: todoText });
      fetchTodos();
      setTodoText("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditTodo = async (id, newText) => {
    try {
      await axios.put(`http://localhost:5000/api/todos/${id}`, {
        text: newText,
      });
      fetchTodos();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCompleteTodo = async (id, completed) => {
    try {
      await axios.put(`http://localhost:5000/api/todos/${id}`, {
        completed: !completed,
      });
      fetchTodos();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="flex justify-center items-center  bg-white">
      <div className="bg-gray-200 p-8 rounded-lg shadow-md w-[30%]">
        <div>
          <input
            className="border-2 border-gray-500 rounded-md p-2 w-[70%]"
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <button
            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddTodo}
          >
            Add Todo
          </button>
        </div>
        <div className="flex flex-col items-start w-full mt-4">
          {data?.map((todo) => (
            <div
              className="border-b-2 border-gray-500 p-2 w-full m-2 flex justify-between"
              key={todo._id}
            >
              <div
                className="flex items-center"
                style={{ width: "calc(100% - 80px)" }}
              >
                <input
                  className="mr-2"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleCompleteTodo(todo._id, todo.completed)}
                />
                <p
                  className={`text-lg ${todo.completed ? "line-through" : ""}`}
                >
                  {todo.text}
                </p>
              </div>
              <div className="flex gap-2">
                <FaEdit
                  className="text-blue-500 cursor-pointer"
                  onClick={() => {
                    const newText = prompt(
                      "Enter new text for todo",
                      todo.text
                    );
                    if (newText !== null) {
                      handleEditTodo(todo._id, newText);
                    }
                  }}
                />
                <FaTrash
                  className="text-red-500 cursor-pointer"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this todo?"
                      )
                    ) {
                      handleDeleteTodo(todo._id);
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
