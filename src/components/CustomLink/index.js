import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './styles.css';

const CustomLink = ({ label, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  return (
    <div className={match ? 'active' : ''}>
      <Link to={to}>{label}</Link>
    </div>
  );
};

export default CustomLink;
