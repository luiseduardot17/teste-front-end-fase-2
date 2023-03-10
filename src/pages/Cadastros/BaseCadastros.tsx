import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'

const BaseCadastros = () => {
    return (
        <div>
            <Sidebar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default BaseCadastros