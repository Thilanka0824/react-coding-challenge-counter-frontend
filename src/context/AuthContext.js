import { createContext, useEffect, useReducer } from "react";
import { checkAuthToken } from "../lib/checkAuthToken";

export const AuthContext = createContext(null);
export const AuthDispatchContext = createContext(null);

//this is the initial state
const initialState = {
  isAuth: false,
};

//this is the provider
/*
this works like a store, it holds the state and the reducer, and it provides the state to the children, and the dispatch to the children, so that the children can dispatch actions to the reducer.

The reducer will update the state, and the state will be passed down to the children.

The children will be re-rendered, and the children will receive the updated state.
*/
// checkAuthToken();
export const AuthProvider = ({ children }) => {
    const [auth, dispatch] = useReducer(authReducer, initialState);
    // this useEffect will run when the component mounts, and it will check if there is a token in the local storage, if there is, it will dispatch an action to the reducer, and the reducer will update the state, and the state will be passed down to the children, and the children will be re-rendered, and the children will receive the updated state.
    useEffect(() => {
        let authy = checkAuthToken();
        
        if (authy) {
            dispatch({ type: "AUTH_SUCCESS" });
        } else {
            dispatch({ type: "AUTH_FAIL" });
        }

        }, []);

  return (
    <AuthContext.Provider value={auth}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

//this is the auth reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return {
        isAuth: true,
      };
    case "AUTH_FAIL":
      return {
        isAuth: false,
      };
    default:
      return {
        isAuth: false,
      };
  }
};
