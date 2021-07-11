import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import FormRegisterAnimal from '../FormRegisterAnimal';

import './styles.css';

const Animais = () => {
  const [dataAnimals, setDataAnimals] = useState([]);
  const [isFormActive, setIsFormActive] = useState(false);

  useEffect(() => {
    async function fetchAnimals() {
      const response = await api.get('/all-pets');

      setDataAnimals(response.data);
    }

    fetchAnimals();
  }, []);

  return (
    <div className='continer-animals'>
      {!isFormActive ? (
        <button className='btn-adicionar' onClick={() => setIsFormActive(true)}>
          + Adicionar
        </button>
      ) : (
        <button className='btn-fechar' onClick={() => setIsFormActive(false)}>
          x Fechar
        </button>
      )}
      <div className={`box-form ${isFormActive ? 'form-active' : ''}`}>
        <FormRegisterAnimal />
      </div>
      <div className='list-animals'>
        <h3>Animais</h3>
        <ul>
          {dataAnimals.rows &&
            dataAnimals.rows.map((animal, index) => (
              <li key={animal.id}>
                <div className='animal-info'>
                  <span>{index + 1}</span>
                  <span>{animal.name}</span>
                  <span>{animal.idade} anos</span>
                  <span>{animal.status}</span>
                  <div className='btn-group'>
                    <Link to={`/dashboard/animal-profile/${animal.id}`}>
                      Editar
                    </Link>
                    <button>Excluir</button>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Animais;
