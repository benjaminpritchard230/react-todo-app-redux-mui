import { useSelector, useDispatch } from "react-redux";
import { save } from "./taskListSlice";

export function TaskListDisplay() {
  const taskList = useSelector((state) => state.taskList.value);
  const dispatch = useDispatch();

  const createCards = () => {
    let cardsArray = [];
    taskList.forEach((task, index) => {
      cardsArray.push(<div key={index}>{task}</div>);
    });
    return cardsArray;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    dispatch(save(e.target[0].value));
  };
  return (
    <div>
      {createCards()}
      <button
        onClick={() => {
          dispatch(save("harryben"));
        }}
      >
        click
      </button>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Create task</button>
      </form>
    </div>
  );
}
