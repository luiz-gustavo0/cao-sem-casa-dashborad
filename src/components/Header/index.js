import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { ReactComponent as Logo } from '../../assets/logo-header.svg';
import Avatar from '../../assets/avatar.png';

import './styles.css';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
  const { logout } = useContext(AuthContext);

  return (
    <header className='header'>
      <Logo title='Logo' className='logo' />
      <nav className='user-nav'>
        <div className='user'>
          <img src={Avatar} alt='Foto usuário' />
          <span className='user-name'>Admin</span>
          <button onClick={logout}>
            <FontAwesomeIcon icon={faSignOutAlt} color='#706c61' />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
