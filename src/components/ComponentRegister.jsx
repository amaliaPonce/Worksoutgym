import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ComponentRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Realiza la lógica de registro aquí
    try {
      const response = await fetch('http://localhost:8000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (response.ok) {
        // Registro exitoso, redirigir a la página de inicio de sesión
        // Puedes utilizar Navigate aquí si estás dentro de un componente de ruta
        // O window.location para redirigir directamente
        window.location.href = '/login';
      } else {
        // Manejar el caso de error en el registro
        console.error('Error en el registro');
      }
    } catch (error) {
      console.error('Error en el registro', error);
    }
  };

  return (
    <div>
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></p>
    </div>
  );
}

export default ComponentRegister;
