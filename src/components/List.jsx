import axios from "axios";
import pkg from 'react-icons/bs/index.esm.js';
const { BsFillTrashFill } = pkg;

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
        <p className="icon-edit" onClick={() => updateMode(id, task)}> Editar</p>
        <BsFillTrashFill className="icon-basquet" onClick={removeTask} />
      </div>
    </li>
  );
};

export default List;