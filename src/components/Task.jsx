// npm install react-icons
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id, task)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes style={symbolStyle} onClick={() => onDelete(task.id)} />
        {/* Have to add '()=>' since its a callback, if you dont add it than it automatically calls the fucntion even if not clicked (Essentially function is to be executed after the other function has finished execution)*/}
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

const symbolStyle = {
  color: "red",
  cursor: "pointer",
};

export default Task;
