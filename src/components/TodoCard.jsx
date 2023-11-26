import { useDispatch } from "react-redux";
import { getTodos, toggleDone } from "../redux/appThunk";

const TodoCard = ({ index, isDone, title, id }) => {
  const dispatch = useDispatch();

  const onClickToggleDone = async () => {
    await dispatch(toggleDone(id));

    dispatch(getTodos());
  };

  return (
    <li className={`${index % 2 ? "bg-gray-100" : "bg-white"} w-64 py-1`}>
      <span className="w-1/12 inline-block text-center">{id}</span>
      <button
        className={`w-7/12 inline-block ${isDone && "line-through"} `}
        onClick={onClickToggleDone}
      >
        {title}
      </button>
      <button className="w-2/12 hover:font-semibold">수정</button>
      <button className="w-2/12 hover:font-semibold">삭제</button>
    </li>
  );
};

export default TodoCard;
