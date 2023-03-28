import React, { useReducer } from "react";
import reducer from "../reducers/homeworkReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const generateStars = (count) => {
    return "⭐".repeat(count);
  };
  return (
    <div>
      <div className="Counter">
        <button
          className="Counter-items"
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
        >
          Remove 1
        </button>
        <h1 className="Counter-items">{state.count}</h1>
        <button
          className="Counter-items"
          onClick={() => {
            dispatch({ type: "INCREMENT" });
          }}
        >
          Add 1
        </button>
      </div>
      <div className="Star-div">
        <h1>{generateStars(state.count)}</h1>
      </div>
    </div>
  );
};

export default Counter;
