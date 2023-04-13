import React from "react";

import { LoginProvider } from "../context/LoginContext";
import { AuthProvider } from "../context/AuthContext";

import ClassLogin from "../components/ClassLogin";

import { checkAuthToken } from "../lib/checkAuthToken";



const ClassLoginPage = () => {
  return (
    <AuthProvider>
      <LoginProvider>
        <h1>Class Login Page</h1>
        <ClassLogin />
      </LoginProvider>
    </AuthProvider>
  );
};

export default ClassLoginPage;
