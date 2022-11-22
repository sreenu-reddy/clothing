import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListner,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.util";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    onAuthStateChangedListner((user) => {
      if (user) createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });
  });

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
