import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import api from '../../services/api';

import './styles.css';

const UserProfile = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      const response = await api.get(`/users/${id}`);

      if (response.status !== 200) {
        setError('Usário não encontrado');
      }

      setData(response.data);
    }

    fetchUserData();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (data)
    return (
      <div className='user-container'>
        {/* <h3>Dados do usuário</h3> */}
        <div className='user-content'>
          <div>
            <h3>Informções de contato</h3>
            <p>Nome: {data.name}</p>
            <p>Email: {data.email}</p>
          </div>

          <div>
            <h3>Endereço</h3>
            <p>Rua: {data.rua}</p>
            <p>Bairro: {data.bairro}</p>
            <p>Número: {data.numero}</p>
            <p>Cidade: {data.cidade}</p>
            <p>Estado: {data.uf}</p>
          </div>
        </div>
      </div>
    );
  else return null;
};

export default UserProfile;
