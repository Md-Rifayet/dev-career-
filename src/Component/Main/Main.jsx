import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Home from '../Home/Home'
const Main = () => {
  return (
    <div>
       <Header> </Header>
        <Outlet></Outlet>
       
    </div>
  )
}

export default Main