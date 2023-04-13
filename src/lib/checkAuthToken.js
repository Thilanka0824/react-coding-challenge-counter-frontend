import { setHeaderToken } from "./setHeaderToken";

export const checkAuthToken = () => {
  let jwtToken = localStorage.getItem("jwtToken");

  if (jwtToken) {
    //set auth to true and set token
    setHeaderToken(jwtToken);
  } else {
    //set auth to false and remove token
    // setHeaderToken(false)
  }
};
