import React, { createContext } from "react";
import firebase from "../firebase/firebase";
import "firebase/database";

export const AppContext = createContext();

const Store = ({ children }) => {
   

  return (
    <AppContext.Provider
      value={{
        
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Store;