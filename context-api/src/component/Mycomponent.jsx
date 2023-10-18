/* eslint-disable no-undef */
import { useContext } from "react";

import { GlobalContext } from "../store/GlobalContext";

export function MyComponent() {
  const { state, dispatch } = useContext(GlobalContext);
  console.log("state", state, "dispatch", dispatch);

  const addData = (newData) => {
    dispatch({ type: "ADD_DATA", payload: newData });
  };

  const incrementCount = () => {
    dispatch({ type: "INCREMENT_COUNT" });
  };

  return (
    <div>
      <p>Data: {state?.data?.join(", ")}</p>
      <p>Count: {state?.count}</p>
      <button onClick={() => addData("New Data")}>Add Data</button>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}
