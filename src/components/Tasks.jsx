import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="task-container">
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Tasks;
