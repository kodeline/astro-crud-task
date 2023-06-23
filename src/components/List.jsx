import axios from "axios";

const baseURL = "https://restapi-task.fly.dev/api";

const List = ({ id, task, setUpdateUI, updateMode }) => {
  const removeTask = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res);
      setUpdateUI((prevState) => !prevState);
    });
  };
  
  return (
    <li>
      {task}
      <div className="icons">
        <i class='bx bx-edit-alt icon-edit' onClick={() => updateMode(id, task)} />
        <i class='bx bx-trash icon-basquet' onClick={removeTask}  />
      </div>
    </li>
  );
};

export default List;