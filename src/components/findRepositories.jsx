import React, { useState } from 'react';
import Github from './Github';
export default function FindRepository() {
  const [email, setEmail] = useState('');
  const [gitHubUser, setGitHubUser] = useState('');
  const handleClickButton = (evento) => {
    console.log(email);
    setGitHubUser(email);
  };

  return (
    <div>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.currentTarget.value)}
        value={email}
      />
      <button onClick={handleClickButton}>Buscar</button>
      <Github usuario={gitHubUser} />
    </div>
  );
}

{
}
