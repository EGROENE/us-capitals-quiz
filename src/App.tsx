import "./App.css";
import { useState } from "react";
import statesInfo from "./constants.js";

// Child components:
import Greeting from "./Components/Greeting/Greeting.js";
import State, {
  StateAnswerObject,
  StateDataObject,
} from "./Components/State/State";
import Results from "./Components/Results/Results.js";

const shuffleArray = (array: [string, string][]): [string, string][] => {
  for (let i = 1; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const allStateAnswersObjects = statesInfo.map((state: StateDataObject) => {
  return state.options;
});

// Use this to populate answers in State.tsx
const allStateAnswersObjectsShuffled = allStateAnswersObjects.map(
  (answerObject: StateAnswerObject) => {
    return shuffleArray(Object.entries(answerObject));
  }
);

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const [currentScore, setCurrentScore] = useState<number>(0);

  const [stateHasBeenAnswered, setStateHasBeenAnswered] =
    useState<boolean>(false);

  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  function toNextState(): void {
    setStateHasBeenAnswered(false);
    setCurrentIndex(currentIndex + 1);
  }

  const isQuizComplete = currentIndex === statesInfo.length;

  return (
    <>
      <div
        className={
          currentIndex === -1 || isQuizComplete ? "onGreet" : "onQuestion"
        }
        style={
          currentIndex !== -1 && !isQuizComplete
            ? {
                backgroundImage: `url(${statesInfo[currentIndex].backgroundImage})`,
              }
            : undefined
        }
        id="hero"
      >
        {currentIndex === -1 && <Greeting toNextState={toNextState} />}
        {!isQuizComplete && currentIndex !== -1 && (
          <State
            currentIndex={currentIndex}
            toNextState={toNextState}
            stateHasBeenAnswered={stateHasBeenAnswered}
            setStateHasBeenAnswered={setStateHasBeenAnswered}
            currentScore={currentScore}
            setCurrentScore={setCurrentScore}
            answeredStates={currentIndex + 1}
            stateName={statesInfo[currentIndex].name}
            stateAnswers={allStateAnswersObjectsShuffled[currentIndex]}
            statesInfoLength={statesInfo.length}
            isCorrect={isCorrect}
            setIsCorrect={setIsCorrect}
          />
        )}
        {isQuizComplete && (
          <Results
            currentScore={currentScore}
            statesInfoLength={statesInfo.length}
          />
        )}
      </div>
    </>
  );
}

export default App;
