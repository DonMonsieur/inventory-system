import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Index from "./Index"
import NotFound from '../navigation/NotFound'
import Login from '../login/Login'
import AddUser from "../addUser/AddUser"
import Inventory from "../inventory/Inventory";
import ViewUsers from '../users/ViewUsers'

export default function Router() {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <Index/> } />
            <Route path='/*' element={ <NotFound/> } />
            <Route path='/login' element={ <Login/> } />
            <Route path='/addUser' element={ <AddUser/> } />
            <Route path='/inventory' element={ <Inventory/> } />
            <Route path='/users' element={ <ViewUsers/> } />
        </Routes>
    </div>
  )
}
