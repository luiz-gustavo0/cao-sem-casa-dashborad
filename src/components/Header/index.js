import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo-header.svg';
import Avatar from '../../assets/avatar.png';

import './styles.css';

const Header = () => {
  return (
    <header className='header'>
      <Logo title='Logo' className='logo' />
      <nav className='user-nav'>
        <div className='user'>
          <img src={Avatar} alt='Foto usuário' />
          <span className='user-name'>Admin</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
