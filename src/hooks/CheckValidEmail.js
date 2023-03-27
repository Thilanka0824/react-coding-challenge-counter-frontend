import { useState, useEffect } from "react";

const useCheckValidEmail = (params) => {
  console.log(params);

  const [isValid, setIsValid] = useState(false);

  // Define a side effect (using useEffect) that will be triggered when 'params' change
  useEffect(() => {
    // Check if 'params' contains the '@' character
    // If true, update 'isValid' to 'true'; otherwise, update it to 'false'
    params.includes("@") ? setIsValid(true) : setIsValid(false);
  }, [params]); // The side effect depends on the value of 'params'

  return isValid;
};

export default useCheckValidEmail;
