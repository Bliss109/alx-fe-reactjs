import React, { createContext, useState } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children, userData }) => {
  const [user, setUser] = useState(userData);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext; 
