import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from "./Home"
import Logout from './Components/Logout'

const Navigation = ({user,setLoginUser}) => {
  return (
    <div>
        <Logout setLoginUser={setLoginUser} />
        <Home user={user}/>
    </div>
  )
}

export default Navigation