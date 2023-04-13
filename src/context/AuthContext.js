import { createContext, useReducer } from "react";

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
export const AuthProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={auth}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};
//this is the reducer
// th
const authReducer = (state, action) => {
  return action.data;
};
