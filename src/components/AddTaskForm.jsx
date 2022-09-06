import { useState } from "react";

const AddTaskForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  // Processes to take place when form is submitted
  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please Add Task");
      return;
    }

    onAdd({ text, day, reminder });

    //Resets values
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          /*onChange is what allows you to type in the text field. After it is called, it calls the inside function that gets the value in the text field and passes it into 'setText' */
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTaskForm;
