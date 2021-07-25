import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthContext } from '../../context/AuthContext';
import api from '../../services/api';
import logo from '../../assets/logo-header.svg';

import Input from '../Input';

import './styles.css';

const schema = yup.object().shape({
  name: yup.string().required('Este campo é obrigatorio.'),
});

const Account = () => {
  const { userInfo } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [isFormSentSuccess, setIsFormSentSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({
    name,
    email,
    rua,
    bairro,
    numero,
    cidade,
    uf,
    telephone,
  }) => {
    const formData = {
      name,
      email,
      rua,
      numero,
      bairro,
      cidade,
      uf,
      telephone,
    };

    try {
      setLoading(true);
      const response = await api.put(`/users/${userInfo.id}`, formData);

      if (response.status === 200) {
        setIsFormSentSuccess(true);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setIsFormSentSuccess(false);
      setError(err.response.data.message);
    }
  };

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get(`/users/${userInfo.id}`);
      setData(response.data);
    }
    fetchUser();
  }, [userInfo, isFormSentSuccess]);

  useEffect(() => {
    if (data) {
      setValue('name', data.name);
      setValue('email', data.email);
      setValue('rua', data.rua);
      setValue('numero', data.numero);
      setValue('bairro', data.bairro);
      setValue('cidade', data.cidade);
      setValue('uf', data.uf);
    }
  }, [setValue, data]);

  if (data)
    return (
      <div className='account-container'>
        <div className='account-image'>
          <img src={logo} alt='Logo' />
        </div>
        <div className='account-content'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
              <Input
                label='Nome'
                name='name'
                type='text'
                register={register}
                errors={errors}
                required
              />
              <Input
                label='Email'
                name='email'
                type='email'
                register={register}
                errors={errors}
                required
                disabled
              />
            </div>
            <div className='form-group'>
              <Input
                label='Rua'
                name='rua'
                type='text'
                register={register}
                errors={errors}
                required
              />
              <Input
                label='Número'
                name='numero'
                type='text'
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className='form-group'>
              <Input
                label='Bairro'
                name='bairro'
                type='text'
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className='form-group'>
              <Input
                label='Cidade'
                name='cidade'
                type='text'
                register={register}
                errors={errors}
                required
              />
              <Input
                label='Estado'
                name='uf'
                type='text'
                register={register}
                errors={errors}
                required
              />
            </div>
            {loading ? (
              <button>Atualizando...</button>
            ) : (
              <button>Atualizar</button>
            )}
          </form>
          {error && <p>{error}</p>}
        </div>
      </div>
    );
  else return null;
};

export default Account;
