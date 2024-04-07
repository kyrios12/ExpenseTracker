import { useState } from 'react';

const useEmailConverter = (initialEmail) => {
  const [username, setUsername] = useState(initialEmail.split('@')[0]);

  const setEmail = (email) => {
    setUsername(email.split('@')[0]);
  };

  return [username, setEmail];
};

export default useEmailConverter;