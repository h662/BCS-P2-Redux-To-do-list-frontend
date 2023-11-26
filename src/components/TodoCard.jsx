const TodoCard = ({ index, isDone, title, id }) => {
  return (
    <li
      className={`${isDone && "line-through"} ${
        index % 2 ? "bg-gray-100" : "bg-white"
      } w-64 py-1`}
    >
      <span className="w-1/12 inline-block text-center">{id}</span>
      <button className="w-7/12 inline-block">{title}</button>
      <button className="w-2/12 hover:font-semibold">수정</button>
      <button className="w-2/12 hover:font-semibold">삭제</button>
    </li>
  );
};

export default TodoCard;
