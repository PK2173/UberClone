import React, { createContext, useState } from 'react';

// Create a Context for user data
export const UserDataContext = createContext();

const UserContext = ({ children }) => {
// State to store user data
  const [users, setUsers] = useState({});

  return (
    <UserDataContext.Provider value={{users, setUsers}}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
