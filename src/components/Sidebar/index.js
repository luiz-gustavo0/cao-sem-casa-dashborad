import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaw,
  faUserEdit,
  faUser,
  faDatabase,
  faDog,
} from '@fortawesome/free-solid-svg-icons';
import CustomLink from '../CustomLink';

import './styles.css';

const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <ul className='side-nav'>
        <li className='side-item'>
          <FontAwesomeIcon icon={faDatabase} color='#fff' />
          <CustomLink
            activeOnlyWhenExact={true}
            to='/dashboard'
            label='Dashboard'
          />
        </li>
        <li className='side-item'>
          <FontAwesomeIcon icon={faPaw} color='#fff' />
          <CustomLink to='/dashboard/adocoes' label='Adoções' />
        </li>
        <li className='side-item'>
          <FontAwesomeIcon icon={faDog} color='#fff' />

          <CustomLink to='/dashboard/animais' label='Animais' />
        </li>
        <li className='side-item'>
          <FontAwesomeIcon icon={faUser} color='#fff' />
          <CustomLink to='/dashboard/users' label='Usuários' />
        </li>
        <li className='side-item'>
          <FontAwesomeIcon icon={faUserEdit} color='#fff' />
          <CustomLink to='/dashboard/conta' label='Meus Dados' />
        </li>
      </ul>

      <div className='legal'>
        &copy; 2021 Cão sem casa. Todos os direitos reservados.
      </div>
    </nav>
  );
};

export default Sidebar;
