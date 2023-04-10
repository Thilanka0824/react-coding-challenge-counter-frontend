// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useReducer } from "react";
// import { fetchLogin } from "./loginContextHelper";

export const LoginContext = createContext(null);
export const LoginDispatchContext = createContext(null);

const initialState = {
  username: "",
  password: "",
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

      //   action.data.username === "Thilanka" ? (isAuth = true) : (isAuth = false);

      //   const fetchLogin = async () => {
      //     try {
      //       let success = await fetch(baseURL + "/users/login/");
      //       let data = await success.json();
      //       console.log(data.message);
      //     } catch (err) {}
      //   };

      // let response = fetchLogin();
      // console.log("response:", response.data);

      //  let user = action.data
      return {
        ...action.data,
        // username: "Hello",
        // password: response.data.user,
        isAuth: true,
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
      };
    default:
      alert("Default");
  }
};
