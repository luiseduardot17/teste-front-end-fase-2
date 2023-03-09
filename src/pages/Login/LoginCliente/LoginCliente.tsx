import React from 'react'
import bg from '../../../assets/images/bg-login1.png'
import logo from '../../../assets/images/telemetrixLogo.png'
import S from './LoginCliente.module.css'
import logoCliente from '../../../assets/images/loremipsumLogo.png'

const LoginCliente = () => {
  return (
    <div className="container-fluid p-0">
      <section className={S.section}>
        <div className={S.banner}>
          <img src={bg} className="img-fluid w-100" alt="pessoas trabalhando" />
          </div>
        <div className={S.formulario}>
          <img src={logo} className="img-fluid w-50 p-5" alt="logo telemetrix" />
          <img src={logoCliente} className="img-fluid w-50 p-5 pb-0" alt="logo do cliente" />
          <form className="mb-3 d-flex flex-column w-50">
            <div className="form-floating mb-3 w-100">
              <input type="email" className="form-control rounded-0" id="floatingInput1" placeholder="Email"
                required />
              <label htmlFor="floatingInput1" className='text-secondary'>Email</label>
            </div>
            <div className="form-floating mb-3 w-100">
              <input type="password" className="form-control rounded-0" id="floatingInput2" placeholder="Senha"
                required />
              <label htmlFor="floatingInput2" className='text-secondary'>Digite Sua Senha</label>
            </div>
            <button type="submit" className="btn btn-primary w-100 mx-auto border-0 p-2">Entrar</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default LoginCliente