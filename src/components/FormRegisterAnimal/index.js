import React, { useState } from 'react';
import api from '../../services/api';

import './styles.css';

const FormRegisterAnimal = () => {
  const [name, setName] = useState('');
  const [peso, setPeso] = useState(0);
  const [idade, setIdade] = useState(0);
  const [raca, setRaca] = useState('');
  const [tipo, setTipo] = useState('');
  const [castrado, setCastrado] = useState('');
  const [vermifugado, setVermifugado] = useState('');
  const [vacinado, setVacinado] = useState('');
  const [sexo, setSexo] = useState('');
  const [file, setFile] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append('name', name);
    formData.append('peso', peso);
    formData.append('idade', idade);
    formData.append('raca', raca);
    formData.append('tipo', tipo);
    formData.append('castrado', castrado);
    formData.append('vermifugado', vermifugado);
    formData.append('vacinado', vacinado);
    formData.append('sexo', sexo);
    formData.append('file', file.foto_url);

    try {
      setLoading(true);
      const response = await api.post('/pets', formData);
      if (response.status === 201) {
        setLoading(false);
        setName('');
        setPeso(0);
        setIdade(0);
        setRaca('');
        setTipo('');
        setCastrado('');
        setVacinado('');
        setVermifugado('');
        setSexo('');
        setFile({});
      }
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
      console.log('ERROR: ', err.response.data.message);
    }
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='group'>
        <div>
          <label htmlFor='name'>Nome</label>
          <input
            type='text'
            name='name'
            id='name'
            required
            value={name}
            onChange={({ target }) => setName(target.value)}
            placeholder='Nome do animal'
          />
        </div>
      </div>
      <div className='group'>
        <div>
          <label htmlFor='peso'>Peso</label>
          <input
            type='number'
            name='peso'
            placeholder='Peso do animal'
            required
            min='1'
            value={peso}
            onChange={({ target }) => setPeso(target.value)}
          />
        </div>
        <div>
          <label htmlFor='idade'>Idade</label>
          <input
            type='number'
            name='idade'
            placeholder='Idade do animal'
            min='1'
            required
            value={idade}
            onChange={({ target }) => setIdade(target.value)}
          />
        </div>
      </div>
      <div className='group'>
        <div>
          <label htmlFor='raca'>Raça</label>
          <input
            type='text'
            name='raca'
            placeholder='Raça do animal'
            required
            value={raca}
            onChange={({ target }) => setRaca(target.value)}
          />
        </div>
        <div>
          <label htmlFor='tipo'>Espécie</label>
          <input
            type='text'
            name='tipo'
            placeholder='Ex: cachorro'
            required
            value={tipo}
            onChange={({ target }) => setTipo(target.value)}
          />
        </div>
      </div>
      <div className='group'>
        <div>
          <label htmlFor='castrado'>Castrado</label>
          <input
            type='text'
            name='castrado'
            placeholder='Digite sim ou não'
            required
            value={castrado}
            onChange={({ target }) => setCastrado(target.value)}
          />
        </div>
        <div>
          <label htmlFor='vermifugado'>Vermifugado</label>
          <input
            type='text'
            name='vermifugado'
            placeholder='Digite sim ou não'
            required
            value={vermifugado}
            onChange={({ target }) => setVermifugado(target.value)}
          />
        </div>
        <div>
          <label htmlFor='vacinado'>Vacinado</label>
          <input
            type='text'
            name='vacinado'
            placeholder='Digite sim ou não'
            required
            value={vacinado}
            onChange={({ target }) => setVacinado(target.value)}
          />
        </div>
      </div>
      <div className='group group-select'>
        <div>
          <label htmlFor='sexo'>Sexo</label>
          <select
            name='sexo'
            value={sexo}
            onChange={({ target }) => setSexo(target.value)}
            required
          >
            <option value='' disabled>
              Seleceione
            </option>
            <option value='F'>Fêmea</option>
            <option value='M'>Macho</option>
          </select>
        </div>
        <div>
          <label htmlFor='file'>Foto</label>
          <input
            type='file'
            name='file'
            required
            onChange={({ target }) => setFile({ foto_url: target.files[0] })}
          />
        </div>
      </div>
      {loading ? (
        <button disabled>Cadastrando...</button>
      ) : (
        <button>Cadastrar</button>
      )}

      {error && <p>{error}</p>}
    </form>
  );
};

export default FormRegisterAnimal;
