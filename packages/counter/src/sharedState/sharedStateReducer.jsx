export const initialState = {
  count: 0,
  setCount: () => {},
};

const sharedStateReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "setCount":
      console.log("SetCount", payload);

      return {
        ...state,
        count: payload.count,
      };

    default:
      throw new Error(`No case for type ${type} found in shareStateReducer.`);
  }
};

export default sharedStateReducer;
