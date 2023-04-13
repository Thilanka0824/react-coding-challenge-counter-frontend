import React from "react";

import { LoginProvider } from "../context/LoginContext";
import { AuthProvider } from "../context/AuthContext";

import ClassLogin from "../components/ClassLogin";




const ClassLoginPage = () => {
  return (
    
      <LoginProvider>
        <h1>Class Login Page</h1>
        <ClassLogin />
      </LoginProvider>
    
  );
};

export default ClassLoginPage;
