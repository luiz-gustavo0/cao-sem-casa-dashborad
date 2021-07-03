import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Input from '../Input';

import './styles.css';

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

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <form className='form'>
      <Input
        label='Nome'
        type='text'
        name='name'
        placeholder='Nome do animal'
        register={register}
        errors={errors}
        required
      />
      <div className='group'>
        <Input
          label='Idade'
          type='number'
          name='idade'
          placeholder='Idade do animal'
          register={register}
          errors={errors}
          required
        />
        <Input
          label='Peso'
          type='number'
          name='peso'
          placeholder='Peso do animal'
          register={register}
          errors={errors}
          required
        />
      </div>
      <div className='group'>
        <Input
          label='Raça'
          type='text'
          name='raca'
          placeholder='Raça do animal'
          register={register}
          errors={errors}
          required
        />
        <Input
          label='Espécie'
          type='text'
          name='tipo'
          placeholder='Ex: cachorro ou gato'
          register={register}
          errors={errors}
          required
        />
        <div className='input-group'>
          <label htmlFor='sexo'>Sexo</label>
          <select {...register('sexo')} id='sexo'>
            <option value='' disabled>
              Selecione
            </option>
            <option value='F'>Fêmea</option>
            <option value='M'>Macho</option>
          </select>
        </div>
      </div>
      <div className='group'>
        <Input
          label='Vacinado'
          type='text'
          name='vacinado'
          placeholder='Ex: sim ou não'
          register={register}
          errors={errors}
          required
        />
        <Input
          label='Vermifugado'
          type='text'
          name='vermifugado'
          placeholder='Ex: sim ou não'
          register={register}
          errors={errors}
          required
        />
        <Input
          label='Castrado'
          type='text'
          name='castrado'
          placeholder='Ex: sim ou não'
          register={register}
          errors={errors}
          required
        />
      </div>
      <div className='group-select'>
        <Input
          type='file'
          name='file'
          register={register}
          errors={errors}
          required
        />
      </div>
      <button>Cadastrar</button>
    </form>
  );
};

export default Form;
