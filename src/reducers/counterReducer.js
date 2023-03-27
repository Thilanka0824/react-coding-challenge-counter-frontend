const counterReducer = (notesCounter, action) => {
  console.log(action);
  switch (action.type) {
    case "Increment":
      return notesCounter + 1;

    case "Decrement":
      return notesCounter - 1;

    case "Add":
      return notesCounter + action.inputHandler;

    case "Subtract":
      return notesCounter - action.inputHandler;

    case "Multiply":
      return notesCounter * action.inputHandler;

    case "Divide":
      return notesCounter / action.inputHandler;

    case "Power":
      return notesCounter ** action.inputHandler;

    case "Remainder":
      return notesCounter % action.inputHandler;

    case "Square Root":
      return Math.sqrt(notesCounter);

    case "The Ultimate Answer":
        return 42

    case "RESET":
      return 0;

    default:
      throw console.error("Action not found");
  }
};

export default counterReducer;
