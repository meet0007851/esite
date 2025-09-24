import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { authDataContext } from "./authContext";

export const userDataContext = createContext();

function UserContext({ children }) {
  const [userData, setUserData] = useState(null); // <-- was "" (string), now null
  const { serverUrl } = useContext(authDataContext);

  const getCurrentUser = async () => {
    if (!serverUrl) {
      console.warn("serverUrl is not defined");
      return;
    }

    try {
      const result = await axios.get(serverUrl + "/api/user/getCurrentUser", {
        withCredentials: true,
      });
      setUserData(result.data);
      console.log("Current User:", result.data);
    } catch (error) {
      setUserData(null);
      console.error("getCurrentUser error:", error.response?.data || error.message); // <-- better logging
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []); // <-- added dependency so it re-runs when serverUrl is ready

  const value = {
    userData,
    setUserData,
    getCurrentUser,
  };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
}

export default UserContext;
