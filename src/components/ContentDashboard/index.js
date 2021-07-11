import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Card from '../Card';

import './styles.css';

const ContentDashboard = () => {
  const [dataAnimals, setDataAnimals] = useState([]);
  const [dataAdoptions, setDataAdoptions] = useState([]);
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    async function fetchAnimals() {
      const response = await api.get('/all-pets');

      setDataAnimals(response.data);
    }

    fetchAnimals();
  }, [handleDelete]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await api.get('/users');

      setDataUsers(response.data);
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    async function fetchAdoptions() {
      const response = await api.get('/adoption');

      setDataAdoptions(response.data);
    }

    fetchAdoptions();
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function handleDelete(id) {
    const response = await api.delete(`/pets/${id}`);
  }

  return (
    <div className='dashboard-container'>
      <div className='card-container'>
        <Card
          title='Animais cadastrados'
          total={dataAnimals.count}
          className='card-animals'
        />
        <Card
          title='Total de adoções'
          total={dataAdoptions.count}
          className='card-adocoes'
        />
        <Card
          title='Usuários cadastrados'
          total={dataUsers.count}
          className='card-users'
        />
      </div>
      <div className='list'>
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
                    <button onClick={() => handleDelete(animal.id)}>
                      Excluir
                    </button>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className='list'>
        <h3>Adoções</h3>
        <ul>
          {dataAdoptions.rows &&
            dataAdoptions.rows.map((adoption, index) => (
              <li key={adoption.id}>
                <div className='adoption-info'>
                  <span>{index + 1}</span>
                  <div className='adoption-animal'>
                    <span className='animal'>Animal</span>
                    <span>{adoption.animal.name}</span>
                  </div>

                  <div className='adoption-user'>
                    <span className='adotante'>Adotante</span>
                    <span>{adoption.user.name}</span>
                  </div>

                  <div className='btn-group'>
                    <Link
                      className='btn-confirm-adoption'
                      to={`/dashboard/confirm-adoption/${adoption.id}`}
                    >
                      Confirmar
                    </Link>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ContentDashboard;
