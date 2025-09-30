import axios from "axios";
import React, { createContext } from "react";
import { useEffect } from "react";

export const authDataContext = createContext();

function AuthContext({ children }) {
  let serverUrl = "http://localhost:8000";

  

  let value = {
    serverUrl,
  };

  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  );
}

export default AuthContext;
