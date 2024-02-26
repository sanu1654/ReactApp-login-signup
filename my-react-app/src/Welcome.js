
import React, { useEffect } from 'react';

const Welcome = ({ userData, handleLogout }) => {
  useEffect(() => {
  
    const intervalId = setInterval(() => {
      alert('Hello, are you all right?');
    }, 30000);

    
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div>
      <h2>Welcome, {userData.name}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Welcome;
