import React, { createContext, useReducer } from "react";

const initialState = {
  data: [],
  count: 0,
  isDarkTheme: false,
};

export const GlobalContext = createContext(initialState);

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "INCREMENT_COUNT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "IS_DARK_MODE":
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };
    default:
      return state;
  }
};

// const toggleTheme = () => setIsDarkTheme(prevTheme => !prevTheme)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
