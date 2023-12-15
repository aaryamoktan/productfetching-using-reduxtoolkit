import { Outlet } from 'react-router-dom'
import React from 'react'
import Nevbar from './Nevbar'
import { Provider } from 'react-redux'
import store  from '../store/store'
const Dash = () => {
  return (
    <>
    
    <div><Nevbar/></div>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default Dash