import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

const Users = () => {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await api.get('/users');

      setDataUsers(response.data);
    }

    fetchUsers();
  }, []);
  return (
    <div className='list-users'>
      <h3>Usuários</h3>
      <ul>
        {dataUsers.rows &&
          dataUsers.rows.map((user, index) => (
            <li key={user.id}>
              <div className='user-info'>
                <span>{index + 1}</span>
                <span>{user.name}</span>
                <span>{user.email}</span>

                <Link to={`/dashboard/user-profile/${user.id}`}>
                  Ver perfil
                </Link>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Users;
