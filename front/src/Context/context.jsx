  import React, { createContext, useContext, useState } from "react";
  import useLocalStorage from "../hooks/useLocalStorage";

  const AppContext = createContext()

  const AppProvider = ({children}) => {
    const [showLinks, setShowLinks]= useLocalStorage('showLinks', false)
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);


    function handleDarkMode(arg) {
      if(arg=="no")return document.getElementById('root').classList.add(darkMode ? 'dark-mode' : 'light-mode');
      setDarkMode(prevDarkMode => {
        document.getElementById('root').classList.add(!prevDarkMode ? 'dark-mode' : 'light-mode');
        document.getElementById('root').classList.remove(!prevDarkMode ? 'light-mode' : 'dark-mode');
        return !prevDarkMode;
      });
    }

    return <AppContext.Provider value={{
      showLinks,setShowLinks,
      darkMode,setDarkMode,
      handleDarkMode
      }} >
        {children}
    </AppContext.Provider>
  }

  export const useGlobalState = () => {
    return useContext(AppContext);
  }

  export {AppContext, AppProvider}