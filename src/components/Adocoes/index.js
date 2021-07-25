import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

const Adocoes = () => {
  const [adoptions, setAdoptions] = useState([]);

  useEffect(() => {
    async function fetchAdoptions() {
      const response = await api.get('/adoption');

      setAdoptions(response.data);
    }

    fetchAdoptions();
  }, []);
  return (
    // <div className='continer-adoptions'>
    <div className='list-adoptions'>
      <h3>Solicitações de adoção</h3>
      <ul>
        {adoptions.rows &&
          adoptions.rows.map((adoption, index) => (
            <li key={adoption.id}>
              <div className='adoption-info'>
                <span>{index + 1}</span>
                <div className='adoption-item'>
                  <p>Adotante</p>
                  <span>{adoption.user.name}</span>
                </div>
                <div className='adoption-item'>
                  <p>Animal</p>
                  <span>{adoption.animal.name}</span>
                </div>
                <div className='adoption-item'>
                  <p>Status</p>
                  <span>
                    {adoption.animal.status === 'nao adotado'
                      ? 'Pendente'
                      : 'Adotado'}
                  </span>
                </div>

                <div>
                  <Link to={`/dashboard/confirm-adoption/${adoption.id}`}>
                    Visualizar
                  </Link>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
    // </div>
  );
};

export default Adocoes;
