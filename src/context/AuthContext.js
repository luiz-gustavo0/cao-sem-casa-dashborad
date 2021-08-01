import React, { createContext, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [userLogged, setUserLogged] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    setError(null);

    const storagedToken = localStorage.getItem('@token');
    const sotragedUser = localStorage.getItem('@user');

    if (storagedToken && sotragedUser) {
      setUserInfo(JSON.parse(sotragedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      setUserLogged(true);
    }
    setLoading(false);
  }, []);

  async function login(email, password) {
    try {
      setError(null);
      setLoading(true);

      const response = await api.post('/auth', { email, password });

      if (response.status !== 200) {
        throw new Error(response);
      }

      const { token, user } = response.data;

      if (user.role !== 'admin') {
        throw new Error('Não autorizado!');
      }

      localStorage.setItem('@token', token);
      localStorage.setItem('@user', JSON.stringify(user));

      api.defaults.headers.Authorization = `Bearer ${token}`;

      setUserInfo(user);
      setUserLogged(true);

      history.push('/dashboard');
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError(err.message);
      }
      setUserLogged(false);
    } finally {
      setLoading(false);
    }
  }
  const logout = useCallback(() => {
    setUserInfo(null);
    setError(null);
    setLoading(false);
    setUserLogged(false);

    localStorage.removeItem('@token');
    localStorage.removeItem('@user');
    history.push('/');
  }, [history]);

  return (
    <AuthContext.Provider
      value={{ login, logout, userInfo, error, loading, userLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
};
