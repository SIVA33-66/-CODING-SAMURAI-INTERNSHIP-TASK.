import React, { useState } from 'react';
import './TodoList.css'; 
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!task) return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTask('');
  };

  const handleEditTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setEditingTask(taskToEdit);
    setTask(taskToEdit.text);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (!task) return;

    const updatedTasks = tasks.map((taskItem) =>
      taskItem.id === editingTask.id ? { ...taskItem, text: task } : taskItem
    );
    setTasks(updatedTasks);
    setTask('');
    setEditingTask(null);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((taskItem) =>
      taskItem.id === id ? { ...taskItem, completed: !taskItem.completed } : taskItem
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <form onSubmit={editingTask ? handleSaveEdit : handleAddTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="task-input"
        />
        <button type="submit" className="submit-button">
          {editingTask ? 'Save' : 'Add Task'}
        </button>
      </form>

      <ul className="task-list">
        {tasks.map((taskItem) => (
          <li key={taskItem.id} className={`task-item ${taskItem.completed ? 'completed' : ''}`}>
            <span onClick={() => handleToggleComplete(taskItem.id)} className="task-text">
              {taskItem.text}
            </span>
            <div className="task-actions">
              <button onClick={() => handleEditTask(taskItem.id)} className="edit-button">Edit</button>
              <button onClick={() => handleDeleteTask(taskItem.id)} className="delete-button">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
