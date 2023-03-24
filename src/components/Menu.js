import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
       <h4>"THERE IS NO MENU!"</h4>
       <br/>
       <h1>Click on the Mega Charizard!</h1>
       <Link to="/">
        <Logo/>
       </Link>
    </div>
  )
}

export default Menu