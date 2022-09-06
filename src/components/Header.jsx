import Button from "./Button";

const Header = ({ title, showForm, showAddTaskBool }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTaskBool ? "red" : "green"}
        text={showAddTaskBool ? "Close" : "Add"}
        onClick={showForm}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
