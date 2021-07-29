const initialState = false;

export const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "hide":
      return (state = true);
    case "show":
      return (state = false);
    default:
      return state;
  }
};
