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

  //   const notesCounterFuncAdd = () => {
  //     setNotesCounter(notesCounter + 1);
  //   };
  //   const notesCounterFuncSub = () => {
  //     setNotesCounter(notesCounter - 1);
  //   };

//   const notesCounterFuncParam = (type) => {
//     dispatch({
//         type: type,
//         inputHandler: inputHandler
//     })
//     // type === "Add" && setNotesCounter(notesCounter + inputHandler);
//     // type === "Subtract" && setNotesCounter(notesCounter - inputHandler);
//     // type === "Divide" && setNotesCounter(notesCounter / inputHandler);
//     // type === "Multiply" && setNotesCounter(notesCounter * inputHandler);
//   };

  return (
    <div>
      ReactReducerPage
      <h1>Counter:{notesCounter}</h1>
      {/* <button onClick={notesCounterFuncAdd}>Add 1</button>
    <button onClick={notesCounterFuncSub}>Sub 1</button> */}
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
      {/* <button onClick={() => notesCounterFuncParam("Add")}>
        Add {inputHandler}
      </button>
      <button onClick={() => notesCounterFuncParam("Subtract")}>
        Subtract {inputHandler}
      </button>
      <button onClick={() => notesCounterFuncParam("Divide")}>
        Divide {inputHandler}
      </button>
      <button onClick={() => notesCounterFuncParam("Multiply")}>
        Multiply {inputHandler}
      </button> */}
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
