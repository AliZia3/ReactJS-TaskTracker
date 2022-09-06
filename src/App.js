import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import Tasks from "./components/Tasks";
import "./App.css";

const App = () => {
  // const JSON_API = "http://localhost:5000";
  const JSON_API = "https://tasktrackerwebapp.netlify.app";

  // *Toggles Form
  const [showAddTask, setShowAddTask] = useState(false);

  // *Stores All Tasks
  const [tasks, setTasks] = useState([]);

  // *Fetch data on load
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // *Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(`${JSON_API}/tasks`);
    const data = await res.json();

    return data;
  };

  // *Add Task
  const addTask = async (task) => {
    const res = await fetch(`${JSON_API}/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);
  };

  // *Delete Task
  const deleteTask = async (id) => {
    await fetch(`${JSON_API}/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // *Toggle Reminder
  const toggleReminder = async (id, task) => {
    await fetch(`${JSON_API}/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...task, reminder: !task.reminder }),
    });

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      {/* When toggled, it passes in the oppsoite boolean of 'showAddTask' into 'setShowAddTask'. It also passes in the boolean value of showAddTask in the 2nd prop */}
      <Header
        showForm={() => setShowAddTask(!showAddTask)}
        showAddTaskBool={showAddTask}
      />

      {/* && is a shorter way of doing a ternerary operator without the else statement (i.e ':') */}
      {showAddTask && <AddTaskForm onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <div>
          <h3>No Tasks</h3>
          <br />
          <h5>Tip: Toggle reminders by double clicking tasks</h5>
        </div>
      )}

      <footer>Copyright Ⓒ 2022 Ali Zia</footer>
    </div>
  );
};

export default App;
