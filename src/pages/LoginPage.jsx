import React, { useState } from 'react';
import Login from '../components/Login';
import Header from '../components/Header';
import Footer from '../components/Footer';

function LoginPage() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    // Simulamos un login exitoso
    setUser(userData);
    alert(`¡Bienvenido ${userData.email}!`);
    // Acá después podrías redirigir al usuario a la página principal
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header isLoginPage={true} />
      
      <div className="flex-grow flex items-center justify-center py-12 px-4">
        {user ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">¡Hola {user.email}!</h2>
            <p className="mb-4">Ya iniciaste sesión correctamente.</p>
            <button 
              onClick={() => setUser(null)}
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
      
      <Footer />
    </div>
  );
}

export default LoginPage;