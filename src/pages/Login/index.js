import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo-header.svg';

import './styles.css';

const Login = () => {
  return (
    <section className='section-login'>
      <Logo className='logo-login' />
      <form className='form-login'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='email@example.com'
        />
        <label htmlFor='password'>Senha</label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Senha'
        />
        <button>Entrar</button>
      </form>
    </section>
  );
};

export default Login;
