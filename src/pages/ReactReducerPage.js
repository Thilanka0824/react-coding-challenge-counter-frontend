import React, { useState, useReducer } from "react";
import counterReducer from "../reducers/counterReducer";



const ReactReducerPage = () => {
//   const [notesCounter, setNotesCounter] = useState(0);
    const [notesCounter, dispatch] = useReducer(counterReducer, 0)
  const [inputHandler, setInputHandler] = useState(0);

  const mathArr = [
    "Increment",
    "Decrement",
    "Add",
    "Subtract",
    "Multiply",
    "Divide",
    "Power",
    "Remainder",
  ];


  return (
    <div>
      ReactReducerPage
      <h1>Counter:{notesCounter}</h1>
      
      <input
        type="number"
        onChange={(e) => setInputHandler(parseInt(e.target.value))}
        value={inputHandler}
      ></input>
      <button onClick={() => dispatch({
        type: 'RESET',
      })}>Reset</button>
      <p>-------------------------------------------------------------</p>
      <br></br>
      {mathArr.map((expression) => {
        return (
          <button onClick={() => dispatch({
            type: expression,
            inputHandler: inputHandler
          })}>
            {expression}
            {expression === "Increment"
              ? "++"
              : expression === "Decrement"
              ? "--"
              : " " + inputHandler}
          </button>
        );
      })}
    </div>
  );
};

export default ReactReducerPage;
