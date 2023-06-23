import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
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
        <AiOutlineEdit className="icon-edit" onClick={() => updateMode(id, task)} />
        <BsTrash className="icon-basquet" onClick={removeTask} />
      </div>
    </li>
  );
};

export default List;