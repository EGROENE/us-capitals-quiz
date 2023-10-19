import "./App.css";
import { useState } from "react";
import statesInfo from "./constants.js";
import State from "./Components/State/State";

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const [currentScore, setCurrentScore] = useState<number>(0);

  const [stateHasBeenAnswered, setStateHasBeenAnswered] =
    useState<boolean>(false);

  function toNextState(): void {
    setStateHasBeenAnswered(false);
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <>
      <div
        className={currentIndex === -1 ? "onGreet" : "onQuestion"}
        style={
          currentIndex !== -1
            ? {
                background: `url(${statesInfo[currentIndex].backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "unset",
              }
            : undefined
        }
        id="hero"
      >
        {currentIndex === -1 ? (
          <div id="greeting-box">
            <h1>Welcome to the US State Capitals Quiz!</h1>
            <h2>Click the button below to get started.</h2>
            <button id="start-btn" onClick={toNextState}>
              Let's go!
            </button>
          </div>
        ) : (
          <State
            stateHasBeenAnswered={stateHasBeenAnswered}
            setStateHasBeenAnswered={setStateHasBeenAnswered}
            currentScore={currentScore}
            setCurrentScore={setCurrentScore}
            answeredStates={currentIndex + 1}
            state={statesInfo[currentIndex]}
            statesInfoLength={statesInfo.length}
            toNextState={toNextState}
          />
        )}
      </div>
    </>
  );
}

export default App;
