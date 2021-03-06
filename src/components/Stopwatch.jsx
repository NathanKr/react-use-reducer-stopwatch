import { useEffect, useReducer } from "react";
import stopwatchReducer, { actions } from "../reducers/stopwatch-reducer";

const Stopwatch = () => {
  const [state, dispatch] = useReducer(stopwatchReducer, {
    isRunning: false,
    tics: 0,
  });

  useEffect(incrementHandler, [state.isRunning]);
  function incrementHandler() {
    if (!state.isRunning) {
      return;
    }

    handler = setInterval(() => {
      dispatch({ type: actions.increment });
    }, 1000);

    return () => {
      clearInterval(handler);
      handler = null;
    };
  }
  let handler = null;

  return (
    <div>
      {/* todo : disable if not relevant */}
      <p>tics : {state.tics} [s]</p>
      <button onClick={() => dispatch({ type: actions.start })}>Start</button>
      <button onClick={() => dispatch({ type: actions.stop })}>Stop</button>
      <button onClick={() => dispatch({ type: actions.reset })}>Reset</button>
    </div>
  );
};

export default Stopwatch;
