import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
  const { userLogged } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
