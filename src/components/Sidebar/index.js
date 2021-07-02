import React from 'react';
import CustomLink from '../CustomLink';

import './styles.css';

const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <ul className='side-nav'>
        <li className='side-item'>
          <CustomLink
            activeOnlyWhenExact={true}
            to='/dashboard'
            label='Dashboard'
          />
        </li>
        <li className='side-item'>
          <CustomLink to='/dashboard/adocoes' label='Adoções' />
        </li>
        <li className='side-item'>
          <CustomLink to='/dashboard/animais' label='Animais' />
        </li>
        <li className='side-item'>
          <CustomLink to='/dashboard/users' label='Usuários' />
        </li>
        <li className='side-item'>
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
