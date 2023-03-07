import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter, Routes as Switch } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import LoginCliente from '../pages/Login/LoginCliente/LoginCliente'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/login/cliente' element={<LoginCliente/>}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes