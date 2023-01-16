import { createContext, useReducer, useContext } from "react";
import sharedStateReducer, { initialState } from "./sharedStateReducer";

const SharedStateContext = createContext(initialState);

export const SharedStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sharedStateReducer, initialState);

  const setCount = (count) => {
    dispatch({
      type: "setCount",
      payload: {
        count: count,
      },
    });
  };

  const value = {
    count: state.count,
    setCount,
  };

  return (
    <SharedStateContext.Provider value={value}>
      {children}
    </SharedStateContext.Provider>
  );
};

const useSharedState = () => {
  const context = useContext(SharedStateContext);

  console.log("context" + context);
  if (context === undefined) {
    throw new Error("useSharedState must be used within ShopContext");
  }

  return context;
};

export const getUseSharedState = () => {
  return useSharedState;
};

export default useSharedState;
