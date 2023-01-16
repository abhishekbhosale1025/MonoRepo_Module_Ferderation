import React, { createContext, useContext } from "react";
import { useState } from "react";

export const initialState = {
  count: 0,
  setCount: (count) => {},
};

const sharedStateContext = createContext(initialState);

const shareStateReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "count":
      console.log("count", payload);
      return state.count;
    case "setCount":
      return {
        ...state,
        count: payload.count,
      };
  }
};

function SharedStateProvider({ children }) {
  const [state, dispatch] = useReducer(shareStateReducer, initialState);

  return (
    <>
      <sharedStateContext.Provider value={initialVal}>
        {children}
      </sharedStateContext.Provider>
    </>
  );
}

export { SharedStateProvider, shareStateReducer, sharedStateContext };
