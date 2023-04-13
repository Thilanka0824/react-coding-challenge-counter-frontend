// eslint-disable-next-line no-unused-vars
import React, { createContext, useReducer } from "react";
// import { fetchLogin } from "./loginContextHelper";

export const LoginContext = createContext(null);
export const LoginDispatchContext = createContext(null);

const initialState = {
  username: "",
  password: "",
  isAuth: false,
  message: "Please Log In!",
};
export const LoginProvider = ({ children }) => {
  const [login, dispatch] = useReducer(loginReducer, initialState);
  // diff value than the one in ClassLogin

  return (
    <LoginContext.Provider value={login}>
      <LoginDispatchContext.Provider value={dispatch}>
        <div>
          {/* Hello World */}
          {children}
        </div>
      </LoginDispatchContext.Provider>
    </LoginContext.Provider>
  );
};

const loginReducer = (login, action) => {
  switch (action.type) {
    case "LOGIN":
      login.isAuth = false;

      return {
        ...action.data.userOBJ,
        isAuth: true,
        message: `Thank you for logging in ${action.data.userOBJ.username}`,
        token: action.data.token,
      };

    case "LOGOUT":
      return {
        username: "",
        password: "",
        isAuth: false,
      };
    case "REGISTER":
      login.isAuth = false;

      console.log();
      return {
        ...action.data,
        isAuth: true,
        message: `Thank you for registering ${action.data.username}!`,
      };
      case "DELETE":
        return {
          ...login,
          isAuth: false,
          message: action.data.message,
        };
    case "ERROR":
      return {
        username: "",
        password: "",
        isAuth: false,
        message: action.data.message,
      };
    default:
      alert("Default");
  }
};
