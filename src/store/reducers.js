const rootState = {
  count: 0,
};

export function rootReducer(state = rootState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload };
    case "MULTIPLICATION":
      return { ...state, count: state.count * action.payload };
    default:
      return state;
  }
}
