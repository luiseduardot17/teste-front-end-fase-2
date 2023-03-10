import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import S from './Home.module.css'

const Home = () => {
  return (
    <div className={S.container}>
      <div className='container-fluid d-flex justify-content-evenly'>
      <Link to='/login' className="nav-link text-light p-0">1° TELA DE LOGIN</Link>
      <Link to='/login/cliente' className="nav-link text-light p-0">TELA DE LOGIN CLIENTES</Link>
      <Link to='/cadastros/usuarios' className="nav-link text-light p-0">2° TELA DE CADASTRO DE USUÁRIOS</Link>
      <Link to='/cadastros/grupos' className="nav-link text-light p-0">3° TELA DE CADASTRO DE GRUPOS</Link>
    </div>
    </div>
  )
}

export default Home