import React, { createContext } from "react";

export const ConsoleContext = createContext();

export const ConsoleProvider = ({ children }) => {
  const checkConsole = () => console.log("check");

  return (
    <ConsoleContext.Provider value={{ checkConsole }}>
      {children}
    </ConsoleContext.Provider>
  );
};
