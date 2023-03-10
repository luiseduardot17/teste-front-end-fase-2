import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter, Routes as Switch } from 'react-router-dom'
import BaseCadastros from '../pages/Cadastros/BaseCadastros'
import Clientes from '../pages/Cadastros/Clientes/Clientes'
import Fornecedores from '../pages/Cadastros/Fornecedores/Fornecedores'
import Grupos from '../pages/Cadastros/Grupos/Grupos'
import Usuarios from '../pages/Cadastros/Usuarios/Usuarios'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import LoginCliente from '../pages/Login/LoginCliente/LoginCliente'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/login/cliente' element={<LoginCliente />} />
                <Route path='/cadastros' element={<BaseCadastros />}>
                    <Route path='usuarios' element={<Usuarios />} />
                    <Route path='clientes' element={<Clientes/>} />
                    <Route path='fornecedores' element={<Fornecedores/>} />
                    <Route path='grupos' element={<Grupos/>} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes