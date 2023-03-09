import cog from '../../assets/images/cog-light@2x.png'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/telemetrixLogo.png'
import { ConfIcon, RightIcon } from '../../styles/styledIcons';

const Sidebar = () => {
    return (
        <nav className="navbar bg-body border-3 border-bottom border-tertiary p-3 pb-4 mb-5">
            <div className="container-fluid">
                <RightIcon type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" />
                <ConfIcon src={cog} />
                <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" aria-expanded="false">
                    <div className="offcanvas-header border-bottom border-tertiary">
                        <div><img src={logo} className="img-fluid w-100 mx-auto" id="image" alt="logo telemetrix" /></div>
                        <div className='w-50 text-center'><RightIcon type="button" data-bs-dismiss="offcanvas" aria-label="Close" /></div>
                    </div>
                    <div className="offcanvas-body p-0">
                        <p className="h3 bg-primary mb-0">Cadastros</p>
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 bg-primary-subtle">
                            <li className="nav-item show active" data-bs-dismiss="offcanvas">
                                <Link to="/cadastros/usuarios">Usuários</Link>
                            </li>
                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                <Link to="/cadastros/clientes">Clientes</Link>
                            </li>
                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                <Link to="/cadastros/fornecedores">Fornecedores</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar