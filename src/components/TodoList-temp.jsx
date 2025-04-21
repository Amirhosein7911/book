import React, { useState } from "react";
import "./TodoList.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { id: Date.now(), text: inputValue }]);
      setInputValue("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const handleDeleteAllTasks = () => {
    setTasks([]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className=" todo-container pt-4">
      <div>
        <h3 className="todo-title">لیست کارهای من</h3>

        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="فعالیت های خودتو بنویس "
            className="task-input"
          />
          <button onClick={handleAddTask} className="add-btn">
            اضافه کردن
          </button>
        </div>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span>{task.text}</span>

            <button
              onClick={() => handleDeleteTask(task.id)}
              className="delete-btn"
            >
              حذف
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => handleDeleteAllTasks()} className="deleteAll-btn">
        حذف همه لیست ها
      </button>
    </div>
  );
};

export default ToDoList;
