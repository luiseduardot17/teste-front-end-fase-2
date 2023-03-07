import React from 'react'
import bg from '../../../assets/images/bg-login.png'
import logo from '../../../assets/images/telemetrixLogo.png'
import S from './LoginCliente.module.css'
import logoCliente from '../../../assets/images/loremipsumLogo.png'

const LoginCliente = () => {
  return (
    <div className="container-fluid p-0">
      <section className={S.section}>
        <img src={bg} className="img-fluid" alt="pessoas trabalhando" />
        <div className={S.formulario}>
          <img src={logo} className="img-fluid w-50 p-5" alt="logo telemetrix" />
          <img src={logoCliente} className="img-fluid w-50 p-5 pb-0" alt="logo do cliente" />
          <form className="mb-3 d-flex flex-column w-50">
            <div className="form-floating mb-3 w-100">
              <input type="email" className="form-control border-primary border-0 border-bottom rounded-0" id="floatingInput" placeholder="Email"
                required />
              <label htmlFor="floatingInput m-0">Email</label>
            </div>
            <div className="form-floating mb-3 w-100">
              <input type="password" className="form-control border-primary border-0 border-bottom rounded-0" id="floatingInput" placeholder="Senha"
                required />
              <label htmlFor="floatingInput">Digite Sua Senha</label>
            </div>
            <button type="submit" className="btn btn-primary w-100 mx-auto">Entrar</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default LoginCliente