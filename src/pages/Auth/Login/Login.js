import React, { useState } from 'react'
import './Login.css'
import Eye from '../../../assets/icons/Eye.svg'
import EyeBlocked from '../../../assets/icons/EyeBlocked.svg'

function Login() {

  const [showPassword, setShowPassword] = useState(false)

  
  return (
    <div className='login'>
      <div className='login__box'>
        <span className='brand'>Linkedfy</span>
        <h2>Un gusto verte</h2>
        <h1>Inicia Sesion<span>.</span></h1>
        <div className='externalLogin'>
          <img src='' alt='' />
          <img src='' alt='' />
          <img src='' alt='' />
          <img src='' alt='' />
        </div>
        <div className='login__formBox'>
          <div className='inputs'>
            <h4 className='inputLabel'>Correo</h4>
            <input type='email' required placeholder='gatito@fiufiu.com'/>
            <h4 className='inputLabel'>Contraseña</h4>
            <div className='passwordInput'>
              <input type={showPassword ? 'text' : 'password'} required placeholder='meow123'/>
              <button onClick={() => {setShowPassword(!showPassword)}}> <img src={showPassword ? EyeBlocked : Eye} alt='eye' /></button>

            </div>
            <a href='/login'>¿Olvidaste tu contraseña?</a>
          </div>
          <div className='buttons'>
            <button className='createAccout'>Crear Cuenta</button>
            <button className='loginAccount'>Iniciar Sesion</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login