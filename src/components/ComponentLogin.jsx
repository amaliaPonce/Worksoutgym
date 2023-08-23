import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '../api';
import '../styles/login.css';


function ComponentLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setIsLoading(true);

    try {
      const data = await post('http://localhost:8000/users/login', {
        email,
        password,
      });

      console.log(data);

      if (data.status === 'ok') {
        navigate('/dashboard');
      } else {
        setError(data.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={`login-input ${error && 'error'}`}
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"
        />
        <input
          className={`login-input ${error && 'error'}`}
          type="password"
          placeholder="Contraseña"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <button className="login-button" type="submit" disabled={isLoading}>
          {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
        {error && <p className="login-error">{error}</p>}
        {isLoading && <p className="login-loading">Cargando...</p>}
      </form>
    </div>
  );
}

export default ComponentLogin;
