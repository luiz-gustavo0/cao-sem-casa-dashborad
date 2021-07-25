import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

const ConfirmAdoption = () => {
  const [adoption, setAdoption] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchAdoption() {
      const response = await api.get(`/adoption/${id}`);

      setAdoption(response.data);
    }
    fetchAdoption();
  }, [id]);

  const sendMail = async () => {
    try {
      const response = await api.get(`/sendmail/${id}`);

      console.log(response.data);
    } catch (err) {
      setError(err.response.data.message);
      console.log(err.response.data.message);
    }
  };

  const confirmAdoption = async () => {
    try {
      const response = await api.put(`/adoption/${id}`);

      console.log(response.data);
    } catch (err) {
      setError(err.response.data.message);
      console.log(err.response.data.message);
    }
  };

  const cancelAdoption = async () => {
    try {
      const response = await api.delete(`/adoption/${id}`);

      if (response.status === 200) {
        history.push('/dashboard/adocoes');
      }

      console.log(response.data);
    } catch (err) {
      setError(err.response.data.message);
      console.log(err.response.data.message);
    }
  };

  if (adoption)
    return (
      <div className='adoption-info-container'>
        <h3>Solicitação de adoção</h3>
        <div className='adoption-info-content'>
          <div className='adoption-info-animal'>
            <h4>Dados do Animal</h4>
            <div className='box-info-animal'>
              <img
                src={adoption.animal.foto_url}
                alt={`Imagem de um ${adoption.animal.tipo}`}
              />
              <div>
                <p>Nome: {adoption.animal.name}</p>
                <p>Status: {adoption.animal.status}</p>
              </div>
            </div>
          </div>
          <div className='adption-info-user'>
            <h4>Dados do Adotante</h4>
            <div className='box-info-user'>
              <p>
                <span>Nome: </span>
                {adoption.user.name}
              </p>
              <p>
                <span>Email: </span>
                {adoption.user.email}
              </p>
              <p>
                <span>Cidade: </span>
                {adoption.user.cidade}
              </p>
              <p>
                <span>Estado: </span>
                {adoption.user.uf}
              </p>
            </div>
            {adoption.animal.status === 'adotado' ? (
              <div className='btn-group'>
                <button className='btn-delete'>Excluir</button>
              </div>
            ) : (
              <div className='btn-group'>
                <button className='btn-mail' onClick={sendMail}>
                  Enviar Email
                </button>
                <button className='btn-success' onClick={confirmAdoption}>
                  Confirmar Adoção
                </button>
                <button className='btn-delete' onClick={cancelAdoption}>
                  Cancelar Solicitação
                </button>
              </div>
            )}
            {error && <p>{error}</p>}
          </div>
        </div>
      </div>
    );
  else return null;
};

export default ConfirmAdoption;
