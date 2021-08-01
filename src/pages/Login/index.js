import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { ReactComponent as Logo } from '../../assets/logo-header.svg';
import Input from '../../components/Input';

import './styles.css';
import { AuthContext } from '../../context/AuthContext';
import { Redirect } from 'react-router-dom';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Insira im email válido')
    .required('Este campo é obrigatório.'),
  password: yup
    .string()
    .min(8, 'A senha deve conter no minimo 8 caracteres')
    .required('Este campo é obrigatorio.'),
});

const Login = () => {
  const { userLogged, login, loading, error } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email, password }) => {
    login(email, password);
  };

  if (userLogged)
    return (
      <Redirect
        to={{
          pathname: '/dashboard',
        }}
      />
    );

  return (
    <section className='section-login'>
      <Logo className='logo-login' />
      {error && <span className='login-error'>* {error}</span>}
      <form className='form-login' onSubmit={handleSubmit(onSubmit)}>
        <Input
          label='Email'
          type='email'
          name='email'
          placeholder='Digite seu email'
          register={register}
          errors={errors}
          required
        />
        <Input
          label='Senha'
          type='password'
          name='password'
          placeholder='Digite sua senha'
          register={register}
          errors={errors}
          required
        />
        {loading ? (
          <button disabled>Entrando...</button>
        ) : (
          <button>Entrar</button>
        )}
      </form>
    </section>
  );
};

export default Login;
