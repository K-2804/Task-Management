import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  const completeTask = (index) => {
    const newCompletedTask = tasks[index];
    setCompletedTasks([...completedTasks, newCompletedTask]);

    const remainingTasks = tasks.filter((_, i) => i !== index);
    setTasks(remainingTasks);
  };
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };


  return (
    <div className="body">
    <div className="dashboard-container">
      {/* Header Section */}
      <div className="header">
        <h1 className="title">TASK DASHBOARD</h1>
        <div className="logout-container"><Link to="/" className="logout-btn">Logout</Link></div>
      </div>

      {/* Task Boxes */}
      <div className="task-container">
        {/* Left Box - Active Tasks */}
        <div className="task-box">
          <h3 div className="h3-dsh">My Tasks</h3>
          <input
            type="text"
            placeholder="Enter task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button className="add-btn" onClick={addTask}>Add Task</button>  
          <ul>
            {tasks.length > 0 ? (
            tasks.map((task, index) => (
                 <li key={index} className="task-item">
                   <span className="task-text">{task}</span>
                      <div className="task-buttons">
                          <button className="add-cmpt1" onClick={() => completeTask(index)}>Over ✅</button>
                          <button className="add-cmpt2" onClick={() => deleteTask(index)}>Clear ❌</button>
                      </div>
                   </li>
                 ))
           ) : (
         <li className="no-task">No tasks available</li>
  )}
</ul>
        </div>

        {/* Right Box - Completed Tasks */}
        <div className="task-box">
          <h3 div className="h3-dsh">Completed Tasks</h3>
          <ul>
  {completedTasks.length > 0 ? (
    completedTasks.map((task, index) => (
      <li key={index} className="task-item">
        <span className="task-text">{task}</span>
      </li>
    ))
  ) : (
    <li className="no-task task-text">No completed tasks</li>
  )}
  <button onClick={() => setCompletedTasks([])} className="clear-btn">Clear All</button>
</ul>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Dashboard;