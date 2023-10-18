import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";
import Button from "../Button";

import { ConsoleContext } from "../store/Console";

import { MyComponent } from "../component/Mycomponent";
import { GlobalContext } from "../store/GlobalContext";

const RandingPage = () => {
  const { state, dispatch } = useContext(GlobalContext);
  // const { isDarkTheme } = useContext(ThemeContext);
  const { checkConsole } = useContext(ConsoleContext);
  return (
    <div className={`App ${state.isDarkTheme ? "darkTheme" : "lightTheme"}`}>
      <h1>Theme Context Api</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quam
        quisquam enim minus, consectetur dignissimos vero beatae possimus
        reprehenderit sed officia eveniet obcaecati neque architecto ut, magnam
        odit optio veniam.
      </p>
      <Button />

      <div>
        <button onClick={checkConsole}>check</button>
      </div>

      <div>
        <MyComponent />
      </div>
    </div>
  );
};

export default RandingPage;
