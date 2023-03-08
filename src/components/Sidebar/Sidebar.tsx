
import { AiFillCaretRight } from 'react-icons/ai';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import logo from '../../assets/images/telemetrixLogo.png'
const Sidebar = () => {
    return (
        <nav className="navbar bg-body fixed-top border-3 border-bottom border-tertiary p-3">
            <div className="container-fluid">
                <AiFillCaretRight size={30 + "px"} color={"#005187"} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" />
                <HiOutlineCog6Tooth size={30 + "px"} className="me-5" />

                <div className="offcanvas offcanvas-start" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header border-bottom border-tertiary">
                        <img src={logo} className="img-fluid w-50 mx-auto" id="image" alt="logo telemetrix" />
                        <AiFillCaretRight size={30 + "px"} color={"#005187"} type="button" data-bs-dismiss="offcanvas" aria-label="Close"/>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Cadastros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Usuários</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#">Clientes</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#">Fornecedores</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar