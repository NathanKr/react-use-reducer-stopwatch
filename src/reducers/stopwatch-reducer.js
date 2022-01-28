export default function stopwatchReducer(state, action) {
  let newState;
  switch (action.type) {
    case actions.start:
      newState = { ...state, isRunning: true };
      break;

    case actions.stop:
      newState = { ...state, isRunning: false };
      break;

    case actions.reset:
      newState = { tics: 0, isRunning: false };
      break;

    case actions.increment:
      newState = { ...state, tics: state.tics + 1 };
      break;

    default:
      throw new Error();
  }

  return newState;
}

export const actions = {
  start: "start",
  stop: "stop",
  reset: "reset",
  increment: "increment",
};
