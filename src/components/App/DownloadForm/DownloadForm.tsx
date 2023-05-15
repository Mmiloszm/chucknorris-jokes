import ValueInput from "./ValueInput.tsx/ValueInput";

import "@styles/components/app/download-form/styles.scss";
import { useReducer } from "react";
import { getMultipleJokes } from "lib/api";

export type ValueAction = {
  type: "increase" | "decrease" | "change";
  payload: number;
};

export type ValueState = {
  value: number;
};

const valueReducer = (state: ValueState, action: ValueAction) => {
  const { type, payload } = action;
  switch (type) {
    case "increase":
      return {
        ...state,
        value: state.value + payload,
      };
    case "decrease":
      return {
        ...state,
        value: state.value - payload,
      };

    case "change":
      return {
        ...state,
        value: payload,
      };
    default:
      return state;
  }
};

const DownloadForm = () => {
  const [value, valueDispatch] = useReducer(valueReducer, { value: 0 });

  const handleDownloadJokes = (jokes: string[]) => {
    const text = jokes.join("\n");
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });

    element.href = URL.createObjectURL(file);
    element.download = "very_funny_jokes.txt";
    document.body.appendChild(element);
    element.click();

    document.body.removeChild(element);
    URL.revokeObjectURL(element.href);
  };

  return (
    <>
      <form className="download-form">
        <ValueInput value={value} valueDispatch={valueDispatch} />
        <button
          type="button"
          className="download-button"
          disabled={value.value < 1 || value.value > 100}
          onClick={async () => {
            const jokes = await getMultipleJokes({
              numberOfJokes: value.value,
            });
            handleDownloadJokes(jokes);
          }}
        >
          Save Jokes
        </button>
      </form>
      {value.value > 100 && (
        <p className="error-message">You can pick a number from 1 to 100</p>
      )}
    </>
  );
};

export default DownloadForm;
