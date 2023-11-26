import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateTodo from "./components/CreateTodo";
import { getTodos } from "./redux/appThunk";

const App = () => {
  const { todos } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (todos.length !== 0) return;

    dispatch(getTodos());
  }, [todos, dispatch]);

  useEffect(() => console.log(todos), [todos]);

  return (
    <div className="min-h-screen flex flex-col items-center py-20">
      <CreateTodo />
    </div>
  );
};

export default App;
