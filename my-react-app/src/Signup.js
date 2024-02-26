
import React, { useState } from 'react';

const Signup = ({ handleSignup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAccountCreated, setAccountCreated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert('Invalid: Please fill in all fields.');
      return;
    }

    handleSignup(name, email, password);
    setAccountCreated(true);
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>

      {isAccountCreated && <p>Account created successfully! Please login.</p>}
    </div>
  );
};

export default Signup;
