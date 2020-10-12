import React, { useEffect, useState } from "react";
import firebase from "./firebase";

export const AuthContex = React.createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(setcurrentUser);
    
  }, []);
  return (
    <AuthContex.Provider value={{ currentUser }}>
      {children}
    </AuthContex.Provider>
  );
};
