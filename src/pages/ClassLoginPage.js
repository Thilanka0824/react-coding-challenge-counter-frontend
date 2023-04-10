import React from 'react'
import { LoginContext, LoginProvider } from '../context/LoginContext'
import ClassLogin from '../components/ClassLogin'

const ClassLoginPage = () => {
  return (
    <LoginProvider>
    <div>
        <ClassLogin/>
    </div>
    </LoginProvider>
  )
}

export default ClassLoginPage