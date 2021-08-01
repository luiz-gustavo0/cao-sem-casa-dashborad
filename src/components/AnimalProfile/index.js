import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import api from '../../services/api';

import Input from '../Input';

import './styles.css';

const schema = yup.object().shape({
  name: yup.string().required('Este campo é obrigatorio.'),
  peso: yup.number().min(1).required('Este campo é obrigatorio.'),
  idade: yup.number().min(1).required('Este campo é obrigatorio.'),
  raca: yup.string().required('Este campo é obrigatorio.'),
  tipo: yup
    .string()
    .required('Este campo é obrigatorio.')
    .equals(['cachorro', 'gato'], 'Digite cachorro ou gato'),
  status: yup
    .string()
    .required('Este campo é obrigatorio.')
    .equals(['adotado', 'nao adotado'], 'Digite adotado ou não adotado'),
  castrado: yup
    .string()
    .required('Este campo é obrigatorio.')
    .equals(['sim', 'não'], 'Digite sim ou não'),
  vermifugado: yup
    .string()
    .required('Este campo é obrigatorio.')
    .equals(['sim', 'não'], 'Digite sim ou não'),
  vacinado: yup
    .string()
    .required('Este campo é obrigatorio.')
    .equals(['sim', 'não'], 'Digite sim ou não'),
  sexo: yup.string().required('Este campo é obrigatorio.'),
  description: yup
    .string('Insira uma descrição')
    .required('Este campo é obrigatorio.'),
});

const AnimalProfile = () => {
  const { id } = useParams();
  const [animalInfo, setAnimalInfo] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    async function fetchAnimal() {
      const response = await api.get(`/pets/${id}`);

      setAnimalInfo(response.data);
    }

    fetchAnimal();
  }, [id]);

  useEffect(() => {
    if (animalInfo) {
      setValue('name', animalInfo.name);
      setValue('peso', animalInfo.peso);
      setValue('idade', animalInfo.idade);
      setValue('raca', animalInfo.raca);
      setValue('tipo', animalInfo.tipo);
      setValue('status', animalInfo.status);
      setValue('vacinado', animalInfo.vacinado);
      setValue('vermifugado', animalInfo.vermifugado);
      setValue('castrado', animalInfo.castrado);
      setValue('sexo', animalInfo.sexo);
      setValue('description', animalInfo.description);
    }
  }, [animalInfo, setValue]);

  const onSubmit = async ({
    name,
    peso,
    idade,
    raca,
    tipo,
    status,
    vermifugado,
    vacinado,
    castrado,
    sexo,
    description,
  }) => {
    const data = {
      name,
      peso,
      idade,
      raca,
      tipo,
      status,
      vermifugado,
      vacinado,
      castrado,
      sexo,
      description,
    };

    const response = await api.put(`/pets/${id}`, data);

    console.log(response);
  };

  if (animalInfo)
    return (
      <>
        <div className='animal-info-container'>
          <h3>Dados do animal</h3>

          <div className='animal-info-content'>
            <img
              className='animal-image'
              src={animalInfo.foto_url}
              alt={`Foto de um ${animalInfo.tipo}`}
            />

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='group'>
                <Input
                  label='Nome'
                  name='name'
                  type='text'
                  register={register}
                  errors={errors}
                  required
                />
              </div>
              <div className='group'>
                <Input
                  label='Raça'
                  name='raca'
                  type='text'
                  register={register}
                  errors={errors}
                  required
                />
                <Input
                  label='Espécie'
                  name='tipo'
                  type='text'
                  register={register}
                  errors={errors}
                  required
                />
                <Input
                  label='Status'
                  name='status'
                  type='text'
                  register={register}
                  errors={errors}
                  required
                />
              </div>
              <div className='group'>
                <Input
                  label='Peso'
                  name='peso'
                  type='number'
                  register={register}
                  errors={errors}
                  required
                  min='1'
                />
                <Input
                  label='Idade'
                  name='idade'
                  type='number'
                  register={register}
                  errors={errors}
                  required
                  min='1'
                />
                <div>
                  <label htmlFor='sexo'>Sexo</label>
                  <select {...register('sexo', { required: true, setValue })}>
                    <option value='' disabled>
                      Seleceione
                    </option>
                    <option value='F'>Fêmea</option>
                    <option value='M'>Macho</option>
                  </select>
                </div>
              </div>
              <div className='group'>
                <Input
                  label='Castrado'
                  name='castrado'
                  type='text'
                  register={register}
                  errors={errors}
                  required
                />
                <Input
                  label='Vermifugado'
                  name='vermifugado'
                  type='text'
                  register={register}
                  errors={errors}
                  required
                />
                <Input
                  label='Vacinado'
                  name='vacinado'
                  type='text'
                  register={register}
                  errors={errors}
                  required
                />
              </div>
              <div className='group'>
                <div>
                  <label htmlFor='description'>Descrição</label>
                  <textarea
                    {...register('description', { required: true })}
                    cols='30'
                    rows='5'
                  ></textarea>
                  <p className='error'> {errors.description?.message}</p>
                </div>
              </div>

              <button type='submit'>Atualizar</button>
            </form>
          </div>
        </div>
      </>
    );
  else return null;
};

export default AnimalProfile;
