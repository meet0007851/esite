import React, { createContext } from 'react'

// Better to use PascalCase for context
export const authDataContext = createContext()

function AuthContext({ children }) {
  const serverUrl = "http://localhost:8000" 
  
  const value = {
    serverUrl
  }

  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  )
}

export default AuthContext
