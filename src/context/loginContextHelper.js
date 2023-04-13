import Axios from "../lib/Axios";

// const baseURL = "http://localhost:3001/api";

const errorHandler = (error, dispatch, authDispatch) => {
  if (error.response) {
    authDispatch({
      type: "AUTH_FAIL",
      data: { isAuth: false },
      });
    
    dispatch({
      type: "ERROR",
      data: {
        message: error.response.data.message,
      },
    });
  } else {
    dispatch({
      type: "ERROR",
      data: {
        message: "No Response from Server",
      },
    });
  }
}


export const fetchLogin = async (dispatch, loginData, authDispatch) => {
  try {
    let response = await Axios.post("/users/login", loginData);
    // let success = await response.json(); // fetch problem + solution
    console.log(response.status, response.data);
    console.log("(response.data.userOBJ)", response.data.userOBJ);
    //-----------------//
    // this is setting the token in localStorage
    localStorage.setItem('jwtToken', response.data.token);

    //
    authDispatch({
      type: "AUTH_SUCCESS",
      data: { isAuth: true },
    });

    dispatch({
      type: "LOGIN",
      data: {
        userOBJ: response.data.userOBJ,
        token: response.data.token,
      },
    });
  } catch (error) {
    errorHandler(error, dispatch, authDispatch);
  }
};

export const register = async (dispatch, newData, authDispatch) => {
  try {
    let response = await Axios.post("/users/register", newData);
    // let success = await response.json(); // fetch problem + solution
    console.log(response.status, response.data);
    console.log("(response.data.userOBJ)", response.data.userOBJ);
    dispatch({
      type: "REGISTER",
      data: response.data.userOBJ,
    });
  } catch (error) {
    errorHandler(error, dispatch, authDispatch)
  }
};

export const deleteUser = async (dispatch, username, authDispatch) => {
  try{

    let response = await Axios.post("/users/delete-user", { username: username });
    console.log(response);
    localStorage.removeItem("jwtToken"); // remove the token from local storage
    authDispatch({
      type: "AUTH_FAIL",
      data: { isAuth: false },
    });
  
    dispatch({
      type: "DELETE",
      data: { message: response.data.message },
    });
  } catch (error) {
    errorHandler(error, dispatch, authDispatch);
  }
  
};

export const logout = async (dispatch, authDispatch) => {
  localStorage.removeItem('jwtToken'); // remove the token from local storage
  authDispatch({
    type: "AUTH_FAIL",
    data: { isAuth: false },
  });

  dispatch({
    type: "LOGOUT",
  });
}