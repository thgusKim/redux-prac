import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Box from "./component/Box";

function App() {
  const dispatch = useDispatch();
  let count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let pw = useSelector((state) => state.pw);

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "ksh", pw: "ksh123" } });
  };

  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 3 } });
  };

  return (
    <div>
      <h1>
        id : {id}, pw: {pw}
      </h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
      <button onClick={login}>로그인</button>
      <Box />
    </div>
  );
}

export default App;
