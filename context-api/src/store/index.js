/* eslint-disable react/jsx-no-undef */
import { ThemeProvider } from "./ThemeContext";
import { ConsoleProvider } from "./Console";
import { GlobalProvider } from "./GlobalContext";

export const ContainerProvider = ({ children }) => {
  return (
    <>
      <GlobalProvider>
        <ConsoleProvider>
          {children}
          {/* <ThemeProvider>{children}</ThemeProvider> */}
        </ConsoleProvider>
      </GlobalProvider>
    </>
  );
};
