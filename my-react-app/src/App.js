
import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import Welcome from './Welcome';

const App = () => {
  const [isLogin, setLogin] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const handleToggle = () => {
    setLogin(!isLogin);
  };

  const handleLogin = (email, password) => {
    const storedData = JSON.parse(localStorage.getItem('users')) || [];

    const user = storedData.find(u => u.email === email && u.password === password);

    if (user) {
      setLoggedIn(true);
      setUserData(user);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleSignup = (name, email, password) => {
    const newUser = { name, email, password };
    const storedData = JSON.parse(localStorage.getItem('users')) || [];

    localStorage.setItem('users', JSON.stringify([...storedData, newUser]));
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserData({});
  };

  return (
    <div>
      {isLoggedIn ? (
        <Welcome userData={userData} handleLogout={handleLogout} />
      ) : (
        <>
          <div>
            <button onClick={handleToggle}>
              {isLogin ? 'Signup' : 'Login'}
            </button>
          </div>

          {isLogin ? (
            <Login handleLogin={handleLogin} />
          ) : (
            <Signup handleSignup={handleSignup} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
