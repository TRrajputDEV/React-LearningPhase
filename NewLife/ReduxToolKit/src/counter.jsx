import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement, reset } from "./features/counter/counterSlice";


const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => dispatch(Increment())}>+</button>
      <button onClick={() => dispatch(Decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
};

export default Counter;
