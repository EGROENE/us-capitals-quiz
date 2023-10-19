interface InGameBtnsProps {
  toNextState: void;
  stateHasBeenAnswered: boolean;
}

const InGameBtns = (props: InGameBtnsProps) => {
  function refreshPage(): void {
    window.location.reload();
  }

  return (
    <div id="reset-next-btns">
      <button className="reset-btn" onClick={refreshPage}>
        Reset Game
      </button>
      <button
        disabled={!props.stateHasBeenAnswered}
        className="next-btn"
        onClick={props.toNextState}
      >
        Next
      </button>
    </div>
  );
};

export default InGameBtns;
