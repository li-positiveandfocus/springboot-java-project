import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

//1. create a context
export const AuthContext = createContext();

// const authContext = useContext(AuthContext);
export const useAuth = () => useContext(AuthContext);

// Share the created context with other components
// provide the context to the children parameter

export default function AuthProvider({ children }) {
  // Put some state in the context
  const [number, setNumber] = useState(10);

  const [isAuthenticated, setAuthenticated] = useState(false);

  // increase number by 1 every 10 seconds
  //   setInterval(() => setNumber(number + 1), 10000);

  function login(username, password) {
    if (username === "in28minutes" && password === "password") {
      //   authContext.setAuthenticated(true); -> no need to use authContext, because we are already in the context
      setAuthenticated(true);
      return true;
    } else {
      //   authContext.setAuthenticated(false);
      setAuthenticated(false);
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
  }

  const valueToBeShared = {
    number,
    isAuthenticated,
    setAuthenticated,
    login,
    logout,
  };

  return (
    // <AuthContext.Provider value={{ number, isAuthenticated, setAuthenticated }}>
    <AuthContext.Provider value={valueToBeShared}>
      {children}
    </AuthContext.Provider>
  );
}

// in TodoApp.jsx, wrap the BrowserRouter with AuthProvider, so that all the components inside the AuthProvider will be the children of AuthProvider
