import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <ul className='side-nav'>
        <li className='side-item active'>
          <a href='#'>Home</a>
          {/* <Link to='/'>Dashboard</Link> */}
        </li>
        <li className='side-item'>
          <a href='#'>Home</a>
          {/* <Link to='adocao'>Adoções</Link> */}
        </li>
        <li className='side-item'>
          <a href='#'>Home</a>
          {/* <Link to='/animais'>Animais</Link> */}
        </li>
        <li className='side-item'>
          <a href='#'>Home</a>
          {/* <Link to='/users'>Usuários</Link> */}
        </li>
        <li className='side-item'>
          <a href='#'>Home</a>
          {/* <Link to='/conta'>Meus Dados</Link> */}
        </li>
      </ul>

      <div className='legal'>
        &copy; 2021 Cão sem casa. Todos os direitos reservados.
      </div>
    </nav>
  );
};

export default Sidebar;
